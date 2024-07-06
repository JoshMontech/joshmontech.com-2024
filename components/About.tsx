import React from 'react'
import { FaCode } from "react-icons/fa6";
import { FaChartLine, FaMapMarkerAlt } from "react-icons/fa";
import { MdWorkHistory  } from "react-icons/md";
import { Glow } from '@codaworks/react-glow';



const About = () => {
  const iconSize = 28
  const tileClasses = 'h-24 border-2 border-light-border bg-light-5 bg-opacity-30 flex flex-col justify-center items-center text-sm rounded gap-2'
  return (
    <div className="flex flex-col w-full gap-4 mb-12">
        <div className="text-4xl font-bold">Welcome, I&apos;m Josh! 👋</div>
        <div className={"font-light text-sm"}>As a remote Senior Front End Developer based in Austin, TX, I specialize in crafting efficient, user-friendly web applications using modern technologies like AWS, NextJS, and React. With over eight years of experience and a Computer Science degree from UT Austin, I&apos;ve led projects that significantly improved user experiences and business metrics. I&apos;m passionate about pushing the boundaries of web development and creating innovative solutions.</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Glow>
            <div className={`${tileClasses} glow:border-rarity-uncommon glow:text-rarity-uncommon`}><MdWorkHistory size={iconSize}/><span>8 Years XP</span></div>
            </Glow>
            <Glow>
            <div className={`${tileClasses} glow:border-rarity-rare glow:text-rarity-rare`}><FaCode size={iconSize}/><span>Modern Dev</span></div>
            </Glow>
            <Glow>
            <div className={`${tileClasses} glow:border-rarity-epic glow:text-rarity-epic`}><FaChartLine size={iconSize}/><span>Proven Value</span></div>
            </Glow>
            <Glow>
            <div className={`${tileClasses} glow:border-rarity-legendary glow:text-rarity-legendary`}><FaMapMarkerAlt size={iconSize}/><span>Remote First</span></div>
            </Glow>
        </div>
    </div>
  )
}

export default About