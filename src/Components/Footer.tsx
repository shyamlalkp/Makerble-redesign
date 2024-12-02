import React from "react";
import {
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="bg-slate-200 text-gray-700 text-center flex justify-between items-baseline space-x-20 h-70 p-4">
      <div>
        {/* <img src="\public\logo\makerble1.png" alt="logo-1" className="h-8 " /> */}
        <div className="flex items-center justify-center">
          <h2 className="text-fuchsia-600">M</h2>
          <h2 className="font-bold text-purple-800">a</h2>
          <h2 className="text-sky-600">k</h2>
          <h2 className="font-bold text-green-800">e</h2>
          <h2 className="text-green-400">r</h2>
          <h2 className="font-bold text-orange-600">b</h2>
          <h2 className="text-rose-700">l</h2>
          <h2 className="font-bold text-red-600">e</h2>
        </div>

        <p>About us</p>
        <p>Terms & Conditions</p>
        <p>Privacy & Cookies</p>
      </div>
      <div className="">
        <h2 className="font-bold">ORGANISATIONS</h2>
        <p>Control Panel</p>
        <p>Discover the Marketplace</p>
        <p>Create Organisation Account</p>
      </div>
      <div>
        <h2 className="font-bold">YOUR ACCOUNT</h2>
        <p>Library</p>
        <p>Profile</p>
        <p>Projects</p>
        <p>Help</p>
      </div>
      <div>
        <h2 className="font-bold">EXPLORE</h2>
        <p>Metrics</p>
        <p>Networks</p>
        <p>Strategies</p>
        <p>Projects</p>
        <p>Studies</p>
        <p>Surveys</p>
        <p>Tips</p>
        <p>Vouchers</p>
      </div>
      <div>
        <h2 className="p-4 font-bold">FOLLOW THE MAKERBLE STORY</h2>
        <div className="flex justify-between p-4">
          <FaLinkedin />
          <FaYoutube />
          <FaTwitter />
          <FaInstagram />
        </div>
        <p className="p-4">Contact us:</p>
        <p className="flex justify-start items-center p-1">
          <FaMailBulk className="p-0" />
          contact@makerble.com
        </p>
        <p className="flex items-center">
          <FaPhone className="p-1" />
          02081236253
        </p>
      </div>
    </div>
  );
};

export default Footer;
