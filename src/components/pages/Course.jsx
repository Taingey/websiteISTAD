"use client";
import React from "react";
import Image from "next/image";
import Data from "../../assets/data/dataCourses.json";
import { IoLayers } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { MotionBottom, MotionLeft } from "../Motion";
export const CourseNavbar = () => {
  console.log(Data);
  return (
    <section>
      <Navbar />
      <div className="container mx-auto px-[2rem] pt-[7rem] mb-5">
        <MotionLeft>
          <h1 className="text-4xl font-Regular font-extrabold">Courses</h1>
        </MotionLeft>
        <div className="grid gap-7 grid-cols-2 mt-4 mds:grid-cols-1">
          {Data.map((course) => (
            <div
              key={course.id}
              className="bg-white p-5 rounded-xl transition-all  hover:scale-105"
            >
              <div className="flex items-start w-full gap-5 xxl:flex-col">
                <div className="flex items-center justify-center gap-3 w-full">
                  <div>
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={course.width}
                      height={course.height}
                      className="mds:w-[10rem] sms:w-full"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h5 className="text-[16px] font-bold tracking-tight pr-7 text-gray-900 ">
                      {course.title}
                    </h5>
                    <p className="bg-red-500  px-2 w-max text-sm text-white rounded-full">
                      {course.discount}
                    </p>
                    <p className="font-normal text-[13px] text-gray-700 dark:text-gray-400 line-clamp-2">
                      {course.infor}
                    </p>
                  </div>
                </div>
                <div className="grid gap-2 w-[40%] xxl:w-full xxl:flex xxl:items-center xxl:justify-between">
                  <div className="flex place-items-center gap-2">
                    <p className="text-blue-700">
                      <FaClock />
                    </p>
                    {course.hours} hours
                  </div>
                  <div className="flex place-items-center gap-2">
                    <p className="text-blue-700">
                      <IoLayers />
                    </p>
                    {course.Level}
                  </div>
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

export const CourseShow = () => {
  return (
    <section>
      <div className="container mx-auto px-[2rem] pt-[7rem] mb-5">
        <MotionLeft>
          <h1 className="text-4xl font-Regular font-extrabold">Courses</h1>
        </MotionLeft>
        <MotionBottom>
          <div className="grid gap-7 grid-cols-2 mt-4 mds:grid-cols-1">
            {Data.map((course) => (
              <div
                key={course.id}
                className="bg-white p-5 rounded-xl transition-all  hover:scale-105"
              >
                <div className="flex items-start w-full gap-5 xxl:flex-col">
                  <div className="flex items-center justify-center gap-3 w-full">
                    <div>
                      <Image
                        src={course.image}
                        alt={course.title}
                        width={course.width}
                        height={course.height}
                        className="mds:w-[10rem] sms:w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <h5 className="text-[16px] font-bold tracking-tight pr-7 text-gray-900 ">
                        {course.title}
                      </h5>
                      <p className="bg-red-500  px-2 w-max text-sm text-white rounded-full">
                        {course.discount}
                      </p>
                      <p className="font-normal text-[13px] text-gray-700 dark:text-gray-400 line-clamp-2">
                        {course.infor}
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-2 w-[40%] xxl:w-full xxl:flex xxl:items-center xxl:justify-between">
                    <div className="flex place-items-center gap-2">
                      <p className="text-blue-700">
                        <FaClock />
                      </p>
                      {course.hours} hours
                    </div>
                    <div className="flex place-items-center gap-2">
                      <p className="text-blue-700">
                        <IoLayers />
                      </p>
                      {course.Level}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MotionBottom>
      </div>
    </section>
  );
};
