"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { lazy, useState } from "react";
const Aside = lazy(() => import('../components/Aside'));


const Home: React.FC = () => {
  const [isAsideOpen, setAsideOpen] = useState(true);

  const openAside = (): void => {
    setAsideOpen(true)
  }
  const closeAside = (): void => {
    // document.getElementById("aside")?.classList.add("hidden")
    setAsideOpen(false)
  }
  
  const [isEmailDone, setIsEmailDone] = useState(true)
  const [isVideoDone, setIsVideoDone] = useState(false)
  const [isComputerDone, setIsComputerDone] = useState(false)
  const [isPhoneDone, setIsPhoneDone] = useState(false)
  
  const turnDoneVideoStep = () => {setIsVideoDone(true)}
  const turnDoneComputerStep = () => {setIsComputerDone(true)}
  const turnDonePhoneStep = () => {setIsPhoneDone(true)}

  return (
    <>
      {isAsideOpen && (
        < Aside onClose={closeAside} />
      )}
      <main
        className={`flex min-h-screen flex-col items-start flex-1 text-white  ${
          isAsideOpen && "opacity-60 bg-white/60 lg:opacity-100 lg:bg-transparent ease-in-out lg:ml-[257px] transition-[margin]"
        }`}
      >
        {isAsideOpen == false && (
          <button
            onClick={openAside}
            className="p-1 size-12 hover:bg-[#bab8b825] hover:rounded-full"
          >
            <MenuIcon className="text-white size-7 w-[37px]" />
          </button>
        )}
        <div className="p-8">
          <h2 className="text-xl font-medium pb-5">Hey Dayana, welcome to Pactto!</h2>
          <ul className="flex flex-col h-[120px] justify-between">
            <li className="flex flex-row gap-3">
              <span className={`py-[2px] px-[6px] rounded-lg text-[9px] font-medium leading-[14px] flex items-center ${isEmailDone ? "bg-[#1DBBA5]" : "bg-[#626262]"}`}>
                {isEmailDone ? "DONE" : "TO DO"}
              </span>
              <p className="text-sm text-[#b8b8b8] font-medium">
                Open your inbox and verify your email
              </p>
            </li>
            <li className="flex flex-row gap-3">
              <span className={`py-[2px] px-[6px] rounded-lg text-[9px] font-medium leading-[14px] flex items-center ${isVideoDone ? "bg-[#1DBBA5]" : "bg-[#626262]"}`}>
                {isVideoDone ? "DONE" : "TO DO"}
              </span>
              <p className="text-sm text-[#b8b8b8] font-medium">
                Check the <a href="https://www.youtube.com/watch?v=CvbvDGsZsKM&t=93s" target="_blank" onClick={turnDoneVideoStep} className="text-[#1DBBA5] underline">short video of Pactto in action</a>
              </p>
            </li>
            <li className="flex flex-row gap-3">
              <span className={`py-[2px] px-[6px] rounded-lg text-[9px] font-medium leading-[14px] flex items-center ${isComputerDone ? "bg-[#1DBBA5]" : "bg-[#626262]"}`}>
                {isComputerDone ? "DONE" : "TO DO"}
              </span>
              <p className="text-sm text-[#b8b8b8] font-medium">
                Wanna record your computer screen or review files? Download Pactto for <a href="https://pactto.com/#download" target="_blank" onClick={turnDoneComputerStep} className="text-[#1DBBA5] underline">Mac</a> or <a href="https://pactto.com/#download" target="_blank" onClick={turnDoneComputerStep} className="text-[#1DBBA5] underline">Windows</a> 
              </p>
            </li>
            <li className="flex flex-row gap-3">
              <span className={`py-[2px] px-[6px] rounded-lg text-[9px] font-medium leading-[14px] flex items-center ${isPhoneDone ? "bg-[#1DBBA5]" : "bg-[#626262]"}`}>
                  {isPhoneDone ? "DONE" : "TO DO"}
              </span>
              <p className="text-sm text-[#b8b8b8] font-medium">
                Wanna review videos, images or audio files with your phone or tablet? Download Pactto for <a href="https://apps.apple.com/us/app/pactto-record-video-feedback/id1662226619" target="_blank" onClick={turnDonePhoneStep}
                className="text-[#1DBBA5] underline">iOS</a> or <a href="https://play.google.com/store/apps/details?id=com.pactto.replay" target="_blank" onClick={turnDonePhoneStep} className="text-[#1DBBA5] underline">Android</a>
              </p>
            </li>
          </ul>

        </div>
        <h1>My uploads</h1>
      </main>
    </>
  );
}

export default Home;
