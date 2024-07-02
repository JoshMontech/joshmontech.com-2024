import React from 'react'
import Section from './Section'
import { PROJECTS } from '@/constants/projects'
const FeaturedProjects = () => {
  return (
    <Section>
      <div className="">
        <div className="text-2xl font-bold">Featured Projects</div>
        <div className="flex flex-col gap-8 mt-4">
          {PROJECTS.map(project => (
          <div key={project.name}>
            <div className="font-bold">{project.name}</div>
            <div className="font-light text-sm">{project.blurb}</div>
          </div>
        ))}
        </div>
      </div>
    </Section>
  )
}

export default FeaturedProjects