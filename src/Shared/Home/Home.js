import React from 'react';
import Slider from './Slider/Slider';
import pepoleImg from '../../assets/zana-latif-TYy4lc85xWo-unsplash.jpg'

const Home = () => {
    return (
        <div>
            <div className='w-1/3 m-5 mx-auto'>

            <Slider></Slider>
            </div>
            <div className='grid md:grid-cols-2 m-10'>
               <div className='p-5'>
                    <h1 className='text-3xl font-bold text-orange-600'>Wedding Photography Jargon,
                        <br />
                        When Dreams Come True!
                    </h1>
                    <br/>
                    <p><small>All good wedding studios & wedding photographers worth their salt have a good steady workload from their wedding season which they plan & manage.<br/>
                     Their back-end work-flow is like the iceberg under the sea,
                     you just see the tip floating above the ocean.
                     <br/> But behind the scenes there is a lot of work that needs to be executed and for multiple clients.</small></p>
                </div>
                <div>
                    <img className='w-9/12 rounded' src={pepoleImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;