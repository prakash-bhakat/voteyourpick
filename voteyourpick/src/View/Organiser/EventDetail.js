import React from 'react';

function EventDetail() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Friday Feast</h1>
      <h2 className="text-lg font-semibold mb-4">Add Food Menu</h2>
      <form className="space-y-4">
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
            />
          </div>
          <div>
            <label htmlFor="foodDescription" className="block text-sm font-medium text-gray-700">
              Food Description
            </label>
            <input
              type="text"
              id="foodDescription"
              name="foodDescription"
              rows="3"
              className="block w-full mt-5 px-2 py-1 border rounded"
              placeholder="Enter food description"
            />
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
            />
          </div>
          <div className="flex items-center">
            <span className="block text-sm font-medium text-gray-700 mr-2">Non-veg</span>
            <input
              type="checkbox"
              id="nonVeg"
              name="nonVeg"
              className="rounded border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 h-4 w-4 text-indigo-600"
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
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
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
