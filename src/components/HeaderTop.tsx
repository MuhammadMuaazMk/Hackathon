import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { MdEmail } from "react-icons/md";
const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block bg-[#252B42] ">
      <div className=" p-3 pl-8">

        <div className="flex justify-between items-center">
        <div className="flex ">
        <MdOutlineWifiCalling3 className="w-10 h-7  text-white"  />
          <span className="pr-5 text-[20px] text-white font-thin">(335) 194-5029</span>

         
        <div className="flex  pl-6">
        <MdEmail className="w-10 h-7  text-white"  />
          <span className="text-[20px] text-white font-thin">muhammadmuaazkhalid@gmail.com</span>

          </div> 
          </div>
          <div className=" text-[24px] font-thin text-white">
          Follow Us  and get a chance to win 80% off

          </div>
          <div className="hidden lg:flex gap-1 pr-8">
            <span className="text-2xl pr-3 text-white font-thin">Follow Us:</span>
            <div className="header_top_icon_wrapper text-white">
              <FaFacebook />
            </div>
            <div className="header_top_icon_wrapper text-white">
              <TiSocialInstagram />
            </div>
            <div className="header_top_icon_wrapper text-white">
              <FaTwitter />
            </div> 
            <div className="header_top_icon_wrapper text-white">
              <FaYoutube />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
