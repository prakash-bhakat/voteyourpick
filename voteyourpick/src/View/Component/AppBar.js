import React , {useContext,useEffect, useState} from "react";
import logo from "../../Assets/logo.svg";
import { UserContext } from '../../UserContext';
export default function AppBar() {
  const { loadData } = useContext(UserContext);
  const [ userData, setUserData ] = useState(null);
  useEffect(()=>{
    const user_data = loadData();
    setUserData(user_data)
  },[])
  
  return (
    <header className="flex flex-row justify-between p-4 border-b fixed top-0 w-full bg-gradient-to-b from-white via-white to-transparente backdrop-blur-[4px]">
      <img alt="logo" src={logo} className="w-[80px]" />
      <div>
        <div className="w-[170px] justify-start items-center gap-2 inline-flex">
          <div className="w-12 h-12 bg-zinc-300 rounded-full" />
          <div className="flex-col justify-start items-start inline-flex">
            <div className="text-black text-sm font-bold">
              {userData?.username}
            </div>
            <div className="text-zinc-500 text-xs font-normal">
              {userData?.role}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
