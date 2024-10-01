import  React from 'react';
import DataTable from '../../components/dataTable/DataTable';
import { useEffect, useState } from 'react';
import "./products.scss"
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
      field: "title",
      type: "string",
      headerName: "Title",
      width: 250,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 200,
    },
    {
      field: "type",
      type: "string",
      headerName: "Type",
      width: 150,
    },
    {
      field: "length",
      type: "string",
      headerName: "Length",
      width: 200,
    },

    {
      field: "CreatedDate",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "Eligible?",
      width: 150,
      type: "boolean",
    },
  ];

export default function Products ()
{
  const [data, setData] = useState([]);
  const[open, setOpen] = useState(false)
  const [loader,setLoader] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const response = fetch('/api/getProducts', 
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
          <div className="products">
            <div className="info">
              <h1>Products</h1>
              <button onClick={() => setOpen(true)}>Add New Product</button>
            </div>
            <DataTable heading="Product" columns={columns} rows={data} />

            {open && <AddModal heading="Product" columns={columns} setOpen={setOpen} />}
          </div>   
        )} 
        </>
    )
}