import React from 'react';
import ReactDOM from 'react-dom';
import ChildComponent from './ChildComponent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ChildComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
