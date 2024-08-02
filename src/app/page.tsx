import Image from "next/image";

export default function Home() {
  return (
    <>
      <aside className="bg-[#2f2f2f]">
        <div>
          <div>
            <Image
              src= {'/pactto-logo.svg'}
              alt="logo"
              width={140}
              height={45}
              className="w-[140px] h-[45px]"
            />

          </div>
        aside here

        </div>
      </aside>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        dashboard
      </main>
    </>
  );
}
