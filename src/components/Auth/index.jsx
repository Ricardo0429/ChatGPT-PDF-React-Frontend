import { NavLink } from 'react-router-dom';

export default function StartPage() {
  return (
    <div className="w-full h-full flex justify-between items-center py-4 relative" style={{minHeight: "100vh"}}>
      <div className="w-[560px] h-full mx-auto grid justify-items-center">

        {/* <div className='flex justify-center'>
          <img className='w-[48px] h-[48px]' src={vector} alt="Vector" />
        </div> */}

        <div className='grid gap-y-4 text-center'>
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