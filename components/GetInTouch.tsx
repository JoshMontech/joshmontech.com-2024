import React from 'react'
import Section from './Section'
import SocialBadges from './SocialBadges'
import EmailForm from './EmailForm'
const contactJosh = async () => {
  const response = await fetch('/api/send', {method:'POST'})
  // console.log(response)
}
const GetInTouch = () => {
  return (
    <Section>
    <div className="flex flex-col gap-4">
      <div className="text-2xl font-bold">Get In Touch</div>
      <div className="h-0.5 rounded-full bg-blue-light"></div>
      <div className="font-light">Hope you enjoyed exploring my portfolio. Please feel free to contact me below or via my contact info in my resume. Have a great day!</div>
      <SocialBadges />
      <EmailForm />
    </div>
    </Section>
  )
}

export default GetInTouch