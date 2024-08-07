import React from 'react'
import Image from 'next/image'
import Section from './Section'
import { JOBS } from '@/constants/jobs'
import ToolTags from '@/components/ToolTags'
import { FaExternalLinkAlt } from "react-icons/fa";

const Jobs = () => {
  return (
    <Section>
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-bold">Places I&apos;ve Worked</div>
      <div className="h-0.5 rounded-full bg-blue-light"></div>
      {JOBS.map(job => (
        <a key={job.name} className="p-4 mb-4 last-of-type:mb-0 hover:border border-light-border hover:bg-light-5/30 transition-colors hover:p-[15px] rounded-md group" href={job.link}>
          <div className="flex justify-between items-center mb-2"><div className="flex items-center gap-2"><Image height={32} width={32} src={job.iconPath} alt={job.name} /><span><span className="font-bold">{job.name}</span> - {job.role}</span></div><div className=""><FaExternalLinkAlt className="text-light-2 mt-2 mr-2 group-hover:text-white transition-all group-hover:scale-110 group-hover:m-0" /></div></div>
          <div className="font-light text-sm mb-2">{job.blurb}</div>
          <ToolTags toolNames={job.toolNames} />
        </a>
      ))}
    </div>
    </Section>
  )
}

export default Jobs