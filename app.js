/* Imports */
import { findAllBeanies, findZodiac } from './fetch-utils.js';
import { renderBeanies, renderZodiacOption } from './render.utils.js';
/* Get DOM Elements */
const beanieUL = document.getElementById('beanie-ul');
const searchForm = document.getElementById('search-form');
const button = document.getElementById('button');
const zodiacSelect = document.getElementById('zodiac-select');

/* State */
let beanieBabies = [];
let beanieZodiac = [];
/* Events */
window.addEventListener('load', async () => {
    // const beanies = await findAllBeanies();
    const zodiac = await findZodiac();
    beanieZodiac = zodiac;
    // console.log('string', zodiac);
    displayZodiacOptions(beanieZodiac);
});

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(searchForm);
    // console.log(formData);
    getAllBeanies(formData.get('zodiac'));
});

/* Display Functions */
async function getAllBeanies(astroSign) {
    //fetch all beanies
    const beanies = await findAllBeanies(astroSign);
    //set beanies to state
    beanieBabies = beanies;
    // const zodiac = await findZodiac();
    // console.log(zodiac);
    //display all beanies
    displayBeanies();
}
getAllBeanies();

function displayBeanies() {
    //reset display
    beanieUL.textContent = '';
    //loop through beanies array
    for (let beanie of beanieBabies) {
        const beanieLi = renderBeanies(beanie);
        beanieUL.append(beanieLi);
    }
    // for each beanie send to render function that creates li
    //append
}
function displayZodiacOptions(beanieZodiac) {
    console.log(beanieZodiac);
    for (const zodiac of beanieZodiac) {
        const zodiacOption = renderZodiacOption(zodiac);
        zodiacSelect.append(zodiacOption);
    }
}

// (don't forget to call any display functions you want to run on page load!)
