import { NavLink } from "react-router-dom";
import CommandInput from "../Layout/CommandInput";
import Dashboard from "./Dashboard/Dashboard";

export default function Welcome() {
  return (
    <div className="w-full h-full flex justify-between py-4 relative">
      <div className="w-[816px] h-full mx-auto relative">
        <div className="w-full grid">
          <CommandInput />
        </div>
        <Dashboard />
        
          <NavLink to='/demo'>
            <div className="btn-collapse text-3xl text-center text-gray-100">
              To Demo
            </div>
          </NavLink>
      </div>
      <div className="bottom-radial-gradient-bg w-screen h-[1080px] absolute bottom-0" style={{zIndex: "-1"}} />
    </div>
  );
}