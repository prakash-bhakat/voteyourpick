import React from "react";
import AppBar from "../Component/AppBar";
import FoodList from "../Component/FoodList";

function Event() {
  return (
    <div>
      <AppBar />
      <div className=" mx-auto w-4/5">
        <h1 className="text-2xl font-bold mb-4">Friday Feast</h1>
        <h2 className="text-lg font-semibold mb-4">Add Food Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 grid-flow-row">
          <FoodList />
          <FoodList />
          <FoodList />
          <FoodList />
          <FoodList />
          <FoodList />
          <FoodList />
          <FoodList />
          <FoodList />
          <FoodList />
          <FoodList />
          <FoodList />
          <FoodList />
        </div>
        <div className="p-10 fixed bottom-0 w-full flex justify-end bg-gradient-to-b from-transparent via-white to-white backdrop-blur-[4px]">
          <div className="grid grid-cols-2 gap-4 w-full md:w-2/4 ">
            
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Submit
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Event;
