"use client";
import MenuIcon from "@mui/icons-material/Menu";
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { lazy, useState } from "react";
const Aside = lazy(() => import('../../components/Aside'));

const Chats: React.FC = () => {
  const [isAsideOpen, setAsideOpen] = useState(true);

  function openAside() {
    setAsideOpen(true)
  }
  function closeAside (){
    setAsideOpen(false)
  }

  const [trialDays, setTrialDays] = useState(15);

  return (
    <>
      {isAsideOpen && (
        < Aside onClose={closeAside} />
      )}
      <main className={`flex min-h-screen flex-col items-start flex-1 text-white p-8 ${
          isAsideOpen && "opacity-60 bg-white/60 lg:opacity-100 lg:bg-transparent ease-in-out lg:ml-[257px] transition-[margin]"
        }`}>
        <div className="flex flex-col w-full">
          <div className="flex flex-row items-center w-full my-5">
            {isAsideOpen == false && (
              <button onClick={openAside} className="p-1 size-12 hover:bg-[#bab8b825] hover:rounded-full">
                <MenuIcon className="text-white size-7 w-[37px]" />
              </button>
            )}
            <p className="text-sm text-[#626262]">You have access to <span className="text-white">PACTTO PRO</span> as a trial. <span className="text-white">{trialDays} days left</span></p>
          </div>
            <label
              htmlFor="subscribe"
              className="cursor-pointer bg-[#B8B8B8] font-semibold text-sm text-[#232225] w-[312px] h-[48px] rounded-3xl flex items-center justify-center hover:bg-[#626262]"
            >
              SUBSCRIBE TO PACTTO PRO
            </label>
            <input
              id="subscribe"
              type="file"
              accept="video/*"
              className="hidden"
            />
            <p className="my-6">The PACTTO PRO subscription allows you to:</p>

          <div className="text-sm text-white space-y-3">
            <div className="flex flex-row items-center gap-2">
              <DoneOutlineIcon className="size-4 text-[#1DBBA5] " />
              <p>Every feature on the FREE plan</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <DoneOutlineIcon className="size-4 text-[#1DBBA5] " />
              <p>Full access to the Pactto app on iPhones, iPads, Android, Mac, Windows, and Web</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <DoneOutlineIcon className="size-4 text-[#1DBBA5] " />
              <p>Max screen recording duration on Pactto Desktop: unlimited</p>
            </div>

            <div className="flex flex-row items-center gap-2">
              <DoneOutlineIcon className="size-4 text-[#1DBBA5] " />
              <p>Max review duration on mobile: unlimited</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <DoneOutlineIcon className="size-4 text-[#1DBBA5] " />
              <p>Max review duration on Pactto Web: 12 minutes</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <DoneOutlineIcon className="size-4 text-[#1DBBA5] " />
              <p>Max review duration on Pactto Desktop: 20 minutes</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <DoneOutlineIcon className="size-4 text-[#1DBBA5] " />
              <p>Manage and use your reference video library on the Web and Desktop</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <DoneOutlineIcon className="size-4 text-[#1DBBA5] " />
              <p>Review videos uploaded by you, using the browser</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <DoneOutlineIcon className="size-4 text-[#1DBBA5] " />
              <p>Add your own logo to create branded reviews</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <DoneOutlineIcon className="size-4 text-[#1DBBA5] " />
              <p>If you sell reviews, the Pactto take rate for paid reviews is 3%, instead of 12% for free users</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <DoneOutlineIcon className="size-4 text-[#1DBBA5] " />
              <p><a href="https://pactto.mintlify.app/introduction" target="_blank" className="underline">Integrate Pactto to your website</a> so anyone can send, and pay, for your video feedback</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <DoneOutlineIcon className="size-4 text-[#1DBBA5] " />
              <p>Share your videos with others (no more sending video files around)</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Chats;