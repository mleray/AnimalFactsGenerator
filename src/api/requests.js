// We need to add a proxy URL for CORS support
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const apiUrl = 'https://some-random-api.ml/facts';

function getAnimalFact(animal = 'cat') {
    try {
        return fetch(`${proxyUrl + apiUrl}/${animal}`)
            .then(response => response.json());
    } catch (error) {
        console.log(error);
    }
}

export {
    getAnimalFact
};