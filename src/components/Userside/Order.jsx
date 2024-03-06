import axios from 'axios';
import { Buffer } from 'buffer';
import React, { useEffect, useState } from 'react';
import baseUrl from '../../Api';
import { Link, useNavigate } from 'react-router-dom';

const Order = () => {
    var [Eventview, setEventview] = useState([]);
    var [Fooddet, setFooddet] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:4005/eventview")
        .then(response =>{
            console.log(response.data)
            setEventview(response.data)
        })
        .catch(err=>console.log(err))
    },[])

    const Fooddetails = (id) => {
        navigate(`/fooddetails/${id}`);
    };
    
    const handleSubmit = (value) => {
        console.log(value);
        navigate(`/address/${value}`);
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {Eventview.map((val, index) => (
                <div key={index} style={{ width: '300px', height: '500px', margin: '20px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <img src={`data:image/jpeg;base64,${Buffer.from(val.Eventimage.data).toString('base64')}`} 
                    style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="Error" />
                    <div>
                        <p><strong>Event ID:</strong> {val.Eventid}</p>
                        <p><strong>Event Name:</strong> {val.Eventname}</p>
                        <p><strong>Event Type:</strong> {val.Eventtype}</p>
                        <p><strong>Amount:</strong> {val.Amount}</p>
                        <p><strong>Description:</strong> {val.Description}</p>
                        <center><button  onClick={() => Fooddetails(val._id)}>View Food Details</button></center>
                    </div>
                    <button style={{ alignSelf: 'center' }} onClick={() => handleSubmit(val._id)}>Buy Now</button>
                </div>
            ))}
        </div>
    );
};

export default Order;
