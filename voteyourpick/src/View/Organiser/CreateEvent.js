import React, { useState, useEffect } from 'react';
import AppBar from '../Component/AppBar'
import EventDetail from './EventDetail'
import FoodList from '../Component/FoodList'
import { useForm } from 'react-hook-form';


function CreateEvent() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [menuData, setMenuData] = useState([]);
  //var menuDataToPass = []
  const handleChildData = (data) => {
    // Handle data received from child component
    var menu_data = menuData;
    menu_data.push(data)
    setMenuData([...menu_data]);
    console.log(menuData)
  };

  const [hideDiv, setHideDiv] = useState(false);

  const onSubmit = (data) => {
    console.log(data); // Handle form submission here
    setHideDiv(!hideDiv);
  };

  return (
   <>
    <AppBar />
    <div className={hideDiv ? 'hidden max-w-md mx-auto mt-10' : 'max-w-md mx-auto mt-10'} >
      <h2 className="text-2xl font-bold mb-4">Create Event</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">
            Event Name
          </label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            className="block w-full mt-5 px-2 py-1 border rounded"
            placeholder="Enter event name"
            {...register("eventName", { required: "Event Name is required" })}
          />
          {errors.eventName && <p className="text-red-600">{errors.eventName.message}</p>}
        </div>
        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">
            Event Date
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            className="block w-full mt-5 px-2 py-1 border rounded"
            {...register("eventDate", { required: "Event Date is required" })}
          />
          {errors.eventDate && <p className="text-red-600">{errors.eventDate.message}</p>}
        </div>
        <div>
          <label htmlFor="eventDescription" className="block text-sm font-medium text-gray-700">
            Event Description
          </label>
          <textarea
            id="eventDescription"
            name="eventDescription"
            rows="3"
            className="block w-full mt-5 px-2 py-1 border rounded"
            placeholder="Enter event description"
            {...register("eventDescription", { required: "Event Description is required" })}
          ></textarea>
          {errors.eventDescription && <p className="text-red-600">{errors.eventDescription.message}</p>}
        </div>
        <button
          type="submit"
          className="mt-5 w-full md:w-auto px-4 py-2 bg-blue-950 text-white rounded"
        >
          Submit
        </button>
      </form>
    </div>
    <div >
      <div className="grid md:grid-cols-2 gap-4 md:h-full md:content-center px-4 mt-[100px]">
      <div className={hideDiv ? '':'hidden'}>
      <EventDetail onData={handleChildData}/>
      </div>
      <FoodList foodlist={menuData} /> 
      
      <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            >
              Preview
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Publish
            </button>
      </div>
      
      </div>
    </div>
   </>
  )
}

export default CreateEvent