"use client";

import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Label, Select, TextInput } from "flowbite-react";
import { FaHandPointRight } from "react-icons/fa";
const Enoll = () => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    date: "",
    pob: "",
    current: "",
    email: "",
    phone: "",
    education: "",
    university: "",
    courses: ""
  });

  const submitChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <section>
      <Navbar />
      <div className="container mx-auto  px-[2rem] pt-[7rem] mb-5">
        <div className="flex items-center justify-center flex-col bg-white  px-[2rem] py-[3rem]">
          <h1 className="text-3xl font-extrabold font-Regular">ENROLL FORM</h1>
          <form className="w-full " onSubmit={submitForm}>
            <div className="flex items-start justify-between gap-[2rem]  mt-5 mds:flex-col">
              <div className="w-full grid gap-4">
                <div className="grid gap-2">
                  <Label className="text-[14px] text-black uppercase">
                    Full Name (En) *
                  </Label>
                  <TextInput
                    type="text"
                    name="name"
                    onChange={submitChange}
                    placeholder="Full Name (En) *"
                    required
                    style={{ padding: "8px" }}
                  />
                </div>
                <div className="grid gap-2">
                  <Label className="text-[14px] uppercase">GENDER *</Label>
                  <Select
                    placeholder="Select Gender"
                    name="gender"
                    onChange={submitChange}
                    required
                    style={{ padding: "8px" }}
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label className="text-[14px] uppercase">
                    DATE OF BIRTH *
                  </Label>
                  <TextInput
                    type="date"
                    name="date"
                    onChange={submitChange}
                    placeholder="YYYY-MM-DD"
                    required
                    style={{ padding: "8px" }}
                  />
                </div>
                <div className="grid gap-2">
                  <Label className="text-[14px] uppercase">
                    PLACE OF BIRTH *
                  </Label>
                  <Select
                    placeholder="Select university"
                    required
                    style={{ padding: "8px" }}
                    name="university"
                    onChange={submitChange}
                  >
                    <option value={0} disabled>
                      Select place of birth
                    </option>
                    <option>Tboung Khmum</option>
                    <option>Takeo</option>
                    <option>Svay Rieng</option>
                    <option>Stung Treng</option>
                    <option>Sihanoukville</option>
                    <option>Siem Reap</option>
                    <option>Ratanakiriy</option>
                    <option>Pursat</option>
                    <option>Prey Veng</option>
                    <option>Preah Vihear</option>
                    <option>Phnom Penh</option>
                    <option>Pailin</option>
                    <option>Oddar Meanchey</option>
                    <option>Mondulkiri</option>
                    <option>Kratie</option>
                    <option>Kompot</option>
                    <option>Kompong Thom</option>
                    <option>Kompong Speu</option>
                    <option>Kompong Chhnang</option>
                    <option>Kompong Cham</option>
                    <option>Koh Kong</option>
                    <option>Kep</option>
                    <option>Kandal</option>
                    <option>Battambang</option>
                    <option>Banteay Meanchey</option>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label className="text-[14px] uppercase">
                    CURRENT ADDRESS *
                  </Label>
                  <Select
                    placeholder="Select current"
                    required
                    style={{ padding: "8px" }}
                    name="university"
                    onChange={submitChange}
                  >
                    <option value={0} disabled>
                      Select current address
                    </option>
                    <option>Tuol Kouk</option>
                    <option>Sen Sok</option>
                    <option>Russey Keo</option>
                    <option>Prek Pnov</option>
                    <option>Prampir Makara</option>
                    <option>Siem Reap</option>
                    <option>Pou Senchey</option>
                    <option>Mean Chey</option>
                    <option>Kamboul</option>
                    <option>Daun Penh</option>
                    <option>Dangkao</option>
                    <option>Chroy Changvar</option>
                    <option>Chbar Ampov</option>
                    <option>Chamkar Mon</option>
                    <option>Boeng Keng Kang</option>
                  </Select>
                </div>
              </div>
              <div className="w-full grid gap-4">
                <div className="grid gap-2">
                  <Label className="text-[14px] uppercase">Email *</Label>
                  <TextInput
                    type="email"
                    placeholder="email@gmail.com"
                    style={{ padding: "8px" }}
                    name="email"
                    onChange={submitChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Label className="text-[14px] uppercase">
                    Phone Number *
                  </Label>
                  <TextInput
                    type="number"
                    placeholder="+855 01234567"
                    required
                    style={{ padding: "8px" }}
                    name="phone"
                    onChange={submitChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Label className="text-[14px] uppercase">EDUCATION *</Label>
                  <Select
                    placeholder="Select Gender"
                    required
                    style={{ padding: "9px" }}
                    name="education"
                    onChange={submitChange}
                  >
                    <option>First</option>
                    <option>Second Year</option>
                    <option>Third Year</option>
                    <option>Graduated</option>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label className="text-[14px] uppercase">GENDER *</Label>
                  <Select
                    placeholder="Select university"
                    required
                    style={{ padding: "8px" }}
                    name="university"
                    onChange={submitChange}
                  >
                    <option value={0} disabled>
                      Select university
                    </option>
                    <option>ACLEDA Institute of Business</option>
                    <option>American University of Phnom Penh</option>
                    <option>Asia Euro University</option>
                    <option>Beltei International University</option>
                    <option>Build Bright University</option>
                    <option>Cambodia Academy of Digital Technology</option>
                    <option>Cambodian Mekong University</option>
                    <option>Cambodia University for Specialties</option>
                    <option>CamEd Business School</option>
                    <option>Chenla University</option>
                    <option>East Asia Management University</option>
                    <option>Economics and Finance Institute</option>
                    <option>Human Resources University</option>
                    <option>IIC University of Technology</option>
                    <option>Institute of Technology of Cambodia</option>
                    <option>International University</option>
                    <option>IT Academy STEP Cambodia</option>
                    <option>Khemarak University</option>
                    <option>
                      Limkokwing University of Creative Technology, Cambodia
                    </option>
                    <option>National Institute of Business</option>
                    <option>National Institute of Education</option>
                    <option>National Polytechnic Institute of Cambodia</option>
                    <option>National University of Management</option>
                    <option>Norton University</option>
                    <option>Panha Chiet University</option>
                    <option>Paññasastra University of Cambodia</option>
                    <option>Paragon International University</option>
                    <option>Phnom Penh International University</option>
                    <option>Preah Sihanouk Raja Buddhist University</option>
                    <option>Prek Leap National College of Agriculture</option>
                    <option>Royal Academy of Cambodia</option>
                    <option>Royal University of Agriculture</option>
                    <option>Royal University of Fine Arts</option>
                    <option>Royal University of Law and Economics</option>
                    <option>Royal University of Phnom Penh</option>
                    <option>Setec Institute</option>
                    <option>The University of Cambodia</option>
                    <option>University of Battambang</option>
                    <option>University of Management and Economics</option>
                    <option>University of Puthisastra</option>
                    <option>Vanda Institute</option>
                    <option>Western University Cambodia</option>
                    <option>Other</option>
                  </Select>
                </div>
              </div>
            </div>
            <div className="py-[2rem] mt-[2rem] border-t-2 border-slate-200">
              <div className="grid gap-2">
                <Label className="text-[14px] uppercase">COURSES *</Label>
                <Select
                  id=""
                  placeholder="COURSES"
                  required
                  className="w-max"
                  style={{ padding: "8px" }}
                  name="courses"
                  onChange={submitChange}
                >
                  <option value={0} disabled>
                    Select course
                  </option>
                  <option>Flutter Mobile Development</option>
                  <option>iOS Development</option>
                  <option>SQL & Data Modeling with PostgreSQL</option>
                  <option>Web Design</option>
                  <option>DevOps Engineering</option>
                  <option>C++ Programming</option>
                  <option>Docker</option>
                  <option>Data Analytics</option>
                  <option>Android Development</option>
                  <option>NEXT.js</option>
                  <option>Linux Administrator</option>
                  <option>Spring Framework</option>
                  <option>Blockchain Development</option>
                  <option>Java Programming</option>
                </Select>
                <p className=" flex place-items-center gap-2 text-[13px] text-red-600">
                  {" "}
                  <FaHandPointRight />
                  Please filter available courses to select the class..!
                </p>
              </div>
            </div>
            <div className="flex items-end justify-end gap-3 mds:grid mds:w-full mds:justify-normal mds:items-start">
              <button
                type="button"
                className="border-[1px] rounded-md font-Regular font-bold px-7 py-2 text-rose-600 border-rose-600 uppercase transition-all hover:bg-rose-600 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="border-[1px] rounded-md font-Regular font-bold px-7 py-2 text-rose-600 border-rose-600 uppercase transition-all hover:bg-rose-600 hover:text-white"
              >
                Enroll Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Enoll;
