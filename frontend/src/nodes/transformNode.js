import { BaseNode } from './baseNode';
import { TransformNodeConfig } from './nodeConfigs';

export const TransformNode = (props) => {
  return <BaseNode {...props} config={TransformNodeConfig} />;
};