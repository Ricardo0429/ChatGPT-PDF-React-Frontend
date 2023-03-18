export default function Spinner() {
  return (
    <div className="grid justify-items-center items-center fixed w-full h-full bg-gray-900 z-50 bg-opacity-50 top-0">
      <div className="justify-self-center spinner w-[200px] h-[200px]" />
    </div>
  );
}