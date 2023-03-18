export default function Signup() {

  // function isValidEmail(email) {
  //   return /\S+@\S+\.\S+/.test(email);
  // }

  return (
    <div className="w-full h-full flex justify-between py-4 relative" style={{minHeight: "100vh"}}>
      <div className="w-[560px] h-full mx-auto grid justify-items-center">

        <div className='pt-[323px] text-center'>
          <h1 className="signup-header">Create your account</h1>
          <p className="pt-5 signup-content">
            Adapa's secure vault lets you store and organize files, while enabling it to analyze their content and provide context based on the.
          </p>
        </div>

        <div className="pt-[66px]">
          <div className="grid gap-y-6">
            <input className="signup-mail" placeholder="johndoe@gmail.com" />
            <button className="w-full btn-signup">Sign up</button>
          </div>

          <hr className="my-9" style={{color: "#2A2E36CC"}} />

          <button className='signin-btn w-full text-gray-100'>Sign in</button>
        </div>

      </div>
      
      <div className="bottom-radial-gradient-bg w-screen h-[1080px] absolute bottom-0" style={{zIndex: "-1"}} />
    </div>
  );
}