import React, { useContext, useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ReviewData from './ReviewData';

const ServiceReview = ({ id }) => {
    const { user, loading } = useContext(AuthContext)
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviewsubmit")
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setReview(data.data);
                } else {
                    toString.error(data.error);
                }
            })
            .catch(err => toast.error(err.message))
    }, [loading])

    const filterData = review.filter(item => item.serviceId === id)
    // console.log(reviewdata)
    return (
        <div>
            <div className='text-center p-4'>
                <p className="text-2xl">My Review</p>
                <h2>I Am provided best photography service </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                {
                    filterData.map(reviewdata => <ReviewData
                        key={reviewdata?._id}
                        reviewdata={reviewdata}
                    ></ReviewData>)
                }

            </div>
        </div>
    );
};

export default ServiceReview;