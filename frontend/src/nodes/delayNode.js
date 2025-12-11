import { BaseNode } from './baseNode';
import { InputNodeConfig } from './nodeConfigs';

export const DelayNode = (props) => {
  return <BaseNode {...props} config={InputNodeConfig} />;
};