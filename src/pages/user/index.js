import {withRedux} from '../../lib/redux'
import Layout from '../../layouts'
import SectionTitle from '../../components/section-title'
import Datatable from "../../components/datatable";
import {USER_COLUMN_HEADERS} from "../../utils/columns"
import { useEffect } from 'react';
import { getUsers } from '../../utils/apiCalls';
import Link from "next/link";
import {ax} from "../../utils/apiCalls"
import React from "react";
import {NotificationManager} from 'react-notifications'



const User=()=>{
    const [userData,setUserData]=React.useState([]);
  const [status, setStatus] = React.useState(undefined);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [permissions,setPermissions]=React.useState({get:false,update:false,delete:false,view:false,update:false,setRole:false})

  const getPermissions = async () => {
    const token = localStorage.getItem('token');
    await ax
      .get("/permissions", {headers: {
        'Authorization': `Bearer ${token}`
       }})
      .then((res) => {
        let permissions={get:false,update:false,delete:false,view:false,add:false,setRole:false}
        res.data.map((permission)=>{
        if(permission.route == "users.index"){
          permissions["get"] = true;
        } else if(permission.route == "users.update"){
          permissions["update"] = true;
        }else if(permission.route == "users.destroy"){
          permissions["delete"] = true;
        }else if(permission.route == "users.show"){
          permissions["view"] = true;
        }else if(permission.route == "users.store"){
          permissions["add"] = true;
        }else if(permission.route == "users.role.set"){
          permissions["setRole"]=true
        }
        })
        setPermissions({...permissions})
      })
      .catch((err) => {
        console.error("get /permissions error", err);
      });
  };
    
     const getUsersApi=async()=>{
    const token= localStorage.getItem("token");
      await ax
        .get("/users", {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then((res) => {
          setUserData(res.data)
        })
        .catch((err) => {
        setStatus({ type: "error",message: err.response.data.message });
        });
   }

   const deleteUserApi=(id)=>{
    if (typeof window !== "undefined") {
      const token = localStorage.getItem('token');
      const answer = window.confirm("are you sure?");
      if (answer) {
        ax.delete(`/users/${id}`, {headers: {
          'Authorization': `Bearer ${token}`
         }})
          .then((res) => {
        setStatus({ type: "success" });
            setTimeout(() => {
              getUsersApi();
            }, 1000);
          })
          .catch((err) => {
            setStatus({ type: "error",message: err.response.data.message });
            console.error("get /usres error", err.message);
          });
      } else {
        console.log("Thing was not saved to the database.");
      }
    }
   }

  


    useEffect(()=>{
      getPermissions()
      getUsersApi()
    },[])

    const columns = [
        {
          Header: 'Name',
          accessor: 'name'
        },
        {
          Header: 'Email',
          accessor: 'email'
        },
        {
          Header: 'Organization Name',
          accessor: 'org_name'
        },
     
        {
          Header: 'Actions',
          sortable: false,
          cell: () => <Button variant="danger" data-tag="allowRowEvents" data-action="delete"><FontAwesomeIcon icon={faTrash} /></Button>,
          Cell: (data) => {
            return (
              <div className="flex justify-evenly"> 
         {permissions.view &&   <Link href={`/user/view/${data.row.original.id}`}>
                <p>
                  <i className="icon-eye text-1xl font-bold mb-2"></i>
                </p>
            </Link>}
          {permissions.delete &&  <p
            style={{
  
              cursor: "pointer",
              lineHeight: "normal",
            }}
            onClick={() => deleteUserApi(data.row.original.id)}><i className="icon-trash text-1xl font-bold mb-2"></i>
            </p>}   
            {
              permissions.update &&  <Link href={`/user/update/${data.row.original.id}`}>
              <p>
                <i className="icon-note text-1xl font-bold mb-2"></i>
              </p>
          </Link>
            }  
            {
              permissions.setRole &&  <Link href={`/user/setRole/${data.row.original.id}`}>
              <p>
                <i className="icon-refresh text-1xl font-bold mb-2"></i>
              </p>
          </Link>
            }
              
    
            </div>
            )
          }
    
        }
      ]
      return (
        <Layout>
     <SectionTitle title="User Management" subtitle="" />
     {status?.type === "success" && (
      <div className="flex flex-wrap w-full">
      <div className="p-2">
      { NotificationManager.success('Deleted user successfully', 'Success')}
      </div>
    </div>
    )}
      {status?.type === "error" && (
        <div className="flex flex-wrap w-full">
        <div className="p-2">
        { NotificationManager.error(status.message, 'Error')}
         
        </div>
      </div>
      )}
        <div className="flex flex-row pb-4">
        <div className=" w-5/6">
          <input
            type="text"
            name="search"
            className="w-full p-2 ..."
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
          />
        </div>
        {permissions.add && <div className="w-1/6 ">
        {" "}
        <Link href={`/user/addUser`}>
            <button
              className="ml-3  btn btn-default btn-indigo create-btn w-full"
              type="button"
            >
              Add User
            </button>
        </Link>
      </div>}
        
      </div>
        <Datatable columns={columns} data={
          userData?.filter((val) => {
            if (searchQuery == "") {
              return val;
            } else if (
             (val.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()) || val.email?.toLowerCase().includes(searchQuery.toLocaleLowerCase()) || val.org_name?.toLowerCase().includes(searchQuery.toLocaleLowerCase())) 
            ) {
              return val;
            }
          })
          .map((value, idx) => {return value})} customclassName="usertableList" />
        </Layout>
        )
}

export default withRedux(User)
