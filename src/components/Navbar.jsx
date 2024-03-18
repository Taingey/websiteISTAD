"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const navigationBar = () => {
    setOpenNavbar(!openNavbar);
  };

  return (
    <div>
      <section className="fixed top-0 bg-primarybg w-full py-4 z-50">
        <div className="container mx-auto flex items-center px-3 justify-between sms:px-4 mds:block">
          <div className="flex place-items-center mds:justify-between gap-2 mds:w-full">
            <label className="burger" htmlFor="burger">
              <input
                type="checkbox"
                id="burger"
                checked={openNavbar}
                onChange={navigationBar}
              />
              <span></span>
              <span></span>
              <span></span>
            </label>

            <Link href="" className="flex items-center gap-2">
              <Image
                src="/images/LogoCSTAD.jpg"
                alt="Logo"
                width={50}
                height={50}
                priority
              />
              <h1 className="font-bold text-slate-50 text-2xl tracking-widest">
                CSTAD
              </h1>
            </Link>
          </div>
          <nav
            className={`navbar ${
              !openNavbar ? "hidden " : "block"
            } mds:block transition-all duration-300 ease-in-out`}
          >
            <ul className="flex gap-4 text-slate-50 font-semibold text-lg font-Regular mds:grid mds:pt-7 mds:gap-4">
              <Link href="/">
                <li className="tracking-widest">Home</li>
              </Link>
              <Link href="/enroll">
                <li className="tracking-widest">Enroll</li>
              </Link>
              <Link href="/course">
                <li className="tracking-widest">Course</li>
              </Link>
              <Link href="/itnews">
                <li className="tracking-widest">IT News</li>
              </Link>
              <Link href="/jobopportunities">
                <li className="tracking-widest">Job Opportunity</li>
              </Link>
              <Link href="/about">
                <li className="tracking-widest">About Us</li>
              </Link>
            </ul>
          </nav>
          <nav className="mds:hidden">
            <ul className="flex gap-5 text-slate-50 font-semibold text-lg font-Regular mds:grid mds:pt-7 mds:gap-4">
              <Link href="/">
                <li className="tracking-widest">Home</li>
              </Link>
              <Link href="/enroll">
                <li className="tracking-widest">Enroll</li>
              </Link>
              <Link href="/course">
                <li className="tracking-widest">Course</li>
              </Link>
              <Link href="/itnews">
                <li className="tracking-widest">IT News</li>
              </Link>
              <Link href="/jobopportunities">
                <li className="tracking-widest">Job Opportunity</li>
              </Link>
              <Link href="/about">
                <li className="tracking-widest">About Us</li>
              </Link>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
