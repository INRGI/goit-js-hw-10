import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const selectBreedElement = document.querySelector('.breed-select');
const selectLoader = document.querySelector('.loader');
const selectCatInfo = document.querySelector('.cat-info');
const selectError = document.querySelector('.error');

selectCatInfo.classList.add('is-hidden');
selectBreedElement.classList.add('is-hidden');
selectError.classList.add('is-hidden');

selectBreedElement.addEventListener('change', createCatInfo);
addSelectors();

function createCatInfo(event) {
    selectLoader.classList.remove('is-hidden');
    selectCatInfo.classList.add('is-hidden');
    const breedId = event.currentTarget.value;
    fetchCatByBreed(breedId)
        .then(data => {
            selectLoader.classList.replace('loader', 'is-hidden');
            selectBreedElement.classList.remove('is-hidden');

            const { url, breeds } = data[0];

            selectCatInfo.innerHTML = `<div class="box"><div class="cat-img"><img src="${url}" alt="${breeds[0].name}" height="420" width="327" /></div><div class="cat-text"><h1>${breeds[0].name}</h1><p>${breeds[0].description}</p><h2>Temperament:</h2> <p>${breeds[0].temperament}</p></div></div>`;
            selectLoader.classList.add('loader', 'is-hidden')
            selectCatInfo.classList.remove('is-hidden');
        })
        .catch(onError);
};

function addSelectors(data) {
    fetchBreeds(data)
        .then(data => {
            selectLoader.classList.replace('loader', 'is-hidden');
            let renderSelect = data.map(({ name, id }) => {
                return `<option value='${id}'>${name}</option>`
            });
            selectBreedElement.insertAdjacentHTML('beforeend', renderSelect.join(''));
            new SlimSelect({
                select: selectBreedElement,
            });
        })
        .catch(onError);
};

function onError() {
    selectBreedElement.classList.add('is-hidden');
    selectLoader.classList.add('loader', 'is-hidden');

    Notify.failure('Oops! Something went wrong!');
};