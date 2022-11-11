import React from 'react';

const Wht = () => {
    return (
        <div className="bg-base-200 p-10 text-center">
            <h1 className='text-3xl'>WHY CHOOSE US</h1>
            <p className='text-5xl'>I am Different & Professional</p>
            <div className='grid grid-cols-3 gap-5 p-4'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Professional Photos  !</h2>
                        <p>I am doing best professional photo click</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Portfolio!</h2>
                        <p>You can create your vedio Portfolio by me</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Multiple Shots</h2>
                        <p>Multiple shots in best services</p>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Wht;