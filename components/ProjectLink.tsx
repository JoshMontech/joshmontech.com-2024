import { ISource } from "@/constants/projects"
import { FaCodepen, FaGithub } from "react-icons/fa6"
const getImage = (imageType: ISource["type"]) => {
  switch (imageType) {
    case('codepen'): {
      return <FaCodepen />
    }
    case('github'): {
      return <FaGithub />
    }
    default: {
      return <></>;
    }
  }
}
const ProjectLink = ({source} : {source: ISource}) => {
  const SourceImage = getImage(source.type);
  return (
    <a href={source.link}>
      {SourceImage}
    </a>
  )
}

export default ProjectLink