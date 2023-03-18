import { NavLink } from 'react-router-dom';
import vector from '../../assets/vector.png'

export default function StartPage() {
  return (
    <div className="w-full h-full flex justify-between py-4 relative" style={{minHeight: "100vh"}}>
      <div className="w-[816px] px-[815px] py-[160px] w-full h-full mx-auto relative">

        <div className='flex justify-center'>
          <img className='w-[48px] h-[48px]' src={vector} alt="Vector" />
        </div>

        <div className='pt-[196px] grid gap-y-4 text-center'>
          <button className='btn-login'>Continue with Google</button>
          <button className='btn-login'>Continue with GitHub</button>
          <NavLink to="/signup" className='btn-login'>Sign Up</NavLink>
          <NavLink to="/signin" className='btn-signin text-gray-100'>Sign in</NavLink>
        </div>

      </div>
      
      <div className="bottom-radial-gradient-bg w-screen h-[1080px] absolute bottom-0" style={{zIndex: "-1"}} />
    </div>
  );
}