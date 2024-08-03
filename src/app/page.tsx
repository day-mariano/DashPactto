import Image from "next/image";
import { IoMdClose } from "react-icons/io";

export default function Home() {
  return (
    <>
      <aside className="bg-[#2f2f2f] flex flex-col w-[257px] h-screen flex-none">
        <div className="p-8 pb-0">
          <div>
            <div className="flex flex-row justify-between mb-4">
              <Image
                src= {'/pactto-logo.svg'}
                alt="logo"
                width={140}
                height={45}
                className="w-[140px] h-[45px]"
              />
              <button className="p-1 hover:bg-[#bab8b825] hover:rounded-full">
                <IoMdClose className="text-white size-7 w-[37px]"/>
              </button>
            </div>
            <span className="text-[#545454] font-bold text-sm mt-2">YOUR PACTTO PROFILE</span>
          </div>
          <div className="pt-[42px] pb-[12px]">
            <div className="flex flex-row">
              <Image
                src= {'/avatar-placeholder.png'}
                alt="logo"
                width={40}
                height={40}
                className="w-[40px] h-[40px] rounded-full"
              />
              <div className="ml-[10px]">
                <p className="text-[7px] text-[#B8B8B8] font-semobold mb-[3px]">trial: 12 DAYS LEFT</p>
                <div className="flex flex-row">
                  <span className=" bg-[#1DBBA5] text-white text-[12px] tracking-tighter font-medium rounded-[3px] p-[6px]">PACTTO PRO</span>
                  <button className="bg-none text-[#B8B8B8] hover:text-[#7A7A7A] text-xs underline ml-[10px] p-0">upgrade</button>
                </div>
              </div>
            </div>
            <h2 className="text-[#FFFFFF] text-xl mt-7">Dayana Mariano</h2>
            <p className="text-[#ACACAC] text-sm">Pactto member since 2024</p>
          </div>
        </div>
      </aside>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 flex-initial">
        dashboard
      </main>
    </>
  );
}
