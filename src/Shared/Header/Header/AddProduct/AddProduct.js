import React from 'react';
import toast from 'react-hot-toast';

const AddProduct = () => {

    const handleAddService=(event)=>{
        event.preventDefault()
        const form = event.target;
        const category = form.category.value;
        const img = form.imageUrl.value;
        const  productName= form.productName.value;
        const  originalPrice = form.originalPrice.value;
        const   resellPrice= form.resellPrice.value;
        const useOfYears = form.useOfYears.value;
        const productQuality= form.productQuality.value;

        const serviceInfo = {img,productName,originalPrice,resellPrice,useOfYears,productQuality,category};

        fetch('http://localhost:5000/AddProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if(data.acknowledged){
                    toast.success('Add Successfully',{
                        position:'top-center',
                        theme:'dark'
                    })
                    form.reset();
                     //added toast
    
 
   
                }
            })
            .catch(er => console.error(er));
    }
    return (
        <div>
            <form onSubmit={handleAddService} className='w-8/12 mx-auto'>
                <h2 className="text-4xl">You are about to : </h2>
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="category" type="number" placeholder="category" className="input input-ghost w-full  input-bordered" />
                    <input name="imageUrl" type="text" placeholder="photoUrl"  className="input input-ghost w-full  input-bordered"  />

                    <input name="productName" type="text" placeholder="product name" className="input input-ghost w-full  input-bordered" required />
                  
                    <input name="originalPrice" type="number" placeholder="original price"   className="input input-ghost w-full  input-bordered"  />

                    <input name="resellPrice" type="text" placeholder="resell Price" className="input input-ghost w-full  input-bordered" required />

                    <input name="useOfYears" type="text" placeholder="useOf Years" className="input input-ghost w-full  input-bordered" required />

                    <input name="productQuality" type="text" placeholder="product Quality" className="input input-ghost w-full  input-bordered" required />
                </div>

                <input  className='btn flex justify-center m-4' type="submit" value="Add Product" />
            </form>
            
        </div>
    );
};

export default AddProduct;