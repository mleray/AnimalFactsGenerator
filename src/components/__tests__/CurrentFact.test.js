import React from 'react';
import ReactDOM from 'react-dom';
import CurrentFact from '../CurrentFact';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < CurrentFact / > , div);
});