import React from 'react';
import Slider from './Slider/Slider';
import pepoleImg from '../../assets/zana-latif-TYy4lc85xWo-unsplash.jpg'
import { Link, useLoaderData } from 'react-router-dom';
import SingalCategory from './CategoryPhones/SingalCategory/SingalCategory';


const Home = () => {
    const categoriesPhones=useLoaderData();
    // console.log(categoriesPhones);
    return (
        <div>
            <div className='w-1/3 m-5 mx-auto'>

            <Slider></Slider>
            </div>
            <div className='grid md:grid-cols-2 m-10'>
               <div className='p-5'>
                    <h1 className='text-3xl font-bold text-orange-600'>
                        Popular Business Names and Name Ideas for Mobile Shop
                    </h1>
                    <br/>
                    <p><small>Building an identity is crucial to effective branding. If you are opening a mobile shop, giving it a unique or catchy name is necessary. Your brand's statement or tagline must be unique to attract significant attention. An excellent mobile shop name logo design conveys the company's entire identity. Two of the most effective methods to achieve this are branding and packaging.
                        <br/>
                         After deciding on a brand, the product is sold through several means such as online or offline. However, the foremost aspect of a business is the company's name. Therefore, some of the best names for mobile shop are highlighted in this article...</small></p>
                     <Link to='category'>
                        <button className='btn btn-outline btn-warning m-5'>
                            Shop Now
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