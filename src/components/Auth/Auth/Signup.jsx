import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Signup() {
  const [ step, setStep ] = useState(0);

  const options = ['One', 'Two', 'Three'];
  const onOptionChangeHandler = (event) => {
      console.log("User Selected Value - ", event.target.value)
  }

  // function isValidEmail(email) {
  //   return /\S+@\S+\.\S+/.test(email);
  // }

  return (
    <div className="w-full h-full flex justify-between items-center py-4 relative" style={{minHeight: "100vh"}}>
      <div className="w-[560px] h-full mx-auto grid justify-items-center">
        { step === 0 ?
          <Fragment>
            <div className='text-center'>
              <h1 className="signup-header">Create your account</h1>
              <p className="pt-5 signup-content">
                Adapa's secure vault lets you store and organize files, while enabling it to analyze their content and provide context based on the.
              </p>
            </div>

            <div className="pt-[66px]">
              <form className="grid gap-y-6">
                <input className="signup-mail" type="email" name="email" placeholder="johndoe@gmail.com" />
                <button className="w-full btn-signup" onClick={() => setStep(1)}>Sign up</button>
              </form>

              <hr className="my-9 text-gray-900 h-[1px]" style={{borderColor: "#2A2E36CC"}} />

              <button className="w-full signin-btn">Sign in</button>

              <div className="text-center w-full pt-3 btn-cancel">
                <NavLink to='/'>Cancel</NavLink>
              </div>
            </div>
          </Fragment>
          : ""
        }
        {
          step === 1 ?
          <Fragment>
            <div className='text-center'>
              <h1 className="signup-header">You've got mail!</h1>
              <p className="pt-5 signup-content">
                We’ve sent a temporary confirmation code.
                <br />
                Please check your inbox at johndoe@gmail.com
              </p>
            </div>

            <div className="pt-[66px]">
              <form className="grid gap-y-6">
                  <input className="signup-mail" type="text" name="confirm" placeholder="Confirmation code" />
                  <button className="w-full btn-signup" onClick={() => setStep(2)}>Confirm</button>
              </form>
              <div className="text-center w-full pt-9 btn-cancel">
                <a href='/contact' target="blank">Problems? Contact support.</a>
              </div>
            </div>
          </Fragment>
          : ""
        }
        {
          step === 2 ?
          <Fragment>
            <div className='text-center'>
              <h1 className="signup-header">Greetings, explorer!</h1>
              <p className="pt-5 signup-content">
                Adapa's secure vault lets you store and organize files, while enabling it to analyze their content and provide context based on the.
              </p>
            </div>

            <div className="pt-[66px]">
              <form className="">
                  
                  <div className="grid grid-cols-2 gap-x-6">
                    <div>
                      <div className="pb-4 text-[18px] text-gray-100">First Name</div>
                      <input className="input-info" type="text" name="firstname" placeholder="John" />
                    </div>
                    <div>
                      <div className="pb-4 text-[18px] text-gray-100">Last Name</div>
                      <input className="input-info" type="text" name="lastname" placeholder="Doe" />
                    </div>
                    
                  </div>

                  <hr className="my-9 text-gray-900 h-[1px]" style={{borderColor: "#2A2E36CC"}} />
                  
                  <div className="pb-9">
                    <div className="pb-4 text-[18px] text-gray-100">What's your role?</div>
                    <select className="signup-mail" name="role" placeholder="Select role" onChange={onOptionChangeHandler}>
                      <option value="" disabled selected hidden>Select role</option>
                        {options.map((option, index) => {
                            return <option className="signup-mail" key={index} >
                                {option}
                            </option>
                        })}
                    </select>
                  </div>
                  
                  <div className="">
                    <div className="pb-4 text-[18px] text-gray-100 flex justify-between">
                      <p>What’s your use case?</p>
                      <p className="text-base" style={{color: "#999BA3"}}>Optional</p>
                    </div>
                    <textarea className="textbox-usecase" type="text" name="usecase" placeholder="Doe" />
                  </div>
                  
                <button className="w-full btn-signup mt-[57px]">Next</button>
              </form>
            </div>
          </Fragment>
          : ""
        }

      </div>
      
      <div className="bottom-radial-gradient-bg w-screen h-[1080px] absolute bottom-0" style={{zIndex: "-1"}} />
    </div>
  );
}