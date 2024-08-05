"use client";
import Image from "next/image";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import HouseIcon from "@mui/icons-material/House";
import ForumIcon from "@mui/icons-material/Forum";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import SettingsIcon from "@mui/icons-material/Settings";
import { use, useState } from "react";

export default function Home() {
  const [isAsideOpen, setAsideOpen] = useState(true);

  function closeAside() {
    setAsideOpen(false);
  }
  function openAside() {
    setAsideOpen(true);
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
        <aside className="bg-[#2f2f2f] flex flex-col w-[257px] h-screen flex-none fixed top-0 left-0 z-10">
          <div className="p-8 pb-0">
            <div>
              <div className="flex flex-row justify-between mb-4">
                <Image
                  src={"/pactto-logo.svg"}
                  alt="logo"
                  width={140}
                  height={45}
                  className="w-[140px] h-[45px]"
                />
                <button
                  onClick={closeAside}
                  className="p-1 hover:bg-[#bab8b825] hover:rounded-full"
                >
                  <CloseIcon className="text-white size-7 w-[37px]" />
                </button>
              </div>
              <span className="text-[#545454] font-bold text-sm mt-2">
                YOUR PACTTO PROFILE
              </span>
            </div>
            <div className="pt-[42px] pb-[12px]">
              <div className="flex flex-row">
                <Image
                  src={"/avatar-placeholder.png"}
                  alt="logo"
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px] rounded-full"
                />
                <div className="ml-[10px]">
                  <p className="text-[7px] text-[#B8B8B8] font-semobold mb-[3px]">
                    trial: 12 DAYS LEFT
                  </p>
                  <div className="flex flex-row">
                    <span className=" bg-[#1DBBA5] text-white text-[12px] tracking-tighter font-medium rounded-[3px] p-[6px]">
                      PACTTO PRO
                    </span>
                    <button className="bg-none text-[#B8B8B8] hover:text-[#7A7A7A] text-xs underline ml-[10px] p-0">
                      upgrade
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-[#FFFFFF] text-xl mt-7">Dayana Mariano</p>
              <p className="text-[#ACACAC] text-sm">Pactto member since 2024</p>
            </div>
          </div>
          <nav>
            <Link
              href="/"
              id="/"
              className="flex flex-row text-[#BDBDBD] text-sm items-center w-full h-12 px-8 target:bg-[#3a363f] target:text-[#1DBBA5] hover:bg-[#4C4851]"
            >
              <HouseIcon className="text-[#BDBDBD] target:text-[#1DBBA5] size-6 mr-3" />
              Home
            </Link>
            <Link
              href="/"
              id="/"
              className="flex flex-row text-[#BDBDBD] text-sm items-center w-full h-12 px-8 target:bg-[#3a363f] target:text-[#1DBBA5] hover:bg-[#4C4851]"
            >
              <ForumIcon className="text-[#BDBDBD] target:text-[#1DBBA5] size-6 mr-3" />
              Pacttos (Chats)
            </Link>
            <Link
              href="/"
              id="/"
              className="flex flex-row text-[#BDBDBD] text-sm items-center w-full h-12 px-8 target:bg-[#3a363f] target:text-[#1DBBA5] hover:bg-[#4C4851]"
            >
              <VideoLibraryIcon className="text-[#BDBDBD] target:text-[#1DBBA5] size-6 mr-3" />
              Items to review
            </Link>
            <Link
              href="/"
              id="/"
              className="flex flex-row text-[#BDBDBD] text-sm items-center w-full h-12 px-8 target:bg-[#3a363f] target:text-[#1DBBA5] hover:bg-[#4C4851]"
            >
              <InsertLinkIcon className="text-[#BDBDBD] target:text-[#1DBBA5] size-6 mr-3" />
              Web links you created
            </Link>
            <Link
              href="/"
              id="/"
              className="flex flex-row text-[#BDBDBD] text-sm items-center w-full h-12 px-8 target:bg-[#3a363f] target:text-[#1DBBA5] hover:bg-[#4C4851]"
            >
              <ManageAccountsIcon className="text-[#BDBDBD] target:text-[#1DBBA5] size-6 mr-3" />
              Personal information
            </Link>
            <Link
              href="/"
              id="/"
              className="flex flex-row text-[#BDBDBD] text-sm items-center w-full h-12 px-8 target:bg-[#3a363f] target:text-[#1DBBA5] hover:bg-[#4C4851]"
            >
              <CardGiftcardIcon className="text-[#BDBDBD] target:text-[#1DBBA5] size-6 mr-3" />
              Revies packages for sale
            </Link>
            <Link
              href="/"
              id="/"
              className="flex flex-row text-[#BDBDBD] text-sm items-center w-full h-12 px-8 target:bg-[#3a363f] target:text-[#1DBBA5] hover:bg-[#4C4851]"
            >
              <ViewCarouselIcon className="text-[#BDBDBD] target:text-[#1DBBA5] size-6 mr-3" />
              Paccto websites
            </Link>
            <Link
              href="/"
              id="/"
              className="flex flex-row text-[#BDBDBD] text-sm items-center w-full h-12 px-8 target:bg-[#3a363f] target:text-[#1DBBA5] hover:bg-[#4C4851]"
            >
              <OndemandVideoIcon className="text-[#BDBDBD] target:text-[#1DBBA5] size-6 mr-3" />
              Reference video library
            </Link>
            <Link
              href="/"
              id="/"
              className="flex flex-row text-[#BDBDBD] text-sm items-center w-full h-12 px-8 target:bg-[#3a363f] target:text-[#1DBBA5] hover:bg-[#4C4851]"
            >
              <SubscriptionsIcon className="text-[#BDBDBD] target:text-[#1DBBA5] size-6 mr-3" />
              Subscription
            </Link>
            <Link
              href="/"
              id="/"
              className="flex flex-row text-[#BDBDBD] text-sm items-center w-full h-12 px-8 target:bg-[#3a363f] target:text-[#1DBBA5] hover:bg-[#4C4851]"
            >
              <SettingsIcon className="text-[#BDBDBD] target:text-[#1DBBA5] size-6 mr-3" />
              Review Settings
            </Link>
          </nav>
          <button className="bg-[#B8B8B8] w-[193px] h-12 m-auto mb-4 rounded-3xl text-[#181818] text-sm font-semibold hover:bg-[#989898]">
            LOGOUT
          </button>
        </aside>
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
