import React from 'react';

const AllPhone = ({allPhone}) => {
    const {image,location,name,original_price,resale_price,ratting,years_of_use,view}=allPhone;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Original Price: {original_price}</p>
          <p>Resale Price: {resale_price}</p>
          <p>Location: {location}</p>
          <p>Years of use: {years_of_use}</p>
          <p>Ratting: {ratting}</p>
          <p>View: {view}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default AllPhone;