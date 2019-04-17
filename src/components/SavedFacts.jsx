import React from 'react';
import PropTypes from 'prop-types';

// Material-UI components
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	listItem: {
		textAlign: 'left',
		justifyContent: 'space-between',
		borderTop: 'thin solid lightgrey'
	}
};

const SavedFacts = ({ classes, deleteFact, facts = [] }) => (
	<ExpansionPanel>
		<ExpansionPanelSummary>
			<Typography variant="h6" component="p">
				Saved facts
			</Typography>
		</ExpansionPanelSummary>
		<List>
			{facts.map((fact, index) => (
				<ListItem className={classes.listItem} key={`fact-${index}`}>
					<Typography component="p">{fact}</Typography>
					<Button onClick={() => deleteFact(index)}>Delete</Button>
				</ListItem>
			))}
		</List>
	</ExpansionPanel>
);

SavedFacts.propTypes = {
	classes: PropTypes.object.isRequired,
	deleteFact: PropTypes.func,
	facts: PropTypes.arrayOf(PropTypes.string)
};

export default withStyles(styles)(SavedFacts);
