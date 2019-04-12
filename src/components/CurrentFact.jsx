import React from 'react';
import PropTypes from 'prop-types';

// Material-UI components
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
	container: {
		marginTop: 20,
		marginBottom: 20,
		maxWidth: '80%',
		margin: 'auto'
	}
};

function CurrentFact({ classes, fact, saveFact }) {
	return (
		<div className={classes.container}>
			<Typography variant="h5" gutterBottom>
				Latest fact:
			</Typography>
			<Typography component="p" gutterBottom>
				{fact}
			</Typography>
			{fact && (
				<Button
					variant="contained"
					color="secondary"
					onClick={() => saveFact()}
				>
					Save fact
				</Button>
			)}
		</div>
	);
}

CurrentFact.propTypes = {
	classes: PropTypes.object.isRequired,
	fact: PropTypes.string,
	saveFact: PropTypes.func
};

export default withStyles(styles)(CurrentFact);
