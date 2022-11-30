import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    // const [categories, setCategories] = useState([])

    const {data: categories = []} = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/categories')
        .then(res => res.json())
    })


    // useEffect(() => {
    //     fetch('http://localhost:5000/categories')
    //         .then(res => res.json())
    //         .then(data => {
    //             setCategories(data)
    //         })
    // }, [])

    return (
        <section className='my-10'>
            <h1 className='text-xl font-semibold'>All Categories</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {/* {
                    categories.map(category => <div className="card w-96 bg-base-100 shadow-xl" key={category._id}>
                        <div className="card-body items-center text-center">
                            <Link to={`/categoryProduct/${category.category_id}`}>
                                <h2 className="card-title">{category.categoryName}</h2>
                            </Link>
                        </div>
                    </div>)
                } */}
                {
                    categories?.map(category => <div className="card w-96 bg-base-100 shadow-xl" key={category._id}>
                        <div className="card-body items-center text-center">
                            <Link to={`/categoryProduct/${category.categoryName}`}>
                                <h2 className="card-title">{category.categoryName}</h2>
                            </Link>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Categories;