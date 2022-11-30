import React from 'react';

const ContactUs = () => {
    return (
        <div className='my-20'>
            <div className='w-1/2 mx-auto justify-center items-center'>
                <h3 className='text-2xl text-orange-500'>CONTACT</h3>
                <h1 className='text-4xl font-semibold mt-3'>Have a Questions? Let's <br></br> Connect With Us!</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Your Name Here"
                        className="input input-bordered w-full mt-3"
                    />
                    <br></br>
                    <input
                        type="text"
                        placeholder="Your Email Address"
                        className="input input-bordered w-full mt-3"
                    />
                    <br></br>
                    <input
                        type="text"
                        placeholder="Your Phone Number"
                        className="input input-bordered w-full mt-3"
                    />
                    <br></br>
                    <textarea
                        className="textarea textarea-bordered w-full mt-3"
                        placeholder="Write Your Message"
                    ></textarea>
                </div>
                <button className="btn btn-active mt-5">Contact Us</button>
            </div>
        </div>
    );
};

export default ContactUs;