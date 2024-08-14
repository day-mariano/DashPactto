"use client";
import MenuIcon from "@mui/icons-material/Menu";
import { lazy, useState } from "react";
import Image from "next/image";
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
      <main className={`flex min-h-screen flex-col items-start flex-1 text-white ${
          isAsideOpen && "opacity-60 bg-white/60 lg:opacity-100 lg:bg-transparent ease-in-out lg:ml-[257px] transition-[margin]"
        }`}>
        <div className="flex flex-col w-full">
          <div className="flex flex-row px-8 py-6 justify-between flex-wrap gap-3">
            <div className="flex flex-row items-center">
              {isAsideOpen == false && (
                <button
                  onClick={openAside}
                  className="p-1 size-12 hover:bg-[#bab8b825] hover:rounded-full"
                >
                  <MenuIcon className="text-white size-7 w-[37px]" />
                </button>
              )}
              <h2 className="text-xl">Please edit your Pactto page below.</h2>
            </div>
            <div className="flex flex-row gap-3">
              <label
                htmlFor="launch"
                className="cursor-pointer bg-[#1994fc] font-semibold text-sm text-[#232225] w-[200px] h-[48px] rounded-3xl flex items-center justify-center hover:bg-[#3681bf]"
              >
                LAUNCH
              </label>
              <input
                id="reset"
                accept="video/*"
                className="hidden"
                type="button"
              />
              <label
                htmlFor="save"
                className="cursor-pointer bg-[#1DBBA5] font-semibold text-sm text-[#232225] w-[200px] h-[48px] rounded-3xl flex items-center justify-center hover:bg-[#33aa9a]"
              >
                SAVE
              </label>
              <input
                id="submit"
                className="hidden"
                type="button"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse justify-between w-full p-8">
            <div className="flex flex-col w-full md:ml-10 mb-16">
              <p>Avatar</p>
              <div className="bg-[#1c1a1c] flex justify-center p-3 ">
                <Image
                  src={"/avatar-placeholder.png"}
                  alt="avatar"
                  width={160}
                  height={160}
                  className="w-[160px] h-[160px] rounded-full"
                />
              </div>
              <input type="file" name="avatar" id="avatar" placeholder="+ ADD IMAGE" accept="image/png, image/jpeg" className="mx-auto my-2"/>
            </div>
            <form id="formPersonalInfo" className="w-full max-w-[1083px] space-y-6">
              <div className="flex flex-col space-y-2">
                <p>Hero</p>
                <div className="h-[58px]">
                  <input
                    type="text"
                    placeholder="Public Name"
                    name="publicName"
                    className="w-full h-[42px] p-3 bg-[#3f3e40] hover:bg-[#454446] focus:bg-[#6f6d70] border border-gray-700 focus:outline-none"
                  />
                </div>
                <div className="h-[58px]">
                  <input
                    type="text"
                    name="headline"
                    placeholder="Headline"
                    className="w-full h-[42px] p-3 bg-[#3f3e40] hover:bg-[#454446] focus:bg-[#6f6d70] border border-gray-700 focus:outline-none"
                  />
                </div>
                <p>About Me</p>
                <textarea name="aboutMe" id="aboutMe" placeholder="About Me" className="w-full h-[144px] p-3 bg-[#3f3e40] hover:bg-[#454446] focus:bg-[#6f6d70] border border-gray-700 focus:outline-none"></textarea>
              </div>


              <div className="space-y-2 mt-8">
                <div className="h-[58px]">
                  <input
                    type="text"
                    name="expertise"
                    placeholder="Expertise Title"
                    className="w-full h-[42px] p-3 bg-[#3f3e40] hover:bg-[#454446] focus:bg-[#6f6d70] border border-gray-700 focus:outline-none"
                  />
                </div>
                <div className="h-[58px]">
                <input
                    type="text"
                    name="addExpertise"
                    placeholder="Add Expertise"
                    className="w-full h-[42px] p-3 bg-[#3f3e40] hover:bg-[#454446] focus:bg-[#6f6d70] border border-gray-700 focus:outline-none"
                  />
                </div>
                <div className="h-[58px]">
                  <input
                    type="award"
                    name="award"
                    placeholder="Awards Title"
                    className="w-full h-[42px] p-3 bg-[#3f3e40] hover:bg-[#454446] focus:bg-[#6f6d70] border border-gray-700 focus:outline-none"
                  />
                </div>
              </div>
              <p>Footer</p>
              <textarea name="footer" id="footer" placeholder="Quote" className="w-full h-[144px] p-3 bg-[#3f3e40] hover:bg-[#454446] focus:bg-[#6f6d70] border border-gray-700 focus:outline-none"></textarea>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default Chats;