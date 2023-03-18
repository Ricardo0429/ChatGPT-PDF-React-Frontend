import { NavLink } from "react-router-dom";

export default function Signin() {
  return (
    <div className="w-full h-full flex justify-between items-center py-4 relative" style={{minHeight: "100vh"}}>
      <div className="w-[560px] h-full mx-auto grid justify-items-center">

        <div className='text-center'>
          <h1 className="signup-header">Log in</h1>
          <p className="pt-5 signup-content">
            Enter your credwntials to access your account
          </p>
        </div>

        <div className="grid gap-y-3">
          
          <div className="pt-[66px]">
            <form className="grid gap-y-4">
              <input className="signup-mail" type="email" name="email" placeholder="johndoe@gmail.com" />
              <input className="signup-mail" type="password" name="password" placeholder="password" />
              <button className="w-full btn-signup mt-2">Sign in</button>
            </form>
          </div>

          <a href='/forgot' target='blank' className="text-center w-full btn-cancel">I forgot my password</a>
          <div className="text-center w-full btn-cancel"><NavLink to="/">Back</NavLink></div>

        </div>

      </div>
      
      <div className="bottom-radial-gradient-bg w-screen h-[1080px] absolute bottom-0" style={{zIndex: "-1"}} />
    </div>
  );
}