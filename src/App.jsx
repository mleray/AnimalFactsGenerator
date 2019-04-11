import React, { useState, useEffect } from 'react';

// Material-UI components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Components
import AnimalCard from './components/AnimalCard';
import CurrentFact from './components/CurrentFact';

// Constants
import ANIMALS from './constants/animals';

// API
import { getAnimalFact } from './api/requests';

function App() {
    const [currentFact, setCurrentFact] = useState('');
    const [disabled, setDisabled] = useState(false);

    const getFact = (animal) => {
        setDisabled(true);
        getAnimalFact(animal).then((response) => {
            setCurrentFact(response.fact);
            setDisabled(false);
        });
    }

    return (
        <div style={{ textAlign: 'center', padding: 50 }}>
            <Typography variant='h4' gutterBottom>
                Random animal fact generator
            </Typography>
            <Grid container justify='center' spacing={24}>
                {Object.keys(ANIMALS).map(animal => (
                    <Grid key={animal} item>
                        <AnimalCard
                            animal={ANIMALS[animal].name}
                            disabled={disabled}
                            getFact={getFact}
                            image={ANIMALS[animal].image}
                        />
                    </Grid>
                ))}
            </Grid>
            {currentFact && <CurrentFact fact={currentFact} />}
        </div>
    );
}

export default App;