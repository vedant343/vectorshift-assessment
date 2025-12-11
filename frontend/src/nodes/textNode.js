import { BaseNode } from './baseNode';
import { InputNodeConfig } from './nodeConfigs';

export const TextNode = (props) => {
  return <BaseNode {...props} config={InputNodeConfig} />;
};