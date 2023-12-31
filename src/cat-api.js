// const BASIC_URL = 'https://api.thecatapi.com/v1';
// const API_KEY = 'live_16iRJIIL5P7x93BsQ6MezRPY1rNOI8N0Li1X9dy72xzZAucLkGS3P6ddgec2Lr3C';

// export function fetchBreeds() {
//     return fetch(`${BASIC_URL}/breeds?api_key=${API_KEY}`).then(
//         response => {
//             if (!response.ok) {
//                 throw new Erorr(response.statusText);
//             }

//             return response.json();
//         }
//     )
// }
// export function fetchCatByBreed(breedId) {
//     return fetch(`${BASIC_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`).then(
//         response => {
//             if (!response.ok) {
//                 throw new Error(response.statusText);
//             }
//             return response.json();
//         }
//     )
// }

import axios from 'axios';

const BASIC_URL = 'https://api.thecatapi.com/v1';
const API_KEY = 'live_16iRJIIL5P7x93BsQ6MezRPY1rNOI8N0Li1X9dy72xzZAucLkGS3P6ddgec2Lr3C';

export function fetchBreeds() {
    return axios.get(`${BASIC_URL}/breeds`, {
        params: {
            api_key: API_KEY
        }
    })
    .then(response => {
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data;
    })
    .catch(error => {
        throw error;
    });
}

export function fetchCatByBreed(breedId) {
    return axios.get(`${BASIC_URL}/images/search`, {
        params: {
            api_key: API_KEY,
            breed_ids: breedId
        }
    })
    .then(response => {
        if (response.status !== 200) {
            throw new Error(response.statusText);
        }
        return response.data;
    })
    .catch(error => {
        throw error;
    });
}
