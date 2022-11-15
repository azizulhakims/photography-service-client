import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const EditReview = () => {
    const router = useParams();

    const { user, loading, setLoading } = useContext(AuthContext)
    const { id } = router;
    const navigate = useNavigate();
    // useTitle('My Review')
    const [reviews, setReviews] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/reviewsubmit/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setReviews(data.data);
                } else {
                    toString.error(data.error);
                }
            })
            .catch(err => toast.error(err.message))
    }, [loading, id]);
    // console.log(router);


    // console.log(reviews);
    const handleSubmit = (e) => {
        e.preventDefault()
        const updateComment = {
            comment: e.target.comment.value
        }

        fetch(`http://localhost:5000/reviewsubmit/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateComment)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message)
                    navigate('/myReview')
                } else {
                    toast.err(data.error)
                }
            })
            .catch(err => toast.error(err.message))

        console.log(updateComment);
    }
    return (
        <div className='card w-96 bg-primary text-primary-content pl-5'>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <label >Edit your Review :</label>
                    <input type="text" name='comment' defaultValue={reviews?.comment} />
                    <br />
                    <button className='btn' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default EditReview;