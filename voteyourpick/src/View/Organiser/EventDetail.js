import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function EventDetail(props) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const {onData} = props;
  const [base64String, setBase64String] = useState('');

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setBase64String(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  const onSubmit = (data) => {
    delete data.foodImage
    data["foodImage"] = base64String;
    onData(data);
    reset()
  };
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Friday Feast</h1>
      <h2 className="text-lg font-semibold mb-4">Add Food Menu</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="foodName" className="block text-sm font-medium text-gray-700">
              Food Name
            </label>
            <input
              type="text"
              id="foodName"
              name="foodName"
              className="block w-full mt-5 px-2 py-1 border rounded"
              placeholder="Enter food name"
              {...register("foodName", { required: "Food Name is required" })}
            />
            {errors.foodName && <p className="text-red-600">{errors.foodName.message}</p>}
          </div>
          <div>
            <label htmlFor="foodDescription" className="block text-sm font-medium text-gray-700">
              Food Description
            </label>
            <input
              type="text"
              id="foodDescription"
              name="foodDescription"
              className="block w-full mt-5 px-2 py-1 border rounded"
              placeholder="Enter food description"
              {...register("foodDescription", { required: "Food Description is required" })}
            />
            {errors.foodDescription && <p className="text-red-600">{errors.foodDescription.message}</p>}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="calories" className="block text-sm font-medium text-gray-700">
              Calories
            </label>
            <input
              type="text"
              id="calories"
              name="calories"
              className="block w-full mt-5 px-2 py-1 border rounded"
              placeholder="Enter calories"
              {...register("calories", { required: "Calories are required" })}
            />
            {errors.calories && <p className="text-red-600">{errors.calories.message}</p>}
          </div>
          <div className="flex items-center">
            <span className="block text-sm font-medium text-gray-700 mr-2">Non-veg</span>
            <input
              type="checkbox"
              id="nonVeg"
              name="nonVeg"
              className="rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 h-4 w-4 text-indigo-600"
              {...register("nonVeg")}
            />
          </div>
        </div>
        <div>
          <label htmlFor="foodImage" className="block text-sm font-medium text-gray-700">
            Upload Food Image
          </label>
          <input
            type="file"
            id="foodImage"
            name="foodImage"
            accept="image/*"
            className="block w-full mt-5 px-2 py-1 border rounded"
            {...register("foodImage", 
              { 
                onChange:(e)=>{handleFileInputChange(e)},
                required: "Food Image is required" ,
                validate: {
                  maxSize: (file) => file[0].size <= 1048576 || "File size should be less than 1MB"
                }
              }
            )}
          />
          {errors.foodImage && <p className="text-red-600">{errors.foodImage.message}</p>}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="reset"
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default EventDetail;
