import React from 'react';

const Wht = () => {
    return (
        <div className="bg-base-200 p-10 text-center ">
            <h1 className='text-3xl'>WHY CHOOSE US</h1>
            <p className='text-5xl'>I am Different & Professional</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/gdHyz94/NIL06619-min.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Wedding Photography</h2>
                        <p>I am doing best Wedding photo click</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/9wj6Z1m/photo-retouching-b2i.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Retouch Photo</h2>
                        <p>You can create your photo Retouch by me!</p>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/CzdBYp1/couple-poses-man-holding-girlfriends-cheek.webp" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Couple Moment</h2>
                        <p>Multiple shots in best services</p>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Wht;