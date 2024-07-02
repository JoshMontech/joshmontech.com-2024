import { PropsWithChildren } from "react"

const Section = ({children}: PropsWithChildren) => {
  return (
    <div className="px-0 py-12">{children}</div>
  )
}

export default Section