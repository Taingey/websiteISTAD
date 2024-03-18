"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../Navbar";
import Data from "../../assets/data/contents.json";

// Icons
import { FaTag } from "react-icons/fa";
import Footer from "../Footer";
const ITNews = () => {
  return (
    <section>
      <Navbar />
      <div className="container mx-auto px-[2rem] pt-[7rem] mb-5">
        <h1 className="text-2xl font-Regular font-extrabold ">
        USEFUL CONTENTS
        </h1>
        <div className="grid grid-cols-4 gap-3 mt-5 mds:grid-cols-2 smd:grid-cols-1">
          {Data.map((e, id) => (
            <div key={id} className="rounded-2xl bg-white">
              <div className="font-Regular">
                <div>
                  <Image
                    src={e.image}
                    alt={e.title}
                    width={e.width}
                    height={e.height}
                    className="overflow-hidden rounded-2xl"
                  />
                </div>
                <div className="grid gap-3 px-5 py-5">
                  <div className="flex items-center justify-between text-[13px]">
                    <p className="flex gap-1 place-items-center">
                      <FaTag className="text-slate-500 text-[12px]" />
                      {e.blog}
                    </p>
                    <p>{e.date}</p>
                  </div>
                  <p className="line-clamp-2">{e.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ITNews;
