import img from '../../../assets/icon.png'
import Session from './Sessions/Session';
import Ency from './Ency/Ency';

export default function Dashboard() {
  return (
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

      <div className='mt-[75px]'>
        <div className="text-[32px] mx-3 mb-[30px]">
          Recent sessions
        </div>
        <div className='flex gap-[12px]'>
          <Session />
          <Session />
        </div>
      </div>

      <div className='mt-[75px]'>
        <div className="text-[32px] mx-3 mb-[30px]">
          Encyclopedia
        </div>
        <div className='relative flex gap-[12px]'>
          <Ency />
          <Ency />
          <button className='absolute right-[-72px] top-[56px] round-full w-[56px] h-[56px] px-4 btn-next text-base grid place-content-center'>
            <div>❯</div>
          </button>
        </div>
      </div>
      
    </div>
  );
}