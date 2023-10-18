const BASIC_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_16iRJIIL5P7x93BsQ6MezRPY1rNOI8N0Li1X9dy72xzZAucLkGS3P6ddgec2Lr3C';

export function fetchBreeds() {
    return fetch(`${BASIC_URL}/breeds?api_key=${API_KEY}`).then(
        (response) => {
            if (!response.ok) {
                throw new Erorr(response.statusText);
            }

            return response.json();
        }
    )
}