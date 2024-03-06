import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Buffer } from 'buffer';
import { useNavigate } from 'react-router-dom';

import baseUrl from '../Api';

const Addressview = () => {
    const [ptype, setPtype] = useState([]);
    const [selected, setSelected] = useState();
    const [update, setUpdate] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(baseUrl + "/addressview")
            .then(response => {
                console.log(response.data.response);
                setPtype(response.data.response);
            })
            .catch(err => console.log(err));
    }, []);
    const toggleStatus = (id) => {
        const selectedItem = ptype.find(item => item._id === id);
        const updatedStatus = selectedItem.status === 'Ordered' ? 'Delivered' : 'Ordered';

        axios.put(baseUrl+"/orderupdatestatus/" + id, { status: updatedStatus })
            .then((response) => {
                // Update status in UI
                setPtype(prevState => prevState.map(item => item._id === id ? { ...item, status: updatedStatus } : item));
            })
            .catch(error => {
                console.error('Error updating status:', error);
            });
    };


    return (
        <div>
            <Navbar />
            <Sidebar />
<br/>
<br></br>
            <center>
                <Typography><h1><b>Order details</b></h1></Typography>
            </center>
            <br />

            <TableContainer style={{ marginLeft: '12vw', width: "85vw", marginTop: "0vw" }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Order ID</TableCell>
                            <TableCell>Order Date</TableCell>
                            <TableCell>Time</TableCell>
                            <TableCell>Event Name</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Customer Name</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Phone no</TableCell>
                            <TableCell>Status</TableCell>
                       
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ptype?.map((value, index) => (
                            <TableRow key={index}>
                                <TableCell>{value._id}</TableCell>
                                <TableCell>{value.date}</TableCell>
                                <TableCell>{value.time}</TableCell>
                            
                                <TableCell>{value.eventdet[0].Eventname}</TableCell>
                                <TableCell>{value.quantity}</TableCell>

                                <TableCell>{value.name}</TableCell>
                                <TableCell>{value.address}</TableCell>
                                <TableCell>{value.phone}</TableCell>
                                <TableCell>
                                    <button onClick={() => toggleStatus(value._id)}>{value.status}</button>
                                </TableCell>
                                
                                

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Addressview