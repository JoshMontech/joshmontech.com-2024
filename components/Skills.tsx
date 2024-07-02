import React from 'react'
import Section from './Section'
import { TOOL_SECTIONS } from '../constants/tools';
import ToolTag from './ToolTag';


const Skills = () => {
  return (
    <Section>
        <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold">My Favorite Tools</div>
            <div className="font-light text-sm">My technical toolkit is centered around cutting-edge web technologies. I excel in building robust, scalable applications using React and Next.js, leveraging the power of TypeScript for type-safe code. With Tailwind CSS, I create sleek, responsive designs efficiently. My expertise extends to AWS services, enabling me to architect and deploy cloud-native solutions. From crafting dynamic user interfaces to implementing serverless backends, I bring a full-stack perspective to every project. These skills allow me to deliver high-performance, maintainable web applications that meet modern development standards and business needs.</div>
            {/* NextJS */}
            {TOOL_SECTIONS.map(section => (
              <div className="flex flex-col" key={section.name}>
                <div className="">{section.name}</div>
                <div className="flex gap-x-1 gap-y-0 flex-wrap" >
                  {section.tools.map(tool => <ToolTag tool={tool} key={tool.name} />)}
                </div>
              </div>
            ))}
        </div>
    </Section>
  )
}

export default Skills