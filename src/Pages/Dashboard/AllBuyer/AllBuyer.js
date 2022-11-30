import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyer = () => {

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch(`https://laptob-zone-server.vercel.app/buyers?buyerSeller=buyer`)
            const data = await res.json()
            return data;
        }
    
    })

     // Buyer delete
     const handleDeleteBuyer = user => {
        console.log(user)
        fetch( `https://laptob-zone-server.vercel.app/users/buyer/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`Buyer ${user.name} deleted successfully`)
            }
            
        })
    }

    return (
        <div>
            <h1 className='text-3xl mb-6 mt-5'>All Buyers</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.length >0 &&
                            buyers?.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer.buyerSeller}</td>
                                <td>
                                    <label
                                        onClick={() => handleDeleteBuyer(buyer)}
                                        htmlFor="confirmation-modal"
                                        className="btn btn-error btn-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default AllBuyer;