import  React from 'react';
import DataTable from '../../components/dataTable/DataTable';
import { userRows } from '../../data';
import { useEffect, useState } from 'react';





const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

export default function Customers ()
{
  const [data, setData] = useState([]);

  const getCustomers = () => {
    useEffect(() => {
      const fetchData = async () => {
        try {

          const response = fetch('https://zuhjsc6ea9.execute-api.us-east-1.amazonaws.com/dev', 
            { mode: 'cors', 
              method: 'OPTIONS',
              headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https://localhost:5173', 
                'Vary': 'Origin',
                'Access-Control-Allow-Methods': 'GET,OPTIONS',  
                'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,Access-Control-Allow-Origin,Access-Control-Allow-Methods', 
            },
            }).then(result => {
              console.log(result)
              if(result.ok) {
                result.json().then(json => {
                  console.log("fetch result: " + result)
                }
              )
             }else { console.log("failed: " + result)}
            })
            
          //const result = await response;
  
          //console.log('Result:' + JSON.stringify(result))
  
          //setData(result);

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
  
    }, []);
  }
  
  getCustomers()

  console.log('Data result' + data)
  return (
    <>
    <div><DataTable columns={columns} rows={userRows}/></div>
    </>
  )
}