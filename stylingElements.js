//Styling Elements

/**
 * 1. style property will apply inline styles
 * 2. We need to use camelCase for css properties
 * 3. Using style property we can change style of single element only, for multiple elements we need to loop 
 *    through each element and then change the style
 */
const heading = document.querySelector('#main-heading');
heading.style.color = "red"

console.log(heading)

///

const listItems = document.querySelectorAll('.list-item');

//Will not work
// listItems.style.fontSize = '5rem'

for(let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '5rem'
}