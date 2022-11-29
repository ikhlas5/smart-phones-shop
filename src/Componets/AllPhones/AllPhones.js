import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllPhone from './AllPhone';

const AllPhones = () => {
    const allPhones=useLoaderData()
    return (
        <div className='grid md:grid-cols-3 gap-4 m-4'>
            {
                allPhones.map((allPhone)=><AllPhone
                key={allPhone._id}
                allPhone={allPhone}
                ></AllPhone>
                
                )
            }
        </div>
    );
};

export default AllPhones;