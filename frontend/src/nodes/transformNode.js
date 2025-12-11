import { BaseNode } from './baseNode';
import { InputNodeConfig } from './nodeConfigs';

export const TransformNode = (props) => {
  return <BaseNode {...props} config={InputNodeConfig} />;
};