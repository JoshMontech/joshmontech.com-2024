const tileClasses = 'p-2 flex gap-2 border border-blue-light items-center justify-center rounded-full mt-1 shrink-0'
  const tileTitleClasses = 'text-xs'

  import React from 'react'
import { ITool } from '../constants/tools'
  
  const ToolTag = ({tool}: {tool:ITool}) => {
    const ToolIcon = tool.icon;
    return (
    <div className={tileClasses} key={tool.name}>
        <div className={tileTitleClasses}>{tool.name}</div>
        <ToolIcon key={tool.name} {...tool.props} />
      </div>
    )
  }
  
  export default ToolTag