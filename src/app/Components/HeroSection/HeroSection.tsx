"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { downloadCv } from "@/Utils/DownloadCV";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                //Same substring at the start will only will be typed out once, init
                "Ezequiel",
                1000, // wait Is before replacinf "Mice" with "Hamster"
                "Fullstack Developer",
                1000,
                "Backend Developer",
                1000,
                "Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Full-Stack Developer with academic experience in web application
            development. I have worked on successful academic projects, leading
            teams and implementing innovative solutions. My focus is on
            continuous improvement and expanding my knowledge in new areas for
            both personal and professional development.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-50 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              <a href="#contact">Hire me</a>
            </button>
            <button onClick={downloadCv} className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500  via-purple-500 to-pink-500 hover:bg-slate-800 text-white borde mt-3 ">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="col-span-5 mt-4 lg:mt-0 flex justify-center items-center"
        >
          <div className="col-span-5 mt-4 lg:mt-0 flex justify-center items-center">
            <div className="rounded-full bg-gradient-to-tr from-[#181818] via-transparent to-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
              <Image
                src="/images/hero.jpg"
                alt="hero image"
                className="object-cover w-full h-full rounded-full"
                layout="fill"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
