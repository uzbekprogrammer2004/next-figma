import React from 'react';
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <div className="w-[100%] h-[334px] px-[195px] py-10 bg-neutral-700 flex-col justify-start items-center gap-[30px] inline-flex">
      <div className="justify-between items-start inline-flex">
        <div className="w-[327.41px] pr-[84px] flex-col justify-start items-start gap-[30px] inline-flex">
          <div className="w-[243.41px] h-8 relative">
            <div className="w-8 h-8 left-0 top-0 absolute" />
          </div>
          <div className="flex-col justify-start items-start gap-5 flex">
            <div className="w-[238px] text-stone-300 text-base font-normal font-['Work Sans'] leading-snug">
              NFT marketplace UI created with Anima for Figma.
            </div>
            <div className="flex-col justify-start items-start gap-[15px] flex">
              <div className="w-[238px] h-[18px] text-stone-300 text-base font-normal font-['Work Sans'] leading-snug">
                Join our community
              </div>
              <div className="justify-start items-start gap-2.5 inline-flex">
                <div className="w-8 h-8 relative flex justify-center items-center">
                  <TelegramIcon />
                </div>
                <div className="w-8 h-8 relative flex justify-center items-center">
                  <CallIcon />
                </div>
                <div className="w-8 h-8 relative flex justify-center items-center">
                  <InstagramIcon />
                </div>
                <div className="w-8 h-8 relative flex justify-center items-center">
                  <YouTubeIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-60 flex-col justify-start items-start gap-[25px] inline-flex">
          <div className="text-white text-[22px] font-bold font-['Space Mono'] capitalize leading-9">Explore</div>
          <div className="flex-col justify-start items-start gap-5 flex">
            <div className="text-stone-300 text-base font-normal font-['Work Sans'] leading-snug">Marketplace</div>
            <div className="text-stone-300 text-base font-normal font-['Work Sans'] leading-snug">Rankings</div>
            <div className="text-stone-300 text-base font-normal font-['Work Sans'] leading-snug">Connect a wallet</div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-[25px] inline-flex">
          <div className="text-white text-[22px] font-bold font-['Space Mono'] capitalize leading-9">Join our weekly digest</div>
          <div className="flex-col justify-start items-start gap-5 flex">
            <div className="w-[330px] text-stone-300 text-base font-normal font-['Work Sans'] leading-snug">
              Get exclusive promotions & updates straight to your inbox.
            </div>
            <div className="w-[420px] h-[60px] pl-5 py-4 bg-white rounded-[20px] justify-start items-center gap-3 inline-flex">
              <div className="grow shrink basis-0 text-zinc-800 text-base font-normal font-['Work Sans'] leading-snug">
                Enter your email here
              </div>
              <div className="w-[200px] h-[60px] bg-purple-500 rounded-[20px] justify-center items-center gap-3 flex">
                <div className="text-center text-white text-base font-semibold font-['Work Sans'] leading-snug">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[33px] flex-col justify-start items-start gap-5 flex">
        <div className="self-stretch h-[0px] border border-zinc-500"></div>
        <div className="self-stretch text-stone-300 text-xs font-normal font-['Work Sans'] leading-[13.20px]">
          Ⓒ NFT Market. Use this template freely.
        </div>
      </div>
    </div>
  );
}

export default Footer;
