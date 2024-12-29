import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="flex items-center justify-center gap-4 py-3 mt-20 my-2">
      <img src={assets.logo} alt="logo" width={150} />

      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright{" "}
        <a
          href="https://www.linkedin.com/in/chandrakant-umrekar-141bb932b/"
          className="font-medium"
        >
          @chandrakant.dev
        </a>
        | All rights are reserved.
      </p>

      <div className="flex gap-2.5">
        <img src={assets.facebook_icon} alt="facebook" width={35} />
        <img src={assets.twitter_icon} alt="twitter" width={35} />
        <img src={assets.instagram_icon} alt="instagram" width={35} />
      </div>
    </div>
  );
}

export default Footer;
