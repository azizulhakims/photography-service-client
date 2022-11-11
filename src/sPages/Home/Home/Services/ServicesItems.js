import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const ServicesItems = ({ service }) => {
    const { _id, img, title, price, descriptions } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img className='h-40 w-30' src={img} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    {/* <div className="badge badge-secondary">$ {price}</div> */}
                </h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                <div className="card-actions">
                    <div className="badge badge-outline">Price: ${price}</div>
                    {/* <div className="badge badge-outline">Products</div> */}
                </div>
                <div className="card-actions">
                    <div className=" badge-outline"> {descriptions}</div>

                </div>
                <Link to={`/servicerdetails/${_id}`}> <div className=' card-actions justify-end'>
                    <button className="btn btn-warning ">Details</button>
                </div></Link>
            </div>
        </div>
    );
};

export default ServicesItems;