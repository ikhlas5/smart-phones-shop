import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);

    const handleAddService=(data)=>{

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url=`https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData=>{
            if(imgData.success){
                console.log(imgData.data.url);
                const serviceInfo = {image:imgData.data.url,
                    name:data.name,
                    originalPrice:data.originalPrice,
                    resellPrice:data.resellPrice,
                    useOfYears:data.useOfYears,
                    productQuality:data.productQuality,
                    category:data.category,
                    condition:data.condition,
                    mobileNumber:data.mobileNumber,
                    location:data.location};
// database include
        fetch('https://smart-phones-shop-server.vercel.app/AddProducts', {
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
                    // form.reset();
                     //added toast
    
 
   
                }
            })
            .catch(er => console.error(er));
            }
        })
        
    }
    return (

        <div className='w-96 p-7'>
        <h2 className="text-4xl">Add Product</h2>
        <form onSubmit={handleSubmit(handleAddService)}>
            <div className="form-control w-full max-w-xs ">
                <label className="label"> <span className="label-text">Name</span></label>
                <input type="text" {...register("name", {
                    required: "Name is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Original Price</span></label>
                <input type="number" {...register("originalPrice", {
                    required: true
                })} className="input input-bordered w-full max-w-xs" />
                {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
            </div>
        
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Photo</span></label>
                <input type="file" {...register("image", {
                    required: "Photo is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">category</span></label>
                <input type="number" {...register("category", {
                    required: "category is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.category && <p className='text-red-500'>{errors.category.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">Resell Price</span></label>
                <input type="number" {...register("resellPrice", {
                    required: "resell price is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.resellPrice && <p className='text-red-500'>{errors.resellPrice.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">useOfYears</span></label>
                <input type="number" {...register("useOfYears", {
                    required: "use of years is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.useOfYears && <p className='text-red-500'>{errors.useOfYears.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">productQuality</span></label>
                <input type="text" {...register("productQuality", {
                    required: "quality is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.productQuality && <p className='text-red-500'>{errors.productQuality.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">location</span></label>
                <input type="text" {...register("location", {
                    required: "location is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label"> <span className="label-text">condition</span></label>
                <input type="text" {...register("condition", {
                    required: "condition is Required"
                })} className="input input-bordered w-full max-w-xs" />
                {errors.condition && <p className='text-red-500'>{errors.condition.message}</p>}
            </div>
            <input className='btn btn-accent w-full mt-4' value="Add Doctor" type="submit" />
        </form>
    </div>
    );
};

export default AddProduct;