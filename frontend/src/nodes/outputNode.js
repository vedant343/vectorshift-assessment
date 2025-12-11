import { BaseNode } from './baseNode';
import { OutputNodeConfig } from './nodeConfigs';

export const OutputNode = (props) => {
  return <BaseNode {...props} config={OutputNodeConfig} />;
};