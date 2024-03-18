import React from "react";
import Image from "next/image";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { PiCodepenLogoFill } from "react-icons/pi";
import {
  FaEye,
  FaBullseye,
  FaCommentDots,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTelegram,
  FaFacebookSquare,
  FaEnvelope,
  FaGlobeAfrica,
  FaYoutube
} from "react-icons/fa";
const About = () => {
  return (
    <section>
      <Navbar />
      <div className="container mx-auto  px-[2rem] pt-[7rem] mb-5">
        <div className="flex items-center justify-center flex-col gap-5 bg-white py-7 px-6">
          <div className="grid gap-3 ">
            <h1 className="flex items-start place-items-center gap-2 text-lg  uppercase font-Regular tracking-wider">
              <PiCodepenLogoFill className="relative top-[2px] text-xl text-blue-500 mds:text-3xl" />
              <p className="mds:text-[15px]">
                WHAT IS CENTER OF SCIENCE AND TECHNOLOGY ADVANCED DEVELOPMENT?
              </p>
            </h1>
            <p>
              CSTAD is a noteworthy science and technology center in Cambodia.
              CSTAD has routed Cambodian students to advanced science and
              technology, research, and develop digital skills and our graduates
              have been guaranteed excellent job opportunities with the Top IT
              company. CSTAD will continue to provide high-quality training with
              the latest methodology, and roadmap as well as the best choice for
              those who want to be an IT expert in Cambodia.
            </p>
          </div>
          <Image
            src="/images/LogoCSTAD.jpg"
            width={300}
            height={300}
            alt="Logo"
            priority
          />
        </div>
        <div className="bg-white py-6 px-6 mt-5">
          <h1 className="flex place-items-center gap-2 text-lg uppercase font-Regular tracking-wider">
            <FaEye className="text-blue-900" />
            <p className="mds:text-[13px] tracking-widest font-bold font-Regular">
              Vision
            </p>
          </h1>
          <p className="mds:text-[13px]">Advanced IT Institute in Cambodia</p>
        </div>
        <div className="bg-white py-6 px-6 mt-5">
          <h1 className="flex place-items-center gap-2 text-lg uppercase font-Regular tracking-wider">
            <FaBullseye className="text-blue-900" />
            <p className="mds:text-[13px] tracking-widest font-bold font-Regular">
              MISSION
            </p>
          </h1>
          <ul className="mds:text-[13px] list-disc pl-7">
            <li>
              Provide the latest methodology with high quality training and
              mentoring
            </li>
            <li>Build up the capacity and career of IT experts Cambodia</li>
            <li>Consult and connect CSTAD trainees to top IT careers</li>
          </ul>
        </div>
        <div className="bg-white py-6 px-6 mt-5">
          <h1 className="flex place-items-center gap-2 text-lg uppercase font-Regular tracking-wider">
            <FaCommentDots className="text-blue-900" />
            <p className="mds:text-[13px] tracking-widest font-bold font-Regular">
              Slogan
            </p>
          </h1>
          <p className="mds:text-[13px]">Start your IT Career with CSTAD</p>
        </div>
        <div className="mt-8">
          <h1 className="text-center font-bold text-[20px] tracking-widest text-blue-700">
            IF YOU HAVE ANY QUESTIONS, PLEASE FEEL FREE TO CONTACT US.
          </h1>
          <div className=" grid gap-4 bg-white py-6 px-6 mt-1">
            <h1 className="flex place-items-center gap-2 font-Regular tracking-wider">
              <FaMapMarkerAlt className="text-blue-900" />
              <p className="tracking-widest font-Regular">
                No. 24, St. 562, Sangkat Boeung kak I, Khan Toul Kork, Phnom
                Penh, Cambodia
              </p>
            </h1>
            <h1 className="flex place-items-center gap-2 font-Regular tracking-wider">
              <FaPhoneAlt className="text-blue-900" />
              <p className="tracking-widest  font-Regular">
                (+855) 95 990 910 | (+855) 93 990 910
              </p>
            </h1>
            <h1 className="flex place-items-center gap-2 font-Regular tracking-wider">
              <FaTelegram className="text-blue-900" />
              <p className="tracking-widest font-Regular">
                Telegram Channel
              </p>
            </h1>
            <h1 className="flex place-items-center gap-2 font-Regular tracking-wider">
              <FaFacebookSquare className="text-blue-900" />
              <p className="tracking-widest font-Regular">
                Facebook
              </p>
            </h1>
            <h1 className="flex place-items-center gap-2 font-Regular tracking-wider">
              <FaEnvelope className="text-blue-900" />
              <p className="tracking-widest font-Regular">
                info.istad@gmail.com
              </p>
            </h1>
            <h1 className="flex place-items-center gap-2 font-Regular tracking-wider">
              <FaGlobeAfrica className="text-blue-900" />
              <p className=" tracking-widest font-Regular">
                www.istad.co
              </p>
            </h1>
            <h1 className="flex place-items-center gap-2 font-Regular tracking-wider">
              <FaYoutube className="text-blue-900" />
              <p className=" tracking-widest font-Regular">
                YouTube
              </p>
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
