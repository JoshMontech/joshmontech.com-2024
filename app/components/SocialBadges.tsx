import { FaGithub, FaEnvelope, FaPhone } from "react-icons/fa6"
const iconDimension = 20;
const SocialBadges = () => {
  return (
    <div className="flex gap-4 mt-1 items-center">
        <a href="https://github.com/JoshMontech"><FaGithub size={iconDimension} className="fill-white hover:fill-blue-light" /></a>
        <a href="mailto:joshmontech@gmail.com"><FaEnvelope size={iconDimension} className="fill-white hover:fill-blue-light" /></a>
        <a href="tel:+19282558108"><FaPhone size={iconDimension - 3} className="fill-white hover:fill-blue-light" /></a>
    </div>
  )
}

export default SocialBadges