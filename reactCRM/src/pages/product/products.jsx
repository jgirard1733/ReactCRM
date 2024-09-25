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
      field: "color",
      type: "string",
      headerName: "Color",
      width: 150,
    },
    {
      field: "price",
      type: "string",
      headerName: "Price",
      width: 200,
    },
    {
      field: "producer",
      headerName: "Producer",
      type: "string",
      width: 200,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: "string",
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 150,
      type: "boolean",
    },
  ];

export default function Products ()
{
  const [data, setData] = useState([]);
  const[open, setOpen] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {

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
                setData(json)
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
        <div className="products">
          <div className="info">
            <h1>Products</h1>
            <button onClick={() => setOpen(true)}>Add New Product</button>
          </div>
          <DataTable heading="Product" columns={columns} rows={data} />

          {open && <AddModal heading="Product" columns={columns} setOpen={setOpen} />}
        </div>    
        </>
    )
}