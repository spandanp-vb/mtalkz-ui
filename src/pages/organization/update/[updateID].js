import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../../layouts";
import SectionTitle from "../../../components/section-title";
import { useForm } from "react-hook-form";
import { withRedux } from "../../../lib/redux";
import { useRouter } from "next/router";
import {ax} from "../../../utils/apiCalls"
import { NotificationManager } from 'react-notifications'
import {
    NotificationError
  } from '../../../components/notifications'


const updateID = () => {
  const router = useRouter();
  const updateid = router.query.updateID;
  const [res, setRes] = useState({});
  const [status, setStatus] = useState(undefined);

  const getOrganizationDetails = async () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem('token');
      await ax
        .get(`/organizations/${updateid}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then((res) => {
          setRes(res.data.organization);
          console.log(res.data.organization);
        })
        .catch((err) => {
          console.error("get /organizations error", err);
        });
    }
  };
  

  useEffect(() => {
    getOrganizationDetails();
  }, []);


  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem('token');
      ax.put(`/organizations/${updateid}`, data, {
        headers: {

          'Authorization': `Bearer ${token}`
        }
      })
        .then((res) => {
          setRes(res.data);
          setStatus({ type: "success" });
          router.push("/organization");
        })
        .catch((err) => {
          console.error("get /Organization error", err);
          setStatus({ type: "error", err });
        });
    }
  };



  return (
    <Layout>
      <SectionTitle title="Update Organization" subtitle="" />
      {status?.type === "success" && (
        <div className="flex flex-wrap w-full">
          <div className="p-2">
            {NotificationManager.success('Success message', 'Title here')}
          </div>
        </div>
      )}
      {status?.type === "error" && (
        <div className="flex flex-wrap w-full">
          <div className="p-2">
            <NotificationError />
          </div>
        </div>
      )}



      <div className="flex flex-wrap">
        <div className="w-full">
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
                  ref={register({ required: true })}
                  className="form-input mt-1 text-xs block w-full bg-white"
                  placeholder="Enter your name"
                  defaultValue={res.name}
                />
              </label>
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">Name is required</p>
              )}
            </div>

            {/*input*/}
            <div className="w-full mb-4">
              <label className="block">
                <span className="text-default">Email address</span>
                <input
                  name="email"
                  type="email"
                  ref={register({ required: true })}
                  className="form-input mt-1 text-xs block w-full bg-white"
                  placeholder="Enter your email"
                  defaultValue={res.email}
                />
              </label>
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">Email is required</p>
              )}
            </div>

            {/*input*/}
            <div className="w-full mb-4">
              <label className="block">
                <span className="text-default">Phone</span>
                <input
                  name="phone"
                  type="text"
                  ref={register({ required: true })}
                  className="form-input mt-1 text-xs block w-full bg-white"
                  placeholder="Enter your phone no"
                  defaultValue={res.phone}
                />
              </label>
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">Phone No is required</p>
              )}
            </div>

            {/*input*/}

            {/*input*/}
            <div className="w-full mb-4">
              <label className="block">
                <span className="text-default">Address</span>
                <input
                  name="address"
                  type="text"
                  ref={register({ required: true })}
                  className="form-input mt-1 text-xs block w-full bg-white"
                  placeholder="Enter your Address"
                  defaultValue={res.address}
                />
              </label>
              {errors.address && (
                <p className="mt-1 text-xs text-red-500">Phone No is required</p>
              )}
            </div>



            <div className="w-full">
              <input
                type="submit"
                className="btn btn-default btn-block btn-indigo btn-rounded"
                value="Update"
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default withRedux(updateID);