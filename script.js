//Event Delegation

/**
 * It allows to add a SINGLE event listener to a parent element
 * that adds it to all of its present and future decendants that 
 * matches a selector.
 */

document.querySelector('#list').addEventListener('click', (event) => {
    const target = event.target;

    if(target.matches('li')) {
        console.log(target.innerText);
        target.style.backgroundColor = 'grey'
    }
})