import React from 'react';

const Gallery = () => {


    return (
        <div>
            <div className='text-center w-3/4 mx-auto'>
                <h2 className='text-3xl font-bold'>
                    Sell Old Laptop for Instant Cash
                </h2>
                <p className='text-xl'>
                    Sell Old Laptop online for best price. Quick and Simple Process - Search Device, Get Instant Quote, Choose Pickup Slot, Get Free Same Day Doorstep Pickup, Onspot Payment. Buyer buy old used new second hand Laptops in just 3 easy steps.
                </p>
            </div>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/WfVwwQ4/Screenshot-36.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Check Price</h2>
                        <p>
                            Provide device details and get the best price through our advanced pricing engine.
                        </p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/25p8k5p/Screenshot-34.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Schedule Loacation and Pickup</h2>
                        <p>
                            Free pickup from your home or office address as per your chosen date and time slot.
                        </p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/2682SKD/Screenshot-35.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Get Paid</h2>
                        <p>
                            Instant and 100% onspot secure payment at the time of device pickup.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Gallery;