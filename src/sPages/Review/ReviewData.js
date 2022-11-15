import React from 'react';

const ReviewData = ({ reviewdata }) => {

    const { comment, _id, email, userEmail } = reviewdata;

    return (
        <div>
            <div>
                <h2 className='p-4'></h2>
                <div>
                    <div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{comment}</h2>
                                <h2 className=""><small>user email : {userEmail}</small></h2>

                                <div className="card-actions justify-end">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReviewData;