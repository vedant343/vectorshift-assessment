import { BaseNode } from './baseNode';
import { InputNodeConfig } from './nodeConfigs';

export const OutputNode = (props) => {
  return <BaseNode {...props} config={InputNodeConfig} />;
};