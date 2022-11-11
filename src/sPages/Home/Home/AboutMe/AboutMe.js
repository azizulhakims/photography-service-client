import React from 'react';
import img3 from '../../../../assets/banner/about.png';

const AboutMe = () => {
    return (
        <div>
            <div className="hero bg-zinc-300">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img3} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">I have The Leading Photo Studio In The Country</h1>
                        <p className="py-6">I the best photography service provided you can hire me for you memory more beautifully more memorable  </p>
                        <button className="btn btn-primary"> Click for Book</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;