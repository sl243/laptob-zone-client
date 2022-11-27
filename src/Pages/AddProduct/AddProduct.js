import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddProduct = data => {
        console.log(data)
        // const image = (data.image[0]);
        // const formData = new FormData();
        // formData.append('image', image);
        // const url = `https://api.imgbb.com/1/upload?key=${''}`
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(imgData => {
        //         if (imgData.success) {
        //             console.log(imgData.data.url)
        //             const doctor = {
        //                 name: data.name,
        //                 email: data.email,
        //                 specialty: data.specialty,
        //                 image: imgData.data.url
        //             }

        //             // save doctors infomation in the database
        //             fetch('https://webcode-doctors-server.vercel.app/doctors', {
        //                 method: 'POST',
        //                 headers: {
        //                     'content-type': 'application/json',
        //                     authorization: `bearer ${localStorage.getItem('access-token')}`
        //                 },
        //                 body: JSON.stringify(doctor)
        //             })
        //                 .then(res => res.json())
        //                 .then(result => {
        //                     console.log(result)
        //                     toast.success(`${data.name} is added successfully`)
        //                     // navigate('/dashboard/managedoctors')
        //                 })
        //         }
        //     })
    }

    return (
        <div className='mb-5'>
            <h2 className='text-3xl mb-6 mt-5 text-center'>Add A Products</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-1/2 mx-auto mx-auto">
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
                {/* {errors.name && <p className='text-red-500'>{errors.name?.message}</p>} */}
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
                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        {...register("description", {
                            required: 'product description is required',

                        })}
                        type="description"
                        placeholder="product description"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        {...register("description", {
                            required: 'product description is required',

                        })}
                        type="description"
                        placeholder="product description"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-1/2 mx-auto">
                    <label className="label">
                        <span className="label-text">Categories</span>
                    </label>
                    <select
                        {...register("categories", {
                            required: 'specialty is required',

                        })}
                        className="select select-bordered">
                        <option value="dell">Dell</option>
                        <option value="asus">Asus</option>
                        <option value="hp">Hp</option>
                    </select>
                </div>
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

                {/* {errors.email && <p className='text-red-500'>{errors.email?.message}</p>} */}


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
                {/* {errors.img && <p className='text-red-500'>{errors.img?.message}</p>} */}
                <div className="form-control w-1/2 mx-auto">
                    <input className='btn btn-accent mt-3' value='Add Product' type="submit" />
                </div>


                {/* {
                        signupError && <p className='text-red-800'>{signupError}</p>
                    } */}
            </form>
        </div>
    );
};

export default AddProduct;