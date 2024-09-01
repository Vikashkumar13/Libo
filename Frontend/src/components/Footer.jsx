import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";

function Footer() {
  return (
    <div>
      {/* <hr /> */}
      <footer className="footer footer-center p-8 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <div className="grid grid-flow-col gap-10">
          <a href='https://www.facebook.com/' target='_blank'><FaFacebook size={28} className='text-blue-600' /></a>
          <a href='https://www.instagram.com/' target='_blank'><FaInstagramSquare size={28} className='text-red-600' /></a>
          <a href='https://www.linkedin.com/in/vikash-kumar-b68646298/' target='_blank'><LuLinkedin size={28} className='text-blue-600' /></a>
        </div>
        <aside>
          <p>Copyright © 2024 - Libo all right reserved</p>
        </aside>
      </footer >
    </div >
  );
}

export default Footer;
