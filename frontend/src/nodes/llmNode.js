import { BaseNode } from './baseNode';
import { InputNodeConfig } from './nodeConfigs';

export const LLMNode = (props) => {
  return <BaseNode {...props} config={InputNodeConfig} />;
};