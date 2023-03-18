import { useRef } from 'react';

import icon from '../../../assets/icon.png'
import { sendBase64CodeOfPDF } from '../../../util/api';

export default function Navbar(props) {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  }

  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result)
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  const handleFileChange = async event => {
    // const fileObj = event.target.files && event.target.files[0];
    const fileObj = event.target.files[0];
    props.uploading.onUploadFile(fileObj.name);
    await props.uploading.onLoadingTrue();

    await getBase64(fileObj, async (result) => {
      await sendBase64CodeOfPDF(result.substring(28, result.length))
      .then(res => {
        console.log("Success!")
        props.uploading.onLoadingFalse()
      })
      .catch(err => {
        console.log("Error!", err)
        props.uploading.onLoadingFalse()
      });
    })
  };

  return (
    <nav className="flex justify-between w-full p-4">
      <div className='flex'>
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

        <div className="mx-2 btn-avatar p-[6px] flex">
          <img className='w-6 h-6' src={icon} alt="Toyota" />
          <div className='mx-[6px]'>Toyota</div>
        </div>
      </div>

      <div className='flex text-gray-100'>
        <button className='btn-collapse px-3 mx-2' style={{ color: "#F3F3F3" }}>Search sessions</button>

        <input
          style={{ display: 'none' }}
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
        />
        <button onClick={handleClick}
          className="w-[36px] h-[36px] grid btn-collapse place-content-center"
        >
          +
        </button>
      </div>
    </nav>
  );
}