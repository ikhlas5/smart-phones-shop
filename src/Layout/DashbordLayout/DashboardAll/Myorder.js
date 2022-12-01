import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Shared/UserContext/UserContext';

const Myorder = () => {
    const{user}=useContext(AuthContext);
    const[orders,setOrders]=useState();
    console.log(orders)
    useEffect(()=>{
        fetch(`https://smart-phones-shop-server.vercel.app/booking?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[user?.email])
    return (
        <div>
            <h3 className="text-3xl mb-5">My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Price</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders &&
                            orders?.map((order, i) => <tr key={order._id}>
                                <th>{i + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.phone}</td>
                                <td>{order.resale_price}</td>
                                <td>{order.meetingLocation}</td>
                               
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myorder;