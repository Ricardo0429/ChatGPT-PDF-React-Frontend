import Move from '../../../../assets/move.png';

export default function Session() {
  return (
    <div className="w-[402px] session-border">
    {/* <div className="w-full session-border"> */}
      {/* title */}
      <div className="w-full text-[14px] sessions-title">
        <span className='mr-2 session-circle' />
        Usability research
      </div>
      {/* Content */}
      <div className="grid w-full text-base gap-y-4 p-4 content-bg">

        <div className="flex gap-[14px]">
          <div className='w-[38px] h-[38px] grid place-content-center text-[11px] bg-gray-100 text-gray-900 session-con-img'>
            AM            
          </div>

          <div className="flex-1 text-base align-middle inline-block">
            Based on the usability research we have conducted in north america and japan what were the most important take aways?..
          </div>
        </div>

        <div className="flex flex-row gap-[14px]">
          <div className='w-[38px] h-[38px] session-btn-move grid place-content-center'>
            <img className='' src={Move} alt="Move" />
          </div>

          <div className="flex-1 text-base align-middle inline-block">
            Here is a quick rundown from the usability research we have did in cooperation with the Japan team from February 1 to..
          </div>
        </div>

      </div>

    </div>
  );
}