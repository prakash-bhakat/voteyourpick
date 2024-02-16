import React from "react";
import logo from "../../Assets/logo.svg";

export default function AppBar() {
  return (
    <header className="flex flex-row justify-between p-4 border-b fixed top-0 w-full bg-gradient-to-b from-white via-white to-transparente backdrop-blur-[4px]">
      <img alt="logo" src={logo} className="w-[80px]" />
      <div>
        <div className="w-[170px] justify-start items-center gap-2 inline-flex">
          <div className="w-12 h-12 bg-zinc-300 rounded-full" />
          <div className="flex-col justify-start items-start inline-flex">
            <div className="text-black text-sm font-bold">
              Anurag
            </div>
            <div className="text-zinc-500 text-xs font-normal">
              Organiser
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
