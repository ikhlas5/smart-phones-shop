import React from 'react';
import Slider from './Slider/Slider';
import pepoleImg from '../../assets/zana-latif-TYy4lc85xWo-unsplash.jpg'
import { Link, useLoaderData } from 'react-router-dom';
import SingalCategory from './CategoryPhones/SingalCategory/SingalCategory';


const Home = () => {
    const categoriesPhones=useLoaderData();
    console.log(categoriesPhones);
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
                     <Link to='category'>
                        <button className='btn btn-outline btn-warning m-5'>
                            category
                        </button>
                     </Link>
                </div>
                <div>
                    <img className='w-9/12 rounded' src={pepoleImg} alt="" />
                </div>
            </div>
            <div className='grid md:grid-cols-3 gap-4 m-5'>
            {
                categoriesPhones.map(categoriesPhone=><SingalCategory
                key={categoriesPhone._id}
                categoriesPhone={categoriesPhone}
                ></SingalCategory>)
            }
            </div>
        </div>
    );
};

export default Home;

//**
// * import React from 'react';

// const SingalCategory = ({categoriesPhone}) => {
//     const{image,category_name}=categoriesPhone;
//     return (
//         <div className="card w-96 bg-base-100 shadow-xl">
//         <figure><img src={image} alt="Shoes" /></figure>
//         <div className="card-body">
//           <h2 className="card-title">{category_name}</h2>
//           <div className="card-actions justify-end">
//             <button className="btn btn-outline btn-primary">Buy Now</button>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default SingalCategory;