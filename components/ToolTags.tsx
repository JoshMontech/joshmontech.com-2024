import React from 'react';
import { TOOL_SECTIONS, ITool } from '../constants/tools';
import ToolTag from './ToolTag';

interface ToolTagsProps {
  toolNames: string[]
}

const ToolTags: React.FC<ToolTagsProps> = ({ toolNames }) => {
  const findToolObject = (toolName: string): ITool | null => {
    for (const section of TOOL_SECTIONS) {
      const tool = section.tools.find(t => t.name === toolName);
      if (tool) return tool;
    }
    return null;
  };

  return (
    <div>
      <div className="flex gap-1 flex-wrap">
        {toolNames.map((toolName, index) => {
          const tool = findToolObject(toolName);
          return tool ? (
            <ToolTag tool={tool} key={tool.name} />
          ) : (
            <span key={index}>{toolName}</span>
          );
        })}
      </div>
    </div>
  );
};

export default ToolTags;