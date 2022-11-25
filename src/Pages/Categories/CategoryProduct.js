import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductModal from './ProductModal';

const CategoryProduct = () => {
    const categories = useLoaderData()
    // const {productName, img, location, resalePrice, OriginalPrice, use, sellerName} = categories;

    return (
        <div className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {

                categories?.map(category => <div className="card card-compact w-96 bg-base-100 shadow-xl" key={category._id}>
                    <figure><img src={category.img} className='h-48' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{category.productName}</h2>
                        <p className='font-bold'>Original Price: {category.OriginalPrice} Tk</p>
                        <p className='font-bold'>Resale Price: {category.resalePrice} Tk</p>
                        <p className='font-bold'>Use: {category.use}</p>
                        <p className='font-bold'>Location: {category.location}</p>
                        <div className="card-actions justify-around items-center">
                            <div>
                                <p className='font-bold'>Seller: {category.sellerName}</p>
                            </div>
                            <div>
                                <label htmlFor="product-modal" className="btn btn-primary">Book Now</label>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            <ProductModal
                categories={categories}
            ></ProductModal>
        </div>
    );
};

export default CategoryProduct;