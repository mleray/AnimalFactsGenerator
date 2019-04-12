import React from 'react';
import ReactDOM from 'react-dom';
import AnimalCard from '../AnimalCard';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < AnimalCard / > , div);
});