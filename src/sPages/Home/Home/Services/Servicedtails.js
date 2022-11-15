import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import ServiceReview from '../../../Review/ServiceReview';

const Servicedtails = () => {
    const { user, setLoading } = useContext(AuthContext)
    const { _id, name, image, descriptions } = useLoaderData();
    const [open, setOpen] = useState(false);
    const handleReviewSubmit = (e) => {
        e.preventDefault();
        const reviewsubmit = {
            userEmail: user.email,
            services: name,
            serviceId: _id,
            comment: e.target.comment.value,
        };
        console.log(reviewsubmit);

        fetch("https://photography-service-server-seven.vercel.app/reviewsubmit", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviewsubmit)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message);
                    setOpen(false);
                    setLoading(prev => !prev)
                } else {
                    toast.error(data.error);
                }
            })
            .catch(err => {
                toast.error(err.message);
            })
    }
    console.log(_id)
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-70 h-70'>
                        <img src={image} />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{descriptions}</p>
                        <div>
                            <Link to={'/services'}><button className="btn btn-primary">Back</button></Link>
                            {/* The button to open modal */}
                            <a href="#my-modal-2" className="btn" onClick={() => setOpen(true)}>Review</a>

                        </div>
                    </div>
                </div>
            </div>
            {
                open && user?.email ? <div className="modal" id="my-modal-2" style={{ zIndex: 9999 }}>
                    <form onSubmit={handleReviewSubmit} >
                        <div className="modal-box">
                            <p className="py-4">{name}</p>
                            <label className="inline-block w-40 mr-6 text-left mb-4 font-bold text-gray-600">
                                Comment
                            </label>
                            <input type="text" name='comment' placeholder="Type here" className="input w-full" />
                            <div className="modal-action">
                                <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setOpen(false)}>X</label>
                                <div className="text-right">
                                    <button className="py-3 px-8 bg-green-400 text-white font-bold">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div> : open ? <div className="modal" id="my-modal-2" style={{ zIndex: 9999 }}>
                    <div className="modal-box">
                        <p>Please Login</p>
                        <div className="modal-action">
                            <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setOpen(false)}>X</label>
                            <Link to='/login'><button>Login</button></Link>
                        </div>

                    </div>
                </div> : null
            }
            <ServiceReview id={_id}></ServiceReview>

        </div>
    );
};

export default Servicedtails;