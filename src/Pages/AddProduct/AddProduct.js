import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const AddProduct = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const imageKey = process.env.REACT_APP_imgbb_key;

    const handleAddProduct = data => {
        const image = (data.image[0]);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const products = {
                        productName: data.productName,
                        originPrice: data.originPrice,
                        resalePrice: data.resalePrice,
                        use: data.use,
                        description: data.description,
                        categoryName: data.categories,
                        condition: data.condition,
                        sellerName: data.sellerName,
                        email: data.email,
                        phone: data.phone,
                        location: data.location,
                        image: imgData.data.url
                    }

                    // save products infomation in the database
                    fetch('https://laptob-zone-server.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('access-token')}`
                        },
                        body: JSON.stringify(products)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.productName} is added successfully`)
                            navigate('/dashboard/myproduct')
                        })
                }
            })
    }

    return (
        <div className='mb-5'>
            <h2 className='text-3xl mb-6 mt-5 text-center'>Add A Products</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text">User Email</span>
                    </label>
                    <input
                        {...register("email", {
                            required: 'Product Name is required'
                        })}
                        type="email"
                        defaultValue={user.email}
                        readOnly
                        placeholder="Your product Name"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input
                        {...register("productName", {
                            required: 'Product Name is required'
                        })}
                        type="productName"
                        placeholder="Your product Name"
                        className="input input-bordered w-full"
                    />
                </div>
                {errors.productName && <p className='text-red-500'>{errors.productName?.message}</p>}
                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text">Origin Price</span>
                    </label>
                    <input
                        {...register("originPrice", {
                            required: 'origin Price is required',

                        })}
                        type="originPrice"
                        placeholder="Your origin Price"
                        className="input input-bordered w-full"
                    />
                </div>
                {errors.originPrice && <p className='text-red-500'>{errors.originPrice?.message}</p>}
                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text">Resale Price</span>
                    </label>
                    <input
                        {...register("resalePrice", {
                            required: 'Resale Price is required',

                        })}
                        type="resalePrice"
                        placeholder="Your Resale Price"
                        className="input input-bordered w-full"
                    />
                </div>
                {errors.resalePrice && <p className='text-red-500'>{errors.resalePrice?.message}</p>}
                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text">Use</span>
                    </label>
                    <input
                        {...register("use", {
                            required: 'use product is required',

                        })}
                        type="use"
                        placeholder="product use duration"
                        className="input input-bordered w-full"
                    />
                </div>
                {errors.use && <p className='text-red-500'>{errors.use?.message}</p>}
                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        {...register("description", {
                            required: 'product description is required',

                        })}
                        type="description"
                        placeholder="product description"
                        className="input input-bordered w-full"
                    />
                </div>
                {errors.description && <p className='text-red-500'>{errors.description?.message}</p>}
                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text">Categories</span>
                    </label>
                    <select
                        {...register("categories", {
                            required: 'specialty is required',

                        })}
                        className="select select-bordered">
                        <option value="Dell">Dell</option>
                        <option value="Asus">Asus</option>
                        <option value="Hp">Hp</option>
                    </select>
                </div>
                {errors.categories && <p className='text-red-500'>{errors.categories?.message}</p>}
                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text">Product Condition</span>
                    </label>
                    <select
                        {...register("condition", {
                            required: 'condition is required',

                        })}
                        className="select select-bordered">

                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>


                    </select>
                </div>
                {errors.condition && <p className='text-red-500'>{errors.condition?.message}</p>}
                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input
                        {...register("sellerName", {
                            required: 'Seller Name is required',

                        })}
                        type="sellerName"
                        placeholder="Seller Name"
                        className="input input-bordered w-full"
                    />
                </div>
                {errors.sellerName && <p className='text-red-500'>{errors.sellerName?.message}</p>}
                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input
                        {...register("phone", {
                            required: 'Seller phone is required',

                        })}
                        type="phone"
                        placeholder="Phone Number"
                        className="input input-bordered w-full"
                    />
                </div>
                {errors.phone && <p className='text-red-500'>{errors.phone?.message}</p>}
                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input
                        {...register("location", {
                            required: 'location is required',

                        })}
                        type="location"
                        placeholder="Enter your location"
                        className="input input-bordered w-full"
                    />
                </div>
                {errors.location && <p className='text-red-500'>{errors.location?.message}</p>}
                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text">Upload Product Photo</span>
                    </label>
                    <input
                        {...register("image", {
                            required: 'img is required'
                        })}
                        type="file"
                        placeholder="Your file"
                        className="input input-bordered"
                    />
                </div>
                {errors.image && <p className='text-red-500'>{errors.image?.message}</p>}
                <div className="form-control w-1/2 mx-auto">
                    <input className='btn btn-accent mt-3' value='Add Product' type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;