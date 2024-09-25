import * as React from 'react';
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
//import { singleCustomer } from "../../data"
import "./customers.scss"
import SinglePage from '../../components/singlePage/SinglePage';

export default function Customer() {
    const params = useParams();
    const [singleCustomer, setData] = useState([]);
    const [loader,setLoader] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoader(true);
                const response = fetch('/api/getCustomers/' + params.id, 
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
                        console.log('got single data:' + singleCustomer)
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
        <div className="customer">
            <SinglePage {...singleCustomer}/>
        </div>)}
        </>
    )
}