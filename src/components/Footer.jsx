"use client";
import React from "react";
import Image from "next/image";

import { FacebookProvider, Page } from "react-facebook";
import { FaTelegram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <section>
      <div className="bg-primarybg overflow-hidden">
        <footer className="container mx-auto grid gap-[2rem] text-white grid-cols-4 px-[2rem] py-[2rem] mds:grid-cols-2 sms:mds:grid-cols-1">
          <div className="flex flex-col gap-3">
            <Image
              src="/images/LogoCSTAD.jpg"
              alt="Logo"
              width={100}
              height={100}
            />
            <p className="text-white font-Regular tracking-wider">
              Start your IT career with CSTAD
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold">LEARN MORE</h1>
            <div>
              <p>Course</p>
              <p>IT News</p>
              <p>Job Opportunity</p>
              <p>Privacy Polisy</p>
              <p>FAQ</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="font-bold">CONTACT US</h1>
            <address className="grid">
              <a href="tel:++855 95990910">(+855) 95-990-910</a>
              <a href="tel:++855 93990910">(+855) 93-990-910</a>
            </address>
            <div className="flex gap-2 items-center">
              <p className="flex gap-2 place-items-center">
                <FaTelegram />
                Telegram
              </p>
              <p className="flex gap-2 place-items-center">
                <FaYoutube />
                Youtube
              </p>
            </div>
          </div>
          <div className="grid gap-3">
            <h1 className="font-bold">FOLLOW US</h1>
            <div>
              <iframe
                src="https://web.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fistad.co%3Fref%3Dem"
                height="140"
                width="240"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameborder="0"
                allowTransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>
        </footer>
        <div className="container mx-auto text-center text-white py-5 border-t-2 border-slate-400 mds:text-[14px]">
          <p>
            © 2024 Center of Science and Technology Advanced Development | All
            Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
