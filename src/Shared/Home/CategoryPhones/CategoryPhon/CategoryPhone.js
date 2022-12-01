import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../../../Componets/BookingModal/BookingModal';
import CategoryDetails from '../CategoryDetails/CategoryDetails';

const CategoryPhone = () => {
    const [userBuy, setUserBuy] = useState(null);
    const datas=useLoaderData();
    console.log(datas)
    return (
        <section>
        <div className='grid md:grid-cols-3 gap-4 m-4'>
            {
                datas.map(data=><CategoryDetails
                    key={data._id}
                    data={data}
                    setUserBuy={setUserBuy}
                ></CategoryDetails>)
            }
        </div>
        {
            userBuy&&

            <BookingModal
            userBuy={userBuy}
            setUserBuy={setUserBuy}
            ></BookingModal>
        }
        </section>
    );
};

export default CategoryPhone;