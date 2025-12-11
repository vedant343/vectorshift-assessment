import { BaseNode } from './baseNode';
import { LLMNodeConfig } from './nodeConfigs';

export const LLMNode = (props) => {
  return <BaseNode {...props} config={LLMNodeConfig} />;
};