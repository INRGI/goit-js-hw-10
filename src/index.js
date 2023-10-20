import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const selectBreedElement = document.querySelector('.breed-select');
const selectLoader = document.querySelector('.loader');
const selectCatInfo = document.querySelector('.cat-info');
const selectError = document.querySelector('.error');

selectCatInfo.classList.add('is-hidden');

selectBreedElement.addEventListener('change', createCatInfo);
addSelectors()

function createCatInfo(event) {
    selectLoader.classList.replace('is-hidden');
    selectCatInfo.classList.add('is-hidden');
    selectBreedElement.add('is-hidden');

    const breedId = event.currentTarget.value;

    fetchCatByBreed(breedId)
        .then(data => {
            selectLoader.classList.replace('loader', 'is-hidden');
            selectBreedElement.classList.remove('is-hidden');

            const { url, breeds } = data[0];

            selectCatInfo.innerHTML = `<img src="${url}" alt="${breeds[0].name}" width="400"/><div class="box"><h2>${breeds[0].name}</h2><p>${breeds[0].description}</p><p><strong>Temperament:</strong> ${breeds[0].temperament}</p></div>`;

            selectCatInfo.classList.remove('is-hidden')
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
            selectBreedElement.insertAdjacentElement('beforeend', renderSelect);
            new SlimSelect({
                select: selectBreedElement,
            });
        })
        .catch(onError);
};

function onError() {
    selectBreedElement.classList.remove('is-hidden');
    selectLoader.classList.replace('loader', 'is-hidden');

    Notify.failure('Oops! Something went wrong!');
};

