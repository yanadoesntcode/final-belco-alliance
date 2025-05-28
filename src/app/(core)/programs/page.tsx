

"use client"

import { useState } from "react";

import { NextPage } from "next";

import UniCards from "@/components/UniCards";

import SearchSelect from "@/components/SearchSelect";



interface Props {}



const countryOptions = [

  "Canada",

  "United States of America",

  "France",

  "Netherlands",

];



const universityOptions = [

  "Fontys University of Applied Sciences",

  "INSEEC School of Business and Economics",

  "Florida International University",


  "San Francisco State University",

  "University of Ottawa",


];



const programOptions = ["Exchange program", "BELCO Tripartite program (3D)"];



const allDeadlines = [

  {
    title: "INSEEC School of Business and Economics",
    country: "Luxury Marketing and Digital Marketing",
    city: "France",
    program: "Exchange program",
    image: "/programimage/pro1.png",
    href: "https://www.inseec.com/en/program/mba-luxury-brand-management/",
  },

  {
    title: "Fontys University of Applied Sciences",
    country: "Artificial Intelligence & Analytics",
    city: "Netherlands",
    program: "Exchange program",
    image: "/programimage/pro2.png",
    href: "https://www.fontys.nl/en/Study-at-Fontys/Exchange-programmes/Artificial-Intelligence-For-Society.htm",
  },

  {

    title: "Fontys University of Applied Sciences",

    country: "Develop Your Own Business",

    city: "Netherlands",

    program: "Exchange program",

    image: "/programimage/pro3.png",

    href: "https://www.fontys.nl/en/Study-at-Fontys/Exchange-programmes/Develop-Your-Own-Business-Programme.htm",

  },

  {

    title: "Fontys University of Applied Sciences",

    country: "Communication - Creative Advertising",

    city: "Netherlands",

    program: "Exchange program",

    image: "/programimage/pro4.png",

    href: "https://www.fontys.nl/en/Study-at-Fontys/Exchange-programmes/Communication-Creative-Advertising.htm",

  },

  {

    title: "University of Ottawa",

    country: "Introduction to Equity, Diversity & Inclusion",

    city: "Canada",

    program: "Exchange program",

    image: "/programimage/pro5.png",

    href: "https://www.uottawa.ca/research-innovation/equity-diversity-inclusion",

  },

  {

    title: "University of Ottawa",

    country: "Personal Leadership Development",

    city: "Canada",

    program: "Exchange program",

    image: "/programimage/pro6.png",

    href: "https://telfer.uottawa.ca/en/bcom/your-career-and-professional-development/personal-and-leadership-development/",

  },

  {

    title: "San Francisco State University",

    country: "International Business, Multicultural Relations",

    city: "United States of America",

    program: "BELCO Tripartite program (3D)",

    image: "/programimage/pro7.png",

    href: "https://bulletin.sfsu.edu/courses/ibus/",

  },

  {

    title: "Florida International University",

    country: "Project Management",

    city: "United States of America",

    program: "BELCO Tripartite program (3D)",

    image: "/programimage/pro8.png",

    href: "https://business.fiu.edu/academics/undergraduate/minors-and-certificates/minor-in-project-management/index.html",

  },

  {

    title: "Florida International University",

    country: "General Marketing",

    city: "United States of America",

    program: "Exchange program",

    image: "/programimage/pro9.png",

    href: "https://business.fiu.edu/academics/undergraduate/minors-and-certificates/minor-in-general-marketing/index.html",

  },

  {

    title: "Florida International University",

    country: "Business in Europe",

    city: "United States of America",

    program: "Exchange program",

    image: "/programimage/pro10.png",

    href: "https://business.fiu.edu/academics/global-initiatives/outbound-international-activities/study-abroad-programs/spring-2024/",

  },

  {

    title: "INSEEC School of Business and Economics",

    country: "Development & Business Engineering",

    city: "France",

    program: "Exchange program",

    image: "/programimage/pro11.png",

    href: "https://www.inseec.com/en/program/msc-business-development-and-commercial-engineering/",

  },

  {

    title: "INSEEC School of Business and Economics",

    country: "Financial, Banking & Insurance Manager",

    city: "France",

    program: "BELCO Tripartite program (3D)",

    image: "/programimage/pro12.png",

    href: "https://www.inseec.com/en/program/msc-banking-digitalization-financial-manager/",

  },

  {

    title: "INSEEC School of Business and Economics",

    country: "Wine and Spirits & Customer Experience",

    city: "France",

    program: "Exchange program",

    image: "/programimage/pro13.png",

    href: "https://www.inseec.com/en/program/mba-wine-marketing-and-management/",

  },

  {

    title: "INSEEC School of Business and Economics",

    country: "Corporate Strategy, Business Ethics",

    city: "France",

    program: "Exchange program",

    image: "/programimage/pro14.png",

    href: "",

  },

];



const Page: NextPage<Props> = () => {

  const [selectedCountry, setSelectedCountry] = useState("");

  const [selectedUniversity, setSelectedUniversity] = useState("");

  const [selectedProgram, setSelectedProgram] = useState("");



  const filtered = allDeadlines.filter((d) => {

    return (

      (selectedCountry === "" || d.city === selectedCountry) &&

      (selectedUniversity === "" || d.title === selectedUniversity) &&

      (selectedProgram === "" || d.program === selectedProgram)

    );

  });



  return (

    <div>

        <div className="justify-center flex flex-wrap bg-purple w-full rounded-tl-4xl rounded-br-4xl p-6 sm:p-7 mt-8 gap-4 mb-7">

        <SearchSelect

          label="Country"

          name="city"

          options={countryOptions}

          onChange={(e) => setSelectedCountry(e.target.value)}

        />

        <SearchSelect

          label="University"

          name="university"

          options={universityOptions}

          onChange={(e) => setSelectedUniversity(e.target.value)}

        />

        <SearchSelect

          label="Program"

          name="program"

          options={programOptions}

          onChange={(e) => setSelectedProgram(e.target.value)}

        />

      </div>

      <img     className="absolute top-0 left-0 w-[150%] max-w-none sm:w-full sm:max-w-full z-[-10]" src="/backgroundprograms.svg" alt="" />

      <h2 className="text-center text-3xl sm:text-3xl font-bold text-[#7A7AFF] mt-[5rem] mb-1">

        Exchange Modules

      </h2>



      <div className="flex flex-wrap justify-center sm:ml-2 sm:gap-8 mt-[3rem]">

        {filtered.map((uni, idx) => (

          <UniCards

            key={idx}

            country={uni.city}

            university={uni.title}

            city={uni.country}

            image={uni.image}

            href={uni.href}

          />

        ))}

      </div>

    </div>

  );

};



export default Page;

