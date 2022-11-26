import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext)


    const {data: buy = []} = useQuery({
        queryKey: ['buy'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/buy?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
        
    })
    return (
        <div>
            <h1>My All Orders</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Picture</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buy.map((order, i) => <tr key={order._id}>
                                <th>{i+1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={order.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Pay</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;