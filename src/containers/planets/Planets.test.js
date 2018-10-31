import React from 'react';
import ReactDOM from 'react-dom';
import Planet from './Containers/Planet';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Planet />, div);
  ReactDOM.unmountComponentAtNode(div);
});
