import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey);

    const handleAddService=(event,)=>{
        event.preventDefault()
        const form = event.target;
        const category = form.category.value;
        // const image = form.image.value;
        const  name= form.name.value;
        const  originalPrice = form.originalPrice.value;
        const   resellPrice= form.resellPrice.value;
        const useOfYears = form.useOfYears.value;
        const productQuality= form.productQuality.value;
        const mobileNumber= form.mobileNumber.value;
        const location= form.location.value;
        const condition= form.condition.value;

        const image = form.image;
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
                const serviceInfo = {image:imgData.form.url,
                    name,
                    originalPrice,
                    resellPrice,
                    useOfYears,
                    productQuality,
                    category,
                    condition,
                    mobileNumber,
                    location};
// database include
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
        })
        
    }
    return (

    //     <div className='w-96 p-7'>
    //     <h2 className="text-4xl">Add Product</h2>
    //     <form onSubmit={handleSubmit(handleAddService)}>
    //         <div className="form-control w-full max-w-xs ">
    //             <label className="label"> <span className="label-text">Name</span></label>
    //             <input type="text" {...register("name", {
    //                 required: "Name is Required"
    //             })} className="input input-bordered w-full max-w-xs" />
    //             {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
    //         </div>
    //         <div className="form-control w-full max-w-xs">
    //             <label className="label"> <span className="label-text">Original Price</span></label>
    //             <input type="number" {...register("originalPrice", {
    //                 required: true
    //             })} className="input input-bordered w-full max-w-xs" />
    //             {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
    //         </div>
        
    //         <div className="form-control w-full max-w-xs">
    //             <label className="label"> <span className="label-text">Photo</span></label>
    //             <input type="file" {...register("image", {
    //                 required: "Photo is Required"
    //             })} className="input input-bordered w-full max-w-xs" />
    //             {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
    //         </div>
    //         <div className="form-control w-full max-w-xs">
    //             <label className="label"> <span className="label-text">category</span></label>
    //             <input type="number" {...register("category", {
    //                 required: "category is Required"
    //             })} className="input input-bordered w-full max-w-xs" />
    //             {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
    //         </div>
    //         <div className="form-control w-full max-w-xs">
    //             <label className="label"> <span className="label-text">Resell Price</span></label>
    //             <input type="number" {...register("resellPrice", {
    //                 required: "resell price is Required"
    //             })} className="input input-bordered w-full max-w-xs" />
    //             {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
    //         </div>
    //         <div className="form-control w-full max-w-xs">
    //             <label className="label"> <span className="label-text">useOfYears</span></label>
    //             <input type="number" {...register("useOfYears", {
    //                 required: "use of years is Required"
    //             })} className="input input-bordered w-full max-w-xs" />
    //             {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
    //         </div>
    //         <div className="form-control w-full max-w-xs">
    //             <label className="label"> <span className="label-text">productQuality</span></label>
    //             <input type="text" {...register("productQuality", {
    //                 required: "quality is Required"
    //             })} className="input input-bordered w-full max-w-xs" />
    //             {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
    //         </div>
    //         <div className="form-control w-full max-w-xs">
    //             <label className="label"> <span className="label-text">location</span></label>
    //             <input type="text" {...register("location", {
    //                 required: "location is Required"
    //             })} className="input input-bordered w-full max-w-xs" />
    //             {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
    //         </div>
    //         <div className="form-control w-full max-w-xs">
    //             <label className="label"> <span className="label-text">condition</span></label>
    //             <input type="text" {...register("condition", {
    //                 required: "condition is Required"
    //             })} className="input input-bordered w-full max-w-xs" />
    //             {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
    //         </div>
    //         <input className='btn btn-accent w-full mt-4' value="Add Doctor" type="submit" />
    //     </form>
    // </div>

















        <div>
            <form onSubmit={handleAddService} className='w-8/12 mx-auto'>
                <h2 className="text-4xl">You are about to : </h2>
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="category" type="number" placeholder="category" className="input input-ghost w-full  input-bordered" />
                    <input name="image" type="file" placeholder="image"  className="input input-ghost w-full  input-bordered"  />

                    <input name="productName" type="text" placeholder="product name" className="input input-ghost w-full  input-bordered" required />
                  
                    <input name="originalPrice" type="number" placeholder="original price"   className="input input-ghost w-full  input-bordered"  />

                    <input name="resellPrice" type="text" placeholder="resell Price" className="input input-ghost w-full  input-bordered" required />

                    <input name="useOfYears" type="text" placeholder="useOf Years" className="input input-ghost w-full  input-bordered" required />

                    <input name="productQuality" type="text" placeholder="product Quality" className="input input-ghost w-full  input-bordered" required />

                    <input name="mobileNumber" type="number" placeholder="Mobile Number" className="input input-ghost w-full  input-bordered" required />

                    <input name="location" type="text" placeholder="Location" className="input input-ghost w-full  input-bordered" required />

                    <input name="condition" type="text" placeholder="Product Condition" className="input input-ghost w-full  input-bordered" required />
                </div>

                <input  className='btn flex justify-center m-4' type="submit" value="Add Product" />
            </form>
            
        </div>
    );
};

export default AddProduct;