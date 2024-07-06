
  import React from 'react'
import { ITool } from '../constants/tools'
import { Glow } from '@codaworks/react-glow'
  
  const ToolTag = ({tool}: {tool:ITool}) => {
    const tileClasses = 'p-2 flex gap-2 bg-opacity-40 bg-light-5 border-[2px] border-light-border items-center justify-center rounded-full mt-1 shrink-0'
    const tileTitleClasses = 'text-xs'
    const ToolIcon = tool.icon;
    return (
    <Glow color={tool.color || 'white'}>
    <div className={`${tileClasses} glow-border`} key={tool.name}>
        <div className={`${tileTitleClasses} glow-text`}>{tool.name}</div>
        <ToolIcon className="glow-fill" key={tool.name} />
      </div>
      </Glow>
    )
  }
  
  export default ToolTag