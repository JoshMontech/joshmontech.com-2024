import React from 'react'
import Section from './Section'
import SocialBadges from './SocialBadges'

const GetInTouch = () => {
  return (
    <Section>
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-bold">Get In Touch</div>
      <div className="h-0.5 rounded-full bg-blue-light"></div>
      <div>Hope you enjoyed exploring my portfolio. Please feel free to contact me via any of my personal contact details under my profile picture!</div>
      <SocialBadges />
    </div>
    </Section>
  )
}

export default GetInTouch