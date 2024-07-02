import React from 'react'
import Section from './Section'
import SocialBadges from './SocialBadges'

const GetInTouch = () => {
  return (
    <Section>
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-bold">Get In Touch</div>
      <div className="h-0.5 rounded-full bg-blue-light"></div>
      <div className="font-light">Hope you enjoyed exploring my portfolio. Please feel free to contact me via any of my contact channels - chat on the <a href="tel:+19282558108" className="font-bold hover:text-blue-light">phone</a>, get a dialogue started via <a href="mailto:joshmontech@gmail.com" className="font-bold hover:text-blue-light">email</a>, or messaging on <a href="https://linkedin.com/joshmontech" className="font-bold hover:text-blue-light">LinkedIn</a></div>
      <SocialBadges />
    </div>
    </Section>
  )
}

export default GetInTouch