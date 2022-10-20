import {withRedux} from '../../lib/redux'
import Layout from '../../layouts'
import SectionTitle from '../../components/section-title'
import Datatable from "../../components/datatable";
import {USER_COLUMN_HEADERS} from "../../utils/columns"
import { useEffect } from 'react';
import { getUsers } from '../../utils/apiCalls';
import axios from "axios";
import Link from "next/link";


const ax = axios.create({
  
  baseURL: 'https://app.mtalkz.cloud/api',
  // baseURL: 'http://127.0.0.1:8000/api',
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
    'Accept': 'application/json',
    // 'Authorization': `Bearer ${token}`
   }
   
})
const User=()=>{
    const [userData,setUserData]=React.useState([]);
    
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
          console.log(res.data,"&&&&&&&&&&&&&&&&&&&&&")
        })
        .catch((err) => {
          console.error("get /fetchUsers error", err);
        });
   }


    useEffect(()=>{
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
          Header: 'Organization id',
          accessor: 'organization_id'
        },
        {
          Header: 'Actions',
          sortable: false,
          cell: () => <Button variant="danger" data-tag="allowRowEvents" data-action="delete"><FontAwesomeIcon icon={faTrash} /></Button>,
          Cell: (data) => {
            console.log('row', data.row);
            return (<div className="flex justify-evenly"> <Link href={`/user/view/${data.row.original.id}`}>
              <a>
                <p>
                  <i className="icon-eye text-1xl font-bold mb-2"></i>
                </p>
              </a>
            </Link> <p
              style={{
    
                cursor: "pointer",
                lineHeight: "normal",
              }}
              onClick={() => handleDelete(data.row.original.id)}><i className="icon-trash text-1xl font-bold mb-2"></i>
              </p>
              <Link href={`/users/update/${data.row.original.id}`}>
                <a>
                  <p>
                    <i className="icon-note text-1xl font-bold mb-2"></i>
                  </p>
                </a>
              </Link>
              <Link href={`/users/setRole/${data.row.original.id}`}>
                <a>
                  <p>
                    <i className="icon-refresh text-1xl font-bold mb-2"></i>
                  </p>
                </a>
              </Link>
    
            </div>
            )
          }
    
        }
      ]
      return (
        <Layout>
        <Datatable columns={columns} data={userData} customclassName="usertableList" />
        </Layout>
        )
}

export default withRedux(User)
