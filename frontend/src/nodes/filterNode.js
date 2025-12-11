import { BaseNode } from './baseNode';
import { FilterNodeConfig } from './nodeConfigs';

export const FilterNode = (props) => {
  return <BaseNode {...props} config={FilterNodeConfig} />;
};