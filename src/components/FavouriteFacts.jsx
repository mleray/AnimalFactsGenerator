import React from 'react';
import PropTypes from 'prop-types';

function FavouriteFacts({ facts }) {
    return facts.map(fact => <p>{fact}</p>);
}

FavouriteFacts.propTypes = {
    facts: PropTypes.arrayOf(PropTypes.string)
};

export default FavouriteFacts;