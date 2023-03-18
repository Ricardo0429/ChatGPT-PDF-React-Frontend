import img from '../../assets/icon.png'

export default function Welcome1() {
  return (
    <div className="w-full h-full p-4 relative" style={{minHeight: "100vh"}}>
      <div className=" flex">
        <button className="w-[36px] h-[36px] grid btn-collapse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 12 12"
            stroke="currentColor"
            strokeWidth={0.5}
          >
            <path
              color="#ffffff"
              d="M4 4h4  M4 5.5h4 M4 7h4"
            />
          </svg>
        </button>

        <button className='btn-collapse px-3 mx-2' style={{ color: "#F3F3F3" }}>+ New session</button>
      </div>

      <div className="w-full h-full mx-auto relative">
        <div className="h-full w-full text-gray-100 dashboard">
          
          <div className="text-[32px] mx-3">
            Hey, Flores
          </div>

          <div className='mt-[38px] flex mx-2'>
            <img className="w-14 mr-3" src={img} alt="icon" />
            <div className='text-xl'>
              System synced
              <div className='last-sync text-base text-synch'>
                Last synch: 11:18 PM May 4
                <span className='mx-1 synced' />
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="bottom-radial-gradient-bg w-screen h-[1080px] absolute bottom-0" style={{zIndex: "-1"}} />
    </div>
  );
}