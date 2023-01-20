/* Imports */
import { findAllBeanies, findZodiac } from './fetch-utils.js';
/* Get DOM Elements */
const beanieUL = document.getElementById('beanie-ul');
const searchForm = document.getElementById('search-form');
const button = document.getElementById('button');

/* State */
let beanieBabies = [];
let beanieZodiac = [];
/* Events */

/* Display Functions */
async function getAllBeanies() {
    //fetch all beanies
    const beanies = await findAllBeanies();
    //set beanies to state
    console.log(beanies);
    //display all beanies
}
getAllBeanies();
function displayBeanies() {
    //reset display
    //loop through beanies array
    // for each beanie send to render function that creates li
    //append
}

// (don't forget to call any display functions you want to run on page load!)
