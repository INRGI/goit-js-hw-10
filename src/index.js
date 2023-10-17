import axios from "axios";
import Notiflix from 'notiflix';

axios.defaults.headers.common["x-api-key"] = "live_16iRJIIL5P7x93BsQ6MezRPY1rNOI8N0Li1X9dy72xzZAucLkGS3P6ddgec2Lr3C";


const selectBreedElement = document.querySelector('.breed-select');
const selectLoader = document.querySelector('.loader');
