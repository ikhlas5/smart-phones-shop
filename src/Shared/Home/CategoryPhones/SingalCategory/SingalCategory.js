import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../../Componets/PrimaryButton/PrimaryButton';

const SingalCategory = ({categoriesPhone}) => {
    const{category,image,category_name}=categoriesPhone;
        return (
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">{category_name}</h2>
              <div className="card-actions justify-end">
                <Link to={`categories/${category}`}>
                 <PrimaryButton>Show Details</PrimaryButton>
                </Link>
                {/* <button className="btn btn-outline btn-primary">Buy Now</button> */}
              </div>
            </div>
          </div>
        );
};

export default SingalCategory;