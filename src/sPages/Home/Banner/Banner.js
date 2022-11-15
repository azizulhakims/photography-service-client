import React from 'react';
import img2 from '../../../assets/banner/hero-img-1.png';



const Banner = () => {
    return (
        <div>
            <div className='flex p-5 bg-lime-200'>
                <div className='grid grid-col-6'>
                    <div className='container mx-auto p-6 m-5'>
                        <h1 className='text-3xl'>PROFESSIONAL PHOTOGRAPHY SERVICES</h1>
                        <br />
                        <h1 className='text-5xl'>Capture Love, Joy & Everything With Us</h1>
                        <br />
                        <br />
                        <p>I the best photo clicker in the world so can trust me also invite me all event for photo click..</p>
                        <br />
                        <button className="btn btn-success">Get Start</button>
                    </div>
                </div>
                <div className='hero-img-wrap grid grid-col-6'>
                    <img src={img2} className='p-5 rounded' alt="" />
                </div>
            </div>


        </div>
    );
};
export default Banner;