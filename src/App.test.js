import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Tests

it('renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
