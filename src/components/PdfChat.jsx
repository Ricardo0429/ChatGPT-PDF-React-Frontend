import { useState } from "react";

import Navbar from "./Layout/Navbar/Navbar";
import CommandInput from "./Layout/CommandInput";
import SessionPanel from "./SessionManager/SessionPanel";
import Spinner from './Layout/Spinner';

export default function PdfChat() {
  const [response, setResponse] = useState("");
  const [uploading, setUploading] = useState(false);
  const [asking, setAsking] = useState(false);
  const [hasResponse, setHasResponse] = useState(false);
  const [ fileName, setFileName ] = useState("");

  const onLoadingTrue = () => setUploading(true);
  const onLoadingFalse = () => setUploading(false);

  const onAskingTrue = () => setAsking(true)
  const onAskingFalse = () => setAsking(false)

  const onUploadFile = (data) => setFileName(data);

  const handleCommandSubmit = async (command) => {
    const apiUrl = "http://127.0.0.1:5000/query";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: command }),
    };
    onAskingTrue();
    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();
    setResponse(data.response);
    setHasResponse(true);
    onAskingFalse();
  };


  return (
    <div className="w-full h-full">
      { uploading ? <Spinner /> : ""
      }
      <Navbar uploading={{onLoadingTrue, onLoadingFalse, onUploadFile}} />

      <div className="h-full grid content-between px-4" style={{ minHeight: "calc(100vh - 72px)" }}>
        <SessionPanel response={response} asking={asking} hasResponse={hasResponse} fileName={fileName} />
        {/* <div className="relative w-[834px] session-panel text-gray-100 text-base">
          <div className="grid w-full text-base gap-y-6 p-4 ">

            <div className="flex gap-[28px]">
              <div className='w-[64px] h-[64px] grid place-content-center text-[18px] bg-gray-100 text-gray-900 session-con-img '>
                AM
              </div>

              {hasResponse && (<div className="flex-1 text-base align-middle inline-block" style={{ color: "#F3F3F3" }}>
                { !asking ?
                  response
                  :
                  <div className="grid justify-items-center items-center w-full h-full z-50 top-0">
                    <div className="justify-self-center spinner w-[50px] h-[50px]" />
                  </div>
                }
              </div>
              )}
            </div>

            <hr className='hr-bg' />

          </div>
        </div> */}

        <div className="relative w-full">
          <div className="w-full grid pb-4" style={{ placeContent: "center" }}>
            <CommandInput onCommandSubmit={handleCommandSubmit} />
            <button className="absolute buttom-0 right-0 btn-collapse py-2 px-3 text-gray-100">+ Zen</button>
          </div>

        </div>
      </div>
    </div>
  );
}