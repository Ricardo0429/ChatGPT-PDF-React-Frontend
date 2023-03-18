import encycl from '../../../../assets/ency.png';

export default function Ency() {
  return (
    <div className="w-[402px] session-border text-base ency-bg p-4">
      <img className='w-[32px] h-[32px]' src={encycl} alt="Move" />

      <div className='text-[18px] pt-[14px]'>How to use slash command</div>

      <div className="text-base align-middle inline-block pt-[12px]">
        Best practices for how to get started using the slash command in your workflow
      </div>

    </div>
  );
}