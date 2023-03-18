export default function Signin() {
  return (
    <div className="w-full h-full flex justify-between py-4 relative" style={{minHeight: "100vh"}}>
      <div className="w-[816px] px-[815px] py-[160px] w-full h-full mx-auto relative">

        <div className='pt-[196px] grid gap-y-4'>
          <button className='btn-login'>Continue with Google</button>
          <button className='btn-login'>Continue with GitHub</button>
        </div>

      </div>
      
      <div className="bottom-radial-gradient-bg w-screen h-[1080px] absolute bottom-0" style={{zIndex: "-1"}} />
    </div>
  );
}