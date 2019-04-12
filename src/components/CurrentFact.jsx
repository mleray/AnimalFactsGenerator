import React from 'react';
import PropTypes from 'prop-types';

// Material-UI components
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
	container: {
		marginTop: 20,
		maxWidth: '50%',
		margin: 'auto'
	}
};

function CurrentFact({ classes, fact }) {
	return (
		<div className={classes.container}>
			<Typography variant="h5" gutterBottom>
				Latest fact:
			</Typography>
			<Typography component="p" gutterBottom>
				{fact}
			</Typography>
			<Button variant="contained" color="secondary">
				Save fact
			</Button>
		</div>
	);
}

CurrentFact.propTypes = {
	classes: PropTypes.object.isRequired,
	fact: PropTypes.string
};

export default withStyles(styles)(CurrentFact);
