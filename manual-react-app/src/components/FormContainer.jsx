import React from 'react';
import FormComponent from './FormComponent';
import Child2 from './Child2';

function FormContainer() {
  return (
    <div style={{ maxWidth: 600, margin: '2rem auto' }}>
      <h1 style={{ textAlign: 'center', color: '#00d4ff' }}>Redux Form Example</h1>
      <FormComponent />
      <Child2 />
    </div>
  );
}

export default FormContainer;