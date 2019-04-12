import React from 'react';
import PropTypes from 'prop-types';

// Material-UI imports
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// Helpers
import StringsHelper from '../helpers/strings';

const styles = {
	root: {
		justifyContent: 'center'
	}
};

function AnimalCard({
	animal = '',
	classes,
	disabled = false,
	getFact,
	image = ''
}) {
	return (
		<Card>
			<CardMedia component="img" image={image} />
			<CardContent>
				<Typography gutterBottom variant="h5">
					{StringsHelper.capitalise(animal)}
				</Typography>
			</CardContent>
			<CardActions classes={classes}>
				<Button
					color="primary"
					disabled={disabled}
					onClick={() => getFact(animal)}
					size="small"
					variant="contained"
				>
					Get fact
				</Button>
			</CardActions>
		</Card>
	);
}

AnimalCard.propTypes = {
	animal: PropTypes.string,
	classes: PropTypes.object.isRequired,
	disabled: PropTypes.bool,
	getFact: PropTypes.func,
	image: PropTypes.string
};

export default withStyles(styles)(AnimalCard);
