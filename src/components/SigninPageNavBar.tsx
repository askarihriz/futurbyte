import React from "react";
import Logo from "../assets/EazioLogo.png";
import { CiGlobe } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

const SigninPageNavBar = () => {
  return (
    <div className="h-[122px] w-full px-[96px] py-[40px] flex items-center justify-between">
      <img className="h-[40px] w-[132px]" src={Logo} alt="logo" />
      <div className="flex items-center justify-center h-[42px] gap-[8px]">
        <button className="px-[16px] py-[8px] border-b-[4px] border-white text-[16px] text-[#3D474D] font-[400] hover:border-[#F4711E] hover:font-[700]">
          Home
        </button>
        <button className="px-[16px] py-[8px] border-b-[4px] border-white text-[#3D474D] font-[400] hover:border-[#F4711E] hover:font-[700]">
          Careers
        </button>
        <button className="px-[16px] py-[8px] border-b-[4px] border-white text-[#3D474D] font-[400] hover:border-[#F4711E] hover:font-[700]">
          Pricing
        </button>
        <button className="px-[16px] py-[8px] border-b-[4px] border-white text-[#3D474D] font-[400] hover:border-[#F4711E] hover:font-[700]">
          Features
        </button>
      </div>
      <div className="flex items-center justify-center h-[42px]">
        <div className="flex items-center justify-center px-[16px] py-[8px]">
          <CiGlobe className="text-[#3D474D]" size={24} />
          <h3 className="text-[#3D474D] ml-[8px] text-[16px]">English</h3>
          <RiArrowDropDownLine className="text-[#3D474D]" size={30} />
        </div>
        <button className="text-[#3D474D] font-[400] text-[16px] px-[20px] py-[8px] border-l border-[#3D474D]">
          Log In
        </button>
        <button className="border-[#FF9002] border text-[#3D474D] font-[400] text-[16px] px-[26px] py-[8px] rounded-[4px]">
          Get Demo
        </button>
      </div>
    </div>
  );
};

export default SigninPageNavBar;
