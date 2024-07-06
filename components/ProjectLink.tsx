import { ISource } from "@/constants/projects"
import { FaCodepen, FaGithub } from "react-icons/fa6"
import { FaLink } from "react-icons/fa";

const getImage = (imageType: ISource["type"]) => {
  switch (imageType) {
    case('codepen'): {
      return <FaCodepen className="hover:fill-blue-light" />
    }
    case('github'): {
      return <FaGithub className="hover:fill-blue-light" />
    }
    default: {
      return <FaLink className="hover:fill-blue-light" />;
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