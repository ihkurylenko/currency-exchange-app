import * as React from 'react';

const useFormFields = (initialState, cb) => {
  const [state, setState] = React.useState(initialState);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState({
      ...state,
      [name]: value
    });
    if (cb) {
      cb(e);
    }
  };

  return [state, handleChange, setState];
};

export { useFormFields };
