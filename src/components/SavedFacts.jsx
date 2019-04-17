import React from 'react';
import PropTypes from 'prop-types';

// Material-UI components
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	listItem: {
		textAlign: 'left'
	}
};

function SavedFacts({ classes, facts = [] }) {
	return (
		<ExpansionPanel>
			<ExpansionPanelSummary>
				<Typography variant="h6" component="p">
					Saved facts
				</Typography>
			</ExpansionPanelSummary>
			<ul>
				{facts.map(fact => (
					<li className={classes.listItem}>
						<Typography component="p">{fact}</Typography>
					</li>
				))}
			</ul>
		</ExpansionPanel>
	);
}

SavedFacts.propTypes = {
	classes: PropTypes.object.isRequired,
	facts: PropTypes.arrayOf(PropTypes.string)
};

export default withStyles(styles)(SavedFacts);
