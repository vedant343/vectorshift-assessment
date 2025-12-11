import { BaseNode } from './baseNode';
import { FilterNodeConfig } from './nodeConfig';

export const FilterNode = (props) => {
  return <BaseNode {...props} config={FilterNodeConfig} />;
};