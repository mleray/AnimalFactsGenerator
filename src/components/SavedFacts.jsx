import React from 'react';
import PropTypes from 'prop-types';

// Material-UI components
import Typography from '@material-ui/core/Typography';

function SavedFacts({ facts }) {
	return facts.map(fact => <Typography component="p">{fact}</Typography>);
}

SavedFacts.propTypes = {
	facts: PropTypes.arrayOf(PropTypes.string)
};

export default SavedFacts;
