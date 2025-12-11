import { BaseNode } from './baseNode';
import { APINodeConfig } from './nodeConfig';

export const FilterNode = (props) => {
  return <BaseNode {...props} config={APINodeConfig} />;
};