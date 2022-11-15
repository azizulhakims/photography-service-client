import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const MyReview = () => {
    const { user, loading, setLoading } = useContext(AuthContext)
    useTitle('My Review')


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

    const filterData = review.filter(item => item.userEmail === user?.email);
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/reviewsubmit/${id}`, {
            method: "DELETE",
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    setLoading()
                    toast.success(data.message);
                } else {
                    toast.error(data.error);
                }
            }).catch(err => toast.error(err.message))
    };
    const navigate = useNavigate();
    const handleEdit = (id) => {
        navigate(`/myReview/edit/${id}`)
    }
    return (
        <div className='card w-96 bg-primary text-primary-content pl-5'>
            <div className="card-body">
                {
                    filterData.length ? filterData.map(item => <div key={item._id}>
                        <h2>Service Name- {item.services}</h2>
                        <h2>My Comment- {item.comment}</h2>
                        <button onClick={() => handleEdit(item._id)} className='btn'>Edit Review</button>
                        <button onClick={() => handleDelete(item._id)} className='btn'>Delete Review</button></div>) : <div>No reviews Foubd</div>
                }
            </div>
        </div>
    );
};

export default MyReview;