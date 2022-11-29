import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const AllSeller = () => {
    const {user} = useContext(AuthContext)
    const email = user.email;

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/sellers?buyerSeller=seller`)
            const data = await res.json()
            return data;
        }
    
    })

    return (
        <div>
            <h1 className='text-3xl mb-6 mt-5'>All Seller: {sellers.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            {/* <th>Position</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.length >0 &&
                            sellers?.map((seller, i) => <tr key={seller._id}>
                                <th>{i + 1}</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller.buyerSeller}</td>
                                {/* <td>
                                    {user.role !== 'admin' &&
                                        <button
                                            onClick={() => handleMakePosition(user._id)}
                                            className="btn btn-ghost btn-sm">Make Admin
                                        </button>}
                                </td> */}
                                <td>
                                    <label
                                        // onClick={() => setDeleteUsers(user)}
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
            {/* {
                deleteUsers &&
                <ConfirmationModal
                    title={`Are you sure want to delete`}
                    message={`If you delete ${deleteUsers.name}. It cannot be undone`}
                    successAction={handleDeleteDoctor}
                    modalData={deleteUsers}
                    closeModal={closeModal}
                ></ConfirmationModal>
            } */}
        </div>
    );
};

export default AllSeller;