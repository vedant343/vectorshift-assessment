// nodeConfigs.js
// Configuration objects for all node types
// To add a new node, simply add a new config object here!

// ========================================
// EXISTING NODES (Original 4)
// ========================================

export const InputNodeConfig = {
  type: 'Input',
  style: {
    width: 200,
    height: 80,
    border: '1px solid black'
  },
  fields: [
    {
      name: 'currName',
      label: 'Name',
      fieldType: 'text',
      defaultValue: (id, data) => data?.inputName || id.replace('customInput-', 'input_')
    },
    {
      name: 'inputType',
      label: 'Type',
      fieldType: 'select',
      options: ['Text', 'File'],
      defaultValue: (id, data) => data?.inputType || 'Text'
    }
  ],
  handles: [
    {
      type: 'source',
      position: 'Right',
      id: 'value'
    }
  ]
};

export const OutputNodeConfig = {
  type: 'Output',
  style: {
    width: 200,
    height: 80,
    border: '1px solid black'
  },
  fields: [
    {
      name: 'currName',
      label: 'Name',
      fieldType: 'text',
      defaultValue: (id, data) => data?.outputName || id.replace('customOutput-', 'output_')
    },
    {
      name: 'outputType',
      label: 'Type',
      fieldType: 'select',
      options: ['Text', 'Image'],
      defaultValue: (id, data) => data?.outputType || 'Text'
    }
  ],
  handles: [
    {
      type: 'target',
      position: 'Left',
      id: 'value'
    }
  ]
};

export const LLMNodeConfig = {
  type: 'LLM',
  style: {
    width: 200,
    height: 80,
    border: '1px solid black'
  },
  content: 'This is a LLM.',
  fields: [],
  handles: [
    {
      type: 'target',
      position: 'Left',
      id: 'system',
      style: { top: `${100/3}%` }
    },
    {
      type: 'target',
      position: 'Left',
      id: 'prompt',
      style: { top: `${200/3}%` }
    },
    {
      type: 'source',
      position: 'Right',
      id: 'response'
    }
  ]
};

export const TextNodeConfig = {
  type: 'Text',
  style: {
    width: 200,
    height: 80,
    border: '1px solid black'
  },
  fields: [
    {
      name: 'currText',
      label: 'Text',
      fieldType: 'text',
      defaultValue: (id, data) => data?.text || '{{input}}'
    }
  ],
  handles: [
    {
      type: 'source',
      position: 'Right',
      id: 'output'
    }
  ]
};

// Filter Node - Demonstrates multiple field types
export const FilterNodeConfig = {
  type: 'Filter',
  style: {
    width: 200,
    height: 80,
    border: '1px solid black'
  },
  fields: [
    {
      name: 'filterField',
      label: 'Field',
      fieldType: 'text',
      defaultValue: 'status'
    },
    {
      name: 'filterCondition',
      label: 'Condition',
      fieldType: 'select',
      options: ['Equals', 'Contains', 'Greater Than', 'Less Than'],
      defaultValue: 'Equals'
    },
    {
      name: 'filterValue',
      label: 'Value',
      fieldType: 'text',
      defaultValue: ''
    }
  ],
  handles: [
    {
      type: 'target',
      position: 'Left',
      id: 'input'
    },
    {
      type: 'source',
      position: 'Right',
      id: 'output'
    }
  ]
};

// 2. Transform Node - Demonstrates simple select configuration
export const TransformNodeConfig = {
  type: 'Transform',
  style: {
    width: 200,
    height: 80,
    border: '1px solid black'
  },
  fields: [
    {
      name: 'transformType',
      label: 'Transform',
      fieldType: 'select',
      options: ['Uppercase', 'Lowercase', 'Trim', 'Reverse', 'JSON Parse'],
      defaultValue: 'Uppercase'
    }
  ],
  handles: [
    {
      type: 'target',
      position: 'Left',
      id: 'input'
    },
    {
      type: 'source',
      position: 'Right',
      id: 'output'
    }
  ]
};

// 3. API Node - Demonstrates URL input and method selection
export const APINodeConfig = {
  type: 'API',
  style: {
    width: 200,
    height: 80,
    border: '1px solid black'
  },
  fields: [
    {
      name: 'url',
      label: 'URL',
      fieldType: 'text',
      defaultValue: 'https://api.example.com'
    },
    {
      name: 'method',
      label: 'Method',
      fieldType: 'select',
      options: ['GET', 'POST', 'PUT', 'DELETE'],
      defaultValue: 'GET'
    }
  ],
  handles: [
    {
      type: 'target',
      position: 'Left',
      id: 'body'
    },
    {
      type: 'source',
      position: 'Right',
      id: 'response'
    }
  ]
};

// 4. Condition Node - Demonstrates multiple output handles
export const ConditionNodeConfig = {
  type: 'Condition',
  style: {
    width: 200,
    height: 80,
    border: '1px solid black'
  },
  fields: [
    {
      name: 'condition',
      label: 'If',
      fieldType: 'select',
      options: ['Is Empty', 'Is Not Empty', 'Equals', 'Not Equals'],
      defaultValue: 'Equals'
    },
    {
      name: 'compareValue',
      label: 'Value',
      fieldType: 'text',
      defaultValue: ''
    }
  ],
  handles: [
    {
      type: 'target',
      position: 'Left',
      id: 'input'
    },
    {
      type: 'source',
      position: 'Right',
      id: 'true',
      style: { top: '33%' }
    },
    {
      type: 'source',
      position: 'Right',
      id: 'false',
      style: { top: '66%' }
    }
  ]
};
