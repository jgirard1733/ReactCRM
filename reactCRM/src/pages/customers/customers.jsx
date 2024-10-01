import  React from 'react';
import DataTable from '../../components/dataTable/DataTable';
import { useEffect, useState } from 'react';
import "./customers.scss"
import AddModal from '../../components/addModal/addModal'

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
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
    field: "createdDate",
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
  const[open, setOpen] = useState(false)
  const [loader,setLoader] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const response = fetch('/api/getCustomers', 
          { 
            mode: 'cors', 
            method: 'GET',
            headers: {
              Accept: 'application/json',
            },
          }).then(result => {
            if(result.ok) {
              result.json().then(json => {
                var parsed = JSON.parse(JSON.stringify(json))
                var rows = parsed.length
                let jObject = []
                for (let x = 0; x < rows; x++)
                {
                  var isInfo = parsed[x].hasOwnProperty('info')
                  if (isInfo)
                  {
                   jObject.push(JSON.parse(parsed[x].info))
                  }
                }
                setLoader(false)
                setData(jObject)
              }
            )
            }
            else { 
            console.log("failed: " + result)
          }
          })            
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData()

  }, []);
  
    return (
        <>
        { loader? <div className='loader'></div> :(
        <div className="customers">
          <div className="info">
            <h1>Customers</h1>
            <button onClick={() => setOpen(true)}>Add New Customer</button>
          </div>
          <DataTable heading="Customer" columns={columns} rows={data} />

          {open && <AddModal heading="Customer" columns={columns} setOpen={setOpen} />}
        </div>   
        )} 
        </>
    )
}