"use client";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
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

  return (
    <>
      {isAsideOpen && (
        < Aside onClose={closeAside} />
      )}
      <main className={`flex min-h-screen flex-col items-start flex-1 text-white p-8 ${
          isAsideOpen && "opacity-60 bg-white/60 lg:opacity-100 lg:bg-transparent ease-in-out lg:ml-[257px] transition-[margin]"
        }`}>
        <div className="flex flex-col w-full ">
          <div className="flex flex-row items-center my-[22px] pb-4">
            {isAsideOpen == false && (
              <button
                onClick={openAside}
                className="p-1 size-12 hover:bg-[#bab8b825] hover:rounded-full"
              >
                <MenuIcon className="text-white size-7 w-[37px]" />
              </button>
            )}
            <h1 className="text-[32px] font-bold leading-7">There are no review requests sent to you</h1>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-4 border-2 border-[#626262] rounded-md appearance-none focus:outline-none bg-transparent hover:border-white focus:border-teal-500 "
            />
            <div className="absolute inset-y-0 right-0 flex items-center bg-transparent pr-3">
              <SearchIcon className="w-6 " />
            </div>
          </div>
        </div>
         
      </main>
    </>
  )
}

export default Chats;