import { PropsWithChildren } from "react"

const Section = ({children}: PropsWithChildren) => {
  return (
    <div className="px-4 md:px-0">{children}</div>
  )
}

export default Section