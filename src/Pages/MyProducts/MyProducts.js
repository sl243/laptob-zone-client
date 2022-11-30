import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import Loading from '../../Loading/Loading';

const MyProducts = () => {
    const {user} = useContext(AuthContext)
    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/products?email=${user?.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('access-token')}`
                    }
                })
                const data = await res.json();
                return data;
            }
            catch {

            }
        }
    })

    if(isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='text-3xl mb-6 mt-5'>My Products</h3>
            <div className="overflow-x-auto mt-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Origin Price</th>
                            <th>Resale Price</th>
                            <th>Condition</th>
                            <th>Use</th>
                            <th>Location</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask w-20 h-20">
                                            <img src={product.image} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>{product.productName}</td>
                                <td>{product.originPrice}</td>
                                <td>{product.resalePrice}</td>
                                <td>{product.condition}</td>
                                <td>{product.use}</td>
                                <td>{product.location}</td>
                                <td>Available</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;