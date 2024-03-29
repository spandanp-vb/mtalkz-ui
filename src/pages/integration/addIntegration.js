import React, { useState, useEffect } from "react";
import SectionTitle from "../../components/section-title";
import { useForm } from "react-hook-form";
import Layout from "../../layouts";
import { useRouter } from "next/router";
import { withRedux } from "../../lib/redux";
import {ax} from "../../utils/apiCalls";
import {HTTP_METHODS} from "../../utils/constants";
import {NotificationManager} from 'react-notifications';
import { WithContext as ReactTags } from 'react-tag-input';
import Switch from 'react-switch'
import Select from "react-select";
import { object } from "prop-types";
import channel from "../channel";

const addIntegration = () => {
  const router = useRouter();
  const [res, setRes] = useState({});
  const [status, setStatus] = useState(undefined);
  const [approval, handleApproval] = useState(false)
  const [access, handleAccess] = useState(false)
  const [organizations,setOrganizations]=useState([])
  const [selectedOrganizations,setSelectedOrganizations]=useState([])
  const [errors,setErrors]=useState(undefined)
  const [selectedChannel,setSelectedChannel]=useState(undefined);
 const [channels,setChannels]=useState([])

  const { register, handleSubmit, watch } = useForm();
  const [tags, setTags] = React.useState([
  ]);
  const [params, setParams] = React.useState([
  ]);
  const KeyCodes = {
    comma: 188,
    enter: 13
  };
  
  const delimiters = [KeyCodes.comma, KeyCodes.enter];

  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleParamDelete = i => {
    setParams(params.filter((tag, index) => index !== i));
  };

  const handleAddition = tag => {
    setTags([...tags, tag]);
  };
  const handleParamsAddition = tag => {
    setParams([...params, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setTags(newTags);
  };

  const handleParamDrag = (tag, currPos, newPos) => {
    const newTags = params.slice();
    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);
    setParams(newTags);
  };



  let handleSwitch = (value) => {
    let organizations=[];
    value.map((val)=>{
   organizations.push(val.value)
    })
    setSelectedOrganizations([...organizations])
  }

  const getOrganizations = async () => {
    const token= localStorage.getItem("token");
    await ax
      .get("/organizations", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setOrganizations(res?.data)
      })
      .catch((err) => {
        setStatus({ type: "error",message: err.response.data.message });
      });
  };

  const options = organizations?.map((value) => {
    return { label: value.name, value: value.id };
  });

  const getChannels = async () => {
    const token = localStorage.getItem('token');
    await ax
      .get("/channels", {headers: {
        'Authorization': `Bearer ${token}`
       }})
      .then((res) => {
        if(res.data.length>0){
          let _channels=[];
          _channels= res.data.map((channel)=>{
            return { label: channel.slug.toLowerCase(), value: channel.id };
          })
          setChannels(_channels);
        }
      })
      .catch((err) => {
        setStatus({ type: "error",message: err.response.data.message });
      });
  };

  const validateField=()=>{
    let _errors= { }
     if(tags.length==0 ){
      _errors={tags:['tags are required']}
     }
     if(params.length==0){
      _errors={..._errors,param_names:['parameters are required']}
    }
    if(access && selectedOrganizations.length==0){
      _errors={..._errors,access_granted_to:['permissions are required']}
    }
    if(selectedChannel && selectedChannel.length==0){
      _errors={..._errors,channel_slug:['channel slug are required']}
    }
    if(_errors && Object.keys(_errors).length>0)
    {
    setErrors(_errors)
      return false
    }
    else{
      return true
    }
  
  }

  let handleSwitchChannel = (value) => {
    setSelectedChannel([]);
    let channels=[]
      channels.push({label:value.label, value:value.value})
    setSelectedChannel([...channels])
  }

  const onSubmit = (data) => {
    const isValid= validateField()
    if (typeof window !== "undefined" && isValid) {
      data.requires_access=access;
      data.requires_approval=approval;
      data.channel_slug=selectedChannel[0].label
      let _tags=  tags.map((tag)=>{
       return tag.id
      })
      let _params=   params.map((param)=>{
        return param.id
      })
      data.tags=_tags;
    data.param_names=_params
    data.access_granted_to=selectedOrganizations
    const token = localStorage.getItem('token');
    ax.post("/integrations", data, {headers: {
      'Authorization': `Bearer ${token}`
     }})
      .then((res) => {
        setRes(res.data);
        setStatus({ type: "success" });
        setTimeout(() => {
        router.push("/integration");
        }, 1000);
      })
      .catch((err) => {
        if(err.response.data.errors){
          setErrors(err.response.data.errors)
        }else{
          setStatus({ type: "error",message: err.response.data.message });
        }
      });
    }
  };

  useEffect(()=>{
    
    getChannels();
    if(organizations.length===0){
      getOrganizations();
    }
  },[])

  
 

  return (
    <Layout>
    <SectionTitle title="Create Integration" subtitle="" />
    {status?.type === "success" && (
      <div className="flex flex-wrap w-full">
      <div className="p-2">
      { NotificationManager.success('Added integration successfully', 'Success')}
      </div>
    </div>
    )}
      {status?.type === "error" && (
        <div className="flex flex-wrap w-full">
        <div className="p-2">
        {   NotificationManager.error(status.message,"Error")}
        </div>
      </div>
      )}

      <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col text-sm mb-4 lg:w-1/3"
    >
     

         {/*input*/}
         <div className="w-full mb-4">
         <label className="block">
           <span className="text-default">Name</span>
           <input
             name="name"
             type="text"
             className="form-input mt-1 text-xs block w-full bg-white"
             placeholder="Enter Integartion name"
             required
    ref={register()}
             maxLength={255}
           />
         </label>
         {errors && errors.name && (
          errors.name.map((err)=>{
           return <p className="mt-1 text-xs text-red-500">{err}</p>
          })
         
        )}
         </div>

          {/*input*/}
          <div className="w-full mb-4">
          <label className="block">
            <span className="text-default">Slug</span>
            <input
              name="slug"
              type="text"
              className="form-input mt-1 text-xs block w-full bg-white"
              placeholder="Enter  Integration Slug"
              required
              ref={register()}
              maxLength={255}
              pattern="[a-z0-9\-]+"
              title="Only Alphanumeric characters are allowed"
            />
          </label>
          {errors && errors.slug && (
            errors.slug.map((err)=>{
             return <p className="mt-1 text-xs text-red-500">{err}</p>
            })
           
          )}
          </div>
          

          {/*input*/}
          <div className="w-full mb-4">
          
      <div style={{ width: "300px" }}>
      <label className="block">
      <span className="text-default">Channel Slug</span>
      <Select
        options={channels}
        placeholder="Select Channel Slug"
        onChange={handleSwitchChannel}
        value={selectedChannel}
      />
      </label>
          {errors && errors.channel_slug && (
            errors.channel_slug.map((err)=>{
             return <p className="mt-1 text-xs text-red-500">{err}</p>
            })
           
          )}
          </div>
          </div>

            {/*input*/}
            <div className="w-full mb-4">
            <label className="block">
              <span className="text-default">Icon Url</span>
              <input
                name="icon_url"
                type="url"
              ref={register()}
                className="form-input mt-1 text-xs block w-full bg-white"
                placeholder="Enter Integration Icon URL "
              />
            </label>
            {errors && errors?.icon_url && (
              errors.icon_url.map((err)=>{
               return <p className="mt-1 text-xs text-red-500">{err}</p>
              })
             
            )}
            </div>

             {/*input*/}
             <div className="w-full mb-4">
             <label className="block">
               <span className="text-default">Description</span>
               <input
                 name="description"
                 type="text"
                 className="form-input mt-1 text-xs block w-full bg-white"
                 placeholder="Enter Integration Description "
              ref={register()}

               />
             </label>
             {errors && errors.description && (
              errors.description.map((err)=>{
               return <p className="mt-1 text-xs text-red-500">{err}</p>
              })
             
            )}
             </div>

             <div style={{marginBottom:"10px"}}>
             <span className="text-default">Tags</span>
             <ReactTags
             tags={tags}
             delimiters={delimiters}
             handleDelete={handleDelete}
             handleAddition={handleAddition}
             handleDrag={handleDrag}
             inputFieldPosition="bottom"
             autocomplete
           />
           {errors && errors.tags && (
            errors.tags.map((err)=>{
             return <p className="mt-1 text-xs text-red-500">{err}</p>
            })
           
          )}
             </div>

  {/*input*/}
  <div className="w-full mb-4">
  <label className="block">
    <span className="text-default">Api Url</span>
    <input
      name="api_url"
      type="url"
    ref={register()}
      className="form-input mt-1 text-xs block w-full bg-white"
      placeholder="Enter Integration Api URL "
      required
      maxLength={255}
    />
  </label>
  {errors && errors.api_url && (
    errors.api_url.map((err)=>{
     return <p className="mt-1 text-xs text-red-500">{err}</p>
    })
   
  )}
  </div>

  {/*input*/}
  <div className="w-full mb-4">
  <label className="block">
    <span className="text-default">Http Method</span>
    <select
    name="http_method"
    ref={register()}
    className="form-select block w-full mt-1 text-xs">
    {HTTP_METHODS.map((method)=>{
      return (
        <option value={method.value}>{method.label}</option>
      )
    })}
  </select>
  </label>
  {errors && errors.http_method && (
    errors.http_method.map((err)=>{
     return <p className="mt-1 text-xs text-red-500">{err}</p>
    })
   
  )}
  </div>
  
  <div style={{marginBottom:"10px"}}>
  <span className="text-default">Parameters</span>
  <ReactTags
  tags={params}
  delimiters={delimiters}
  handleDelete={handleParamDelete}
  handleAddition={handleParamsAddition}
  handleDrag={handleParamDrag}
  inputFieldPosition="bottom"
  autocomplete
/>
{errors && errors.param_names   && (
  errors.param_names  .map((err)=>{
   return <p className="mt-1 text-xs text-red-500">{err}</p>
  })
 
)}
  </div>

  <div>
  <span className="text-default">Requires Approval</span>

        <Switch
          onChange={() => handleApproval(!approval)}
          checked={approval}
          handleDiameter={24}
          uncheckedIcon={true}
          checkedIcon={true}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
        />
        {errors && errors.requires_approval     && (
          errors.requires_approval    .map((err)=>{
           return <p className="mt-1 text-xs text-red-500">{err}</p>
          })
         
        )}
      </div>
      <div>
  <span className="text-default">Requires Access</span>
        <Switch
          onChange={() => handleAccess(!access)}
          checked={access}
          handleDiameter={24}
          uncheckedIcon={true}
          checkedIcon={true}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          className="react-switch"
        />
        {errors && errors.requires_access && (
          errors.requires_access    .map((err)=>{
           return <p className="mt-1 text-xs text-red-500">{err}</p>
          })
         
        )}
      </div>

      {access &&
        <div style={{ width: "300px" }}>
          <Select
            options={options}
            placeholder="Select organizations ..."
            isMulti={true}
            onChange={handleSwitch}
            
          />
          {errors && errors.access_granted_to       && (
            errors.access_granted_to.map((err)=>{
             return <p className="mt-1 text-xs text-red-500">{err}</p>
            })
           
          )}
        </div>
      }

      <div className="w-full" style={{marginTop:"10px"}}>
        <input
          type="submit"
          className="btn btn-default btn-block btn-indigo "
          value="Submit"
        />
      </div>
    </form>
    </Layout>
  );
};
export default withRedux(addIntegration);

