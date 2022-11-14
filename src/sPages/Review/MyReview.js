import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h1>{user?.email}</h1>
        </div>
    );
};

export default MyReview;