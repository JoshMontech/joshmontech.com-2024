import Link from "next/link";
import { FaGithub, FaEnvelope, FaPhone, FaCodepen, FaLinkedin } from "react-icons/fa6"
import { FaFileAlt } from "react-icons/fa";
const iconDimension = 20;
const SocialBadges = () => {
  return (
    <div className="flex gap-2 mt-1 items-center">
        <a href="https://github.com/JoshMontech"><FaGithub size={iconDimension} className="fill-white hover:fill-blue-light" /></a>
        <a href="https://linkedin.com/in/joshmontech"><FaLinkedin size={iconDimension} className="fill-white hover:fill-blue-light" /></a>
        <a href="https://codepen.io/jmontech"><FaCodepen size={iconDimension} className="fill-white hover:fill-blue-light" /></a>
        <a href="mailto:joshmontech@gmail.com"><FaEnvelope size={iconDimension} className="fill-white hover:fill-blue-light" /></a>
        <a href="tel:+19282558108"><FaPhone size={iconDimension - 3} className="fill-white hover:fill-blue-light" /></a>
        <Link href="/resume.pdf" target="_blank">
          <FaFileAlt size={iconDimension} className="fill-white hover:fill-blue-light -ml-1" />
        </Link>
    </div>
  )
}

export default SocialBadges