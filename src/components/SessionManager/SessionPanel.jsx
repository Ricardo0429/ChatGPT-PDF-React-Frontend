import Move from '../../assets/move.png'
import Figma from '../../assets/figma.png'
import Loading from '../../assets/loading.gif'

function Figmas() {
  return (
    <div className='flex justify-between'>
      <img className='w-[51px] h-[51px]' src={Figma} alt="Figma" style={{borderRadius: "8px"}} />

      <div className='flex-1 mx-[18px]'>
        <div className='text-xl'>
          C1_Cockpit_6jan_jason
        </div>
        <div className='text-[14px]' style={{color: "#8D9095"}}>
          Figma * January 6, 2023
        </div>
      </div>

      <div>
        <button className='text-[14px] px-[6px] btn-figma h-[28px]'>Open in figma</button>
      </div>
    </div>
  );
}

export default function SessionPanel({hasResponse, asking, response, fileName}) {
  return (
    <div className='w-full py-4'>

      <div className='relative w-full grid justify-center'>

        {/* Sidebar */}
        <div className='absolute flex flex-col'>

          <button className="w-[230px] px-4 py-3 btn-collapse text-gray-100 text-left">+ New session</button>

          <div className="w-[230px] px-4 py-3 my-2 btn-collapse text-gray-100 text-left text-[14px]">
            <div>
              Based on the usability research we have conducted in north america and japan what were the most important take aways? Please create some.. 
            </div>
          </div>

          <div className="w-[230px] px-4 py-3 btn-collapse text-gray-100 text-left text-[14px]">
            <div>
              Please forward me to the c1 cockpit prototype explorations that were made between 6th january to 25th february
            </div>
            <div className='pt-2 flex'>
              <img className='w-[30px] h-[30px] z-40' src={Figma} alt="Figma" style={{borderRadius: "6px"}} />
              <img className='w-[30px] h-[30px] z-30 transform translate-x-[-16px]' src={Figma} alt="Figma" style={{borderRadius: "6px"}} />
            </div>
          </div>

        </div>

        {/* Demo */}

        { fileName ? 
          <div className='w-full text-base file-name text-gray-100'>
            <div>{fileName}</div>
          </div>
          : ""
        }

        <div className="relative w-[834px] session-panel text-gray-100 text-base my-4">
          
          <div className="grid w-full text-base gap-y-6 p-4 ">

            <div className="flex gap-[28px]">
              <div className='w-[64px] h-[64px] grid place-content-center text-[18px] bg-gray-100 text-gray-900 session-con-img '>
                AM
              </div>

              {(<div className="flex-1 text-base align-middle inline-block" style={{ color: "#F3F3F3" }}>
                { !asking ?
                  response
                  :
                  <div className="grid justify-items-center items-center w-full h-full z-50 top-0">
                    {/* <div className="justify-self-center spinner w-[50px] h-[50px]" /> */}
                    <img className='justify-self-center w-[25px] ' src={Loading} alt="Loading" />
                  </div>
                }
              </div>
              )}
            </div>

            <hr className='hr-bg' />

          </div>
        </div>
        
        {/* Main Section */}
        {/* <div className="relative w-[834px] session-panel text-gray-100 text-base">
          <div className="grid w-full text-base gap-y-6 p-4 ">

            <div className="flex gap-[28px]">
              <div className='w-[64px] h-[64px] grid place-content-center text-[18px] bg-gray-100 text-gray-900 session-con-img '>
                AM
              </div>

              <div className="flex-1 text-base align-middle inline-block" style={{color: "#F3F3F3"}}>
                  Please forward me to the c1 cockpit prototype explorations that were made between 6th january to 25th february
              </div>
            </div>

            <hr className='hr-bg' />

            <div className="flex flex-row gap-[28px]">
              <div className='w-[64px] h-[64px] session-btn-move grid place-content-center'>
                <img className='' src={Move} alt="Move" />
              </div>

              <div className="flex-1 text-base align-middle inline-block" style={{color: "#F3F3F3"}}>
                Sure, here are all the C1 Cockpit Prototype explorations that were made between the 6th January to 25th February in 2023.
                <div className='bt-6'></div>
              </div>
            </div>

            <div className='px-4 py-6 figma-bg max-h-[445px] overflow-auto'>
              <div className='grid gap-y-[18px]'>
                <Figmas />
                <Figmas />
                <Figmas />
                <Figmas />
                <Figmas />
                <Figmas />
                <Figmas />
                <Figmas />
              </div>
            </div>

          </div>
        </div> */}
      </div>
    </div>
  );
}