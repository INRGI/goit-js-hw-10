import Notiflix, { Notify } from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const selectBreedElement = document.querySelector('.breed-select');
const selectLoader = document.querySelector('.loader');
const selectCatInfo = document.querySelector('.cat-info');
const selectError = document.querySelector('.error');

selectLoader.classList.add('is-hidden');
selectError.classList.add('is-hidden');

selectBreedElement.addEventListener('change', createCatInfo);

function createCatInfo(event) {
    selectLoader.classList.replace('is-hidden');

    const breedId = event.currentTarget.value;

    fetchCatByBreed(breedId)
        .then()
        .catch(onError);
};

function addSelectors(data) {
    fetchBreeds(data)
        .then()
        .catch(onError);
};

function onError() {
    selectBreedElement.classList.remove('is-hidden');
    selectLoader.classList.replace('loader', 'is-hidden');

    Notify.failure('Oops! Something went wrong!');
};