import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { PiInstagramLogoThin } from "react-icons/pi";
import { FaRegCopyright } from "react-icons/fa";


const Footer = () => {
  return (
    <section className="bg-[#1f1f1f] h-[20vh] font-[times-new-roman]">
      <div className="flex justify-center gap-12 text-5xl p-5 text-white">
        <span>
          <i>
            <CiFacebook />
          </i>
        </span>
        <span>
          <i>
            <TiSocialLinkedinCircular />
          </i>
        </span>
        <span>
          <i>
            <FaXTwitter />
          </i>
        </span>
        <span>
          <i>
            <PiInstagramLogoThin />
          </i>
        </span>
      </div>

      <div className='flex items-center justify-center  h-[8vh] w-[100%] text-white'>
      <span> <FaRegCopyright/> </span>
      <p>2024 Event Haven. All Rights Reserved. Terms|Privacy</p>
      </div>
    </section>
  );
}

export default Footer
