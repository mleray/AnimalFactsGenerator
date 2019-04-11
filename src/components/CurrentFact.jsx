import React from 'react';
import PropTypes from 'prop-types';

// Material-UI components
import Typography from '@material-ui/core/Typography';

function CurrentFact({ fact }) {
    return (
        <Typography component='p'>
            {fact}
        </Typography>
    );
}

CurrentFact.propTypes = {
    fact: PropTypes.string
};

export default CurrentFact;