import { BaseNode } from './baseNode';
import { TextNodeConfig } from './nodeConfigs';

export const TextNode = (props) => {
  return <BaseNode {...props} config={TextNodeConfig} />;
};