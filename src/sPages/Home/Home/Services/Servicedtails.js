import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const Servicedtails = () => {

    const { _id, title, img, description } = useLoaderData();
    const { user } = useContext(AuthContext);


    console.log(_id)
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">{description}</p>
                        <div>
                            <button className="btn btn-primary">Back</button>
                            <button className="btn btn-primary">Click</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='p-4'>Review Section</h2>
                <div>
                    <div>

                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{ }</h2>
                                <p>{ }</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{ }</h2>
                            <p>{ }</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Write a Review</button>
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default Servicedtails;