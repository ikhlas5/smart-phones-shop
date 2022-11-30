import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const CategoryPhone = () => {
    const datas=useLoaderData();
    console.log(datas)
    return (
        <div className='grid md:grid-cols-3 gap-4 m-4'>
            {
                datas.map(data=><CategoryDetails
                    key={data._id}
                    data={data}
                ></CategoryDetails>)
            }
        </div>
    );
};

export default CategoryPhone;