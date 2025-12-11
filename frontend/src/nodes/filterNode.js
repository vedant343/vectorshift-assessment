import { BaseNode } from './baseNode';
import { InputNodeConfig } from './nodeConfigs';

export const FilterNode = (props) => {
  return <BaseNode {...props} config={InputNodeConfig} />;
};