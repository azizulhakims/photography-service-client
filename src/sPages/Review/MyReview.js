import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReview = () => {
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

    const filterData = review.filter(item => item.userEmail === user?.email)

    return (
        <div className='card w-96 bg-primary text-primary-content'>
            <div className="card-body">
                {
                    filterData.length ? filterData.map(item => <div key={item._id}><h1>My Email: {user?.email}</h1>
                        <h2>My Comment- {item.comment}</h2></div>) : <div>No reviews Foubd</div>
                }
            </div>
        </div>
    );
};

export default MyReview;