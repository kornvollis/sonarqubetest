import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import expect from 'expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('test 2', () => {
  const div = document.createElement('div');
  expect(3).toBe(3);
});

