import React from "react";
import nonveg from "../../Assets/nonveg.svg"
import veg from "../../Assets/veg.svg"
import thumbs from "../../Assets/thumbs.svg"

function FoodList() {
  return (
    <div className="w-full md:w-4/5">
      <div className=" p-5 rounded-[10px] justify-start items-start gap-4 inline-flex">
        <img
          className="w-16 h-16 rounded-[5px]"
          src="https://via.placeholder.com/128x128"
        />
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
          <div className="self-stretch text-black text-base font-bold  leading-tight">
            Margherita pizza
          </div>
          <div className="self-stretch flex-col justify-start items-start flex">
            <div className="self-stretch text-zinc-800 text-sm font-normal  leading-tight">
              A classic favorite, with a crispy thin crust topped with aromatic
              basil, juicy tomatoes, and creamy mozzarella
            </div>
            <div className="justify-start items-start gap-[5px] inline-flex">
              <div className="text-sky-600 text-sm font-normal  leading-[28px]">
                250 calories per serving
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-center gap-9 inline-flex">
        <button><img src={thumbs} /></button>
        <img className="w-10" src={nonveg} />
        </div>

      </div>
     
    </div>
  );
}

export default FoodList;
