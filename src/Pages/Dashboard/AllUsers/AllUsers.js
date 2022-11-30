import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Share/ConfirmationModal/ConfirmationModal';

const AllUsers = () => {
    const [deleteUsers, setDeleteUsers] = useState(null)

    const closeModal = () => {
        setDeleteUsers(null)
    }


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://laptob-zone-server.vercel.app/users')
            const data = await res.json()
            return data;
        }
    })

     // delete user
     const handleDeleteUser = user => {
        fetch( `https://laptob-zone-server.vercel.app/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('access-token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(`User ${user.name} deleted successfully`)
                setDeleteUsers(data)
            }
            
        })
    }

    return (
        <div>
            <h1 className='text-3xl mb-6 mt-5'>All Users</h1>
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
                            users?.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.buyerSeller}</td>
                                <td>
                                    <label
                                        onClick={() => handleDeleteUser(user)}
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
            {
                deleteUsers &&
                <ConfirmationModal
                    title={`Are you sure want to delete`}
                    message={`If you delete ${deleteUsers.name}. It cannot be undone`}
                    successAction={handleDeleteUser}
                    modalData={deleteUsers}
                    closeModal={closeModal}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default AllUsers;