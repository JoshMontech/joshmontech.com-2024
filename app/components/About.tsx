import React from 'react'
import { FaCode } from "react-icons/fa6";
import { FaChartLine, FaMapMarkerAlt } from "react-icons/fa";
import { MdWorkHistory  } from "react-icons/md";



const About = () => {
  const iconSize = 28
  const tileClasses = 'h-24 border border-blue-light flex flex-col justify-center items-center text-sm rounded gap-2'
  return (
    <div className="flex flex-col w-full gap-4">
        <div className="text-4xl">Hi, I&apos;m Josh. Welcome! 👋</div>
        <div className="font-light">As a remote Senior Front End Developer based in Austin, TX, I specialize in crafting efficient, user-friendly web applications using modern technologies like AWS, NextJS, and React. With over eight years of experience and a Computer Science degree from UT Austin, I&apos;ve led projects that significantly improved user experiences and business metrics. I&apos;m passionate about pushing the boundaries of web development and creating innovative solutions.</div>
        <div className="text-2xl">TL;DR:</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* 8 years of experience */}
            <div className={tileClasses}><MdWorkHistory size={iconSize}/><span>8 Years XP</span></div>
            <div className={tileClasses}><FaCode size={iconSize}/><span>Modern Dev</span></div>
            <div className={tileClasses}><FaChartLine size={iconSize}/><span>Proven Value</span></div>
            <div className={tileClasses}><FaMapMarkerAlt size={iconSize}/><span>Austin x Remote</span></div>


            {/* React, AWS, NextJS, Typescript, Tailwind */}
            {/* UX x Business Value */}
            {/* Austin - college/resident */}
        </div>
    </div>
  )
}

export default About