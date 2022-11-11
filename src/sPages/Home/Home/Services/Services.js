import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ServicesItems from './ServicesItems';

const Services = () => {
    const [service, setServices] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setServices(data.data);
                } else {
                    toString.error(data.error);
                }
            })
            .catch(err => toast.error(err.message))
    }, [])

    console.log(service)
    return (
        <div>
            <div className='text-center p-4'>
                <p className="text-2xl">My service</p>
                <h2>I Am provided best photography service </h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>


                {
                    service.map(perservice => <ServicesItems
                        key={perservice._id}
                        service={perservice}
                    ></ServicesItems>)
                }

            </div>
            <div className='container py-10 px-10 mx-0 min-w-full flex flex-col items-center'><button className="btn btn-success items-center"><Link to={'/services'}>See all</Link></button></div>
        </div>
    );
};

export default Services;