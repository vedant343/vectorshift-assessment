
import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, data, config }) => {
  // Initialize state for all fields defined in config
  const [fieldValues, setFieldValues] = useState(() => {
    const initialState = {};
    
    config.fields?.forEach(field => {
      // Support both function and direct value for defaultValue
      initialState[field.name] = typeof field.defaultValue === 'function'
        ? field.defaultValue(id, data)
        : field.defaultValue;
    });
    
    return initialState;
  });

  // Generic handler for all field changes
  const handleFieldChange = (fieldName, value) => {
    setFieldValues(prevValues => ({
      ...prevValues,
      [fieldName]: value
    }));
  };

  return (
    <div style={config.style || { width: 200, height: 80, border: '1px solid black' }}>
      <div>
        <span>{config.type}</span>
      </div>
      {config.fields && config.fields.length > 0 && (
        <div>
          {config.fields.map(field => (
            <label key={field.name}>
              {field.label}:
              
              {/* Text Input */}
              {field.fieldType === 'text' && (
                <input
                  type="text"
                  value={fieldValues[field.name] || ''}
                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                />
              )}
              
              {/* Select Dropdown */}
              {field.fieldType === 'select' && (
                <select
                  value={fieldValues[field.name] || field.options[0]}
                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                >
                  {field.options.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
              
              {/* Textarea */}
              {field.fieldType === 'textarea' && (
                <textarea
                  value={fieldValues[field.name] || ''}
                  onChange={(e) => handleFieldChange(field.name, e.target.value)}
                  rows={3}
                />
              )}
            </label>
          ))}
        </div>
      )}

      {/* Dynamic Handles */}
      {config.handles?.map((handle, index) => (
        <Handle
          key={`${handle.type}-${handle.id}-${index}`}
          type={handle.type}
          position={Position[handle.position]}
          id={`${id}-${handle.id}`}
          style={handle.style || {}}
        />
      ))}
    </div>
  );
};