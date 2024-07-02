import React from 'react'
import Section from './Section'
import { PROJECTS } from '@/constants/projects'
import ToolTags from './ToolTags'
import ProjectLink from './ProjectLink'
const FeaturedProjects = () => {
  return (
    <Section>
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold">Featured Projects</div>
        <div className="h-0.5 rounded-full bg-blue-light"></div>
          {PROJECTS.map(project => (
          <div key={project.name}>
            <div className="font-bold flex items-center gap-2"><a className="hover:text-blue-light" href={project.link}>{project.name}</a><ProjectLink source={project.source} /></div>
            <div className="font-light text-sm">{project.blurb}</div>
            <ToolTags toolNames={project.toolNames} />
          </div>
        ))}
      </div>
    </Section>
  )
}

export default FeaturedProjects