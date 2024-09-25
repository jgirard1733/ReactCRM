import * as React from 'react';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
//import { singleCustomer } from "../../data"
import "./products.scss"
import SinglePage from '../../components/singlePage/singlepage';

export default function Product() {
    const params = useParams();
    const [singleProduct, setData] = useState([]);
    const [loader,setLoader] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoader(true);
                const response = fetch('/api/getProducts/' + params.id, 
                { 
                    mode: 'cors', 
                    method: 'GET',
                    headers: {
                    Accept: 'application/json',
                    },
                }).then(result => {
                    if(result.ok) {
                    result.json().then(json => {
                        setLoader(false)
                        setData(json)
                        console.log('got single data:' + singleProduct)
                        console.log('got data:' + JSON.stringify(json))

                    })}
                    else { 
                    console.log("failed: " + result)
                }
                })            
            } 
            catch (error) {
                console.error('Error fetching data:', error);
            }
        };
         fetchData()
      }, []);
    return (
        <>
        { loader? <div>Loading....</div> :(
        <div className="Product">
            <SinglePage {...singleProduct}/>
        </div>)}
        </>
    )
}