import { BaseNode } from './baseNode';
import { InputNodeConfig } from './nodeConfigs';

export const InputNode = (props) => {
  return <BaseNode {...props} config={InputNodeConfig} />;
};