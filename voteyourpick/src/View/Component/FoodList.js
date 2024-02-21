import React from "react";
import nonveg from "../../Assets/nonveg.svg"
import veg from "../../Assets/veg.svg"
import thumbs from "../../Assets/thumbs.svg"

function FoodList({item}) {
  return (
    <div>    
      <div className="w-full md:w-4/5">
      <div className="p-5 rounded-[10px] justify-start items-start gap-4 inline-flex">
        <img
          className="w-16 h-16 rounded-[5px]"
          src={item.foodImage} // Placeholder image URL, you can replace it with item-specific images if available
          alt="Food"
        />
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
          <div className="self-stretch text-black text-base font-bold leading-tight">
            {item.foodName}
          </div>
          <div className="self-stretch flex-col justify-start items-start flex">
            <div className="self-stretch text-zinc-800 text-sm font-normal leading-tight">
              {item.foodDescription}
            </div>
            <div className="justify-start items-start gap-[5px] inline-flex">
              <div className="text-sky-600 text-sm font-normal leading-[28px]">
                {item.calories} calories per serving
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-center gap-9 inline-flex">
          <button><img src={thumbs} alt="Thumbs up" /></button>
          {item.nonVeg ? <img className="w-10" src={nonveg} alt="Non-veg" /> : <img className="w-10" src={veg} alt="veg" />}
        </div>
      </div>
      </div>
    </div>

  );
}

export default FoodList;
