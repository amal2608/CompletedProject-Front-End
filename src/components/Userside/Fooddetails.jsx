import axios from 'axios';
import { Buffer } from 'buffer';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Fooddetails = () => {
    const { id } = useParams()

    var [Fooddet, setFooddet] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(id)
        axios.get("http://localhost:4005/fooddetails/" + id)
            .then(response => {
                console.log(response.data)
                setFooddet(response.data)
            })
            .catch(err => console.log(err))
    }, [])



    return (
        <div style={{ marginTop: "4rem", display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: "6rem" }}>
            <Link to={'/order'} style={{ color: 'blue', fontSize: '1.8rem',fontWeight:'500' }}>Back</Link>
            {Fooddet.map((val, index) => (
                <div key={index} style={{ width: '300px', height: '400px', margin: '20px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <img src={`data:image/jpeg;base64,${Buffer.from(val.Foodimage.data).toString('base64')}`}
                        style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="Error" />
                    <div>
                        <p><strong>Food Name:</strong> {val.Foodname}</p>
                        <p><strong>Food Type:</strong> {val.Foodtype}</p>
                        <p><strong>Amount:</strong> {val.Amount}</p>
                        <p><strong>Description:</strong> {val.Description}</p>

                    </div>

                </div>
            ))}
        </div>
    );
};

export default Fooddetails;
