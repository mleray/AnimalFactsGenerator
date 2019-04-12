import React from 'react';
import ReactDOM from 'react-dom';
import SavedFacts from '../SavedFacts';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render( < SavedFacts / > , div);
});