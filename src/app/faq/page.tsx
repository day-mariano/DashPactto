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
          <div className=" text-white p-6 space-y-4">
            <h2 className="text-2xl font-bold">FAQ</h2>

            <details className="bg-[#626262] p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Do I need to install Pactto?
              </summary>
              <p className="mt-2 text-gray-400 ">
                Not necessarily! For basic video reviews, you can use Google Chrome on your computer. However, for the best experience and powerful features like recording your screen with annotations or creating instant MP4 files, downloading the desktop version (available for Mac and Windows) is the way to go. Want to make video reviews on the go? The mobile version (iOS or Android) has got you covered.
              </p>
            </details>

            <details className="bg-[#626262] p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                How can I share my video reviews?
              </summary>
              <p className="mt-2 text-gray-400">
                Once you’ve finished a review, an optimized MP4 video file is created with all your feedback (your voice, drawings, camera, all in one single video). You can easily share this file via other apps (like WhatsApp, Google Drive, or Slack) or even create a shareable smart web link to send to others.
              </p>
            </details>

            <details className="bg-[#626262] p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Does Pactto use AI?
              </summary>
              <p className="mt-2 text-gray-400">
                Absolutely! Pactto makes extensive use of AI, particularly when you share reviews via a web link. This includes access to handy features like transcription, actionable items, and customizable prompts that let you generate various outputs such as blog posts, bug reports, or scripts for further automation.
              </p>
            </details>

            <details className="bg-[#626262] p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Is Pactto privacy-first?
              </summary>
              <p className="mt-2 text-gray-400">
                Yes, indeed. Privacy is at the core of how Pactto has been designed. Your feedback isn’t uploaded to the cloud until you opt to share it via a web link. Everything else happens right on your device.
              </p>
            </details>

            <details className="bg-[#626262] p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Can I use Pactto offline?
              </summary>
              <p className="mt-2 text-gray-400">
                Yes, you can! All processing is done locally on your device, so you can create and review videos anytime, anywhere—even without an internet connection.
              </p>
            </details>

            <details className="bg-[#626262] p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Do I have to pay to try Pactto?
              </summary>
              <p className="mt-2 text-gray-400">
                Nope! Starting with Pactto is completely free, and we don’t even require a credit card to get started. Just create an account and you’ll get full access to all PRO features for a 14-day trial period. After that, you can continue with the FREE plan, which still offers plenty of functionality.
              </p>
            </details>

            <details className="bg-[#626262] p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                How much does Pactto cost?
              </summary>
              <p className="mt-2 text-gray-400">
                Pactto offers a FREE plan with basic features. If you need more, the PRO plan is available for just $9 per month per user. Act now, because this pricing will change later in 2024 (don’t worry—any active subscriptions made before the change will be honored for life).
              </p>
            </details>

            <details className="bg-[#626262] p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                What kinds of assets can I review with Pactto?
              </summary>
              <p className="mt-2 text-gray-400">
                On the desktop version of Pactto, load up videos, images, and PDFs for review. You can also record your screen, add drawings, and integrate camera footage. On mobile, in addition to videos and images, you can review sound files, and we’ll soon be supporting 3D files as well.
              </p>
            </details>

            <details className="bg-[#626262] p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Can I use Pactto to record my screen?
              </summary>
              <p className="mt-2 text-gray-400">
                Definitely! Pactto is the fastest tool around for screen recording. From the moment you click “start recording” to when you have a finished, optimized MP4 file, takes less than 10 seconds. It’s quicker than Quicktime and allows you to draw, scroll, and resize your camera view seamlessly during the recording.
              </p>
            </details>

            <details className="bg-[#626262] p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                What languages does Pactto support?
              </summary>
              <p className="mt-2 text-gray-400">
                Pactto is currently available in English on all platforms. For mobile users, we also support Spanish and Portuguese.
              </p>
            </details>

            <details className="bg-[#626262] p-4 rounded-lg">
              <summary className="font-semibold cursor-pointer">
                Does Pactto work with teams?
              </summary>
              <p className="mt-2 text-gray-400">
                Not currently, but team functionality is on our roadmap and slated for release in 2024. Stay tuned!
              </p>
            </details>
          </div>
        </div>
      </main>
    </>
  )
}

export default Chats;