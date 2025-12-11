import { BaseNode } from './baseNode';
import { APINodeConfig } from './nodeConfigs';

export const FilterNode = (props) => {
  return <BaseNode {...props} config={APINodeConfig} />;
};