import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const ProductModal = ({ products }) => {
    const {user} = useContext(AuthContext)
    console.log(products)

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;

        const userName = form.userName.value;
        const email = form.email.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const meetLocation = form.meetLocation.value;

        const buy = {
            productName: products.productName,
            image: products.image,
            userName,
            email,
            phone,
            price,
            meetLocation
        }

        console.log(buy)

        fetch('http://localhost:5000/buy', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(buy)
        })
        .then( res => res.json())
        .then( data => {
            console.log(data)
            if(data.acknowledged) {
                toast.success('Your product items booked')
            }
            else {
                toast.error(data.message)
            }
        })

        
    }

    return (
        <>
            <input type="checkbox" id="product-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{products?.productName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-5'>
                        

                        <input
                            name='userName'
                            type="text"
                            defaultValue={user?.displayName}
                            disabled
                            placeholder="Your Name Here"
                            className="input input-bordered w-full"
                        />
                        <input
                            name='email'
                            type="text"
                            defaultValue={user?.email}
                            disabled
                            placeholder="Your Email Address"
                            className="input input-bordered w-full"
                            required
                        />
                        <input
                            name='price'
                            type="number"
                            defaultValue={products?.resalePrice}
                            disabled
                            placeholder="Your Email Address"
                            className="input input-bordered w-full"
                            required
                        />
                        <input
                            name='phone'
                            type="text"
                            placeholder="Your Phone Number"
                            className="input input-bordered w-full"
                            required
                        />
                        <input
                            name='meetLocation'
                            type="text"
                            placeholder="Enter location you want to meet"
                            className="input input-bordered w-full"
                            required
                        />
                        <input
                            name='submit'
                            type="submit"
                            value="Submit"
                            className="btn"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProductModal;