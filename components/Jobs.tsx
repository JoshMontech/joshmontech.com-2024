import React from 'react'
import Image from 'next/image'
import Section from './Section'
import { JOBS } from '@/constants/jobs'
import JobTools from './JobTools'
const Jobs = () => {
  return (
    <Section>
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-bold">Places I&apos;ve Worked</div>
      {JOBS.map(job => (
        <a key={job.name} className="mb-4" href={job.link}>
          <div className="mb-2 flex items-center gap-2"><Image height={32} width={32} src={job.iconPath} alt={job.name} /><span><span className="font-bold">{job.name}</span> - {job.role}</span></div>
          <div className="font-light text-sm mb-2">{job.blurb}</div>
          <JobTools job={job} />
        </a>
      ))}
    </div>
    </Section>
  )
}

export default Jobs