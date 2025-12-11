import { BaseNode } from './baseNode';
import { ConditionNodeConfig } from './nodeConfigs';

export const ConditionNode = (props) => {
  return <BaseNode {...props} config={ConditionNodeConfig} />;
};