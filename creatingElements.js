//--------------Creating Elements---------------

const ul = document.querySelector('#list')
const listItem = document.createElement('li');

//Adding Elements
/**
 * We have 2 methods to append a child
 * 1. append ==> It can append string as well as HTML nodes
 * 2. appendChild ==> It can only append HTML Nodes
 */
ul.append(listItem)


//-------------Modifying the text------------------

/**
 * For text we have 3 methods
 * 1. innerText ==> Shows the text as it is visible in the web page
 * 2. textContent ==> Shows the text how it is laid in HTML file without HTML tags
 * 3. inerHTML ==> Shows the text how it is laid in HTML file with HTML tags
 * 
 * We Will not use innerHTML to set/modify text as it may be a security concern
 */

// const text = document.querySelector('#text-div')
// console.log(text.innerText)
// console.log(text.textContent)
// console.log(text.innerHTML)

listItem.innerText = "Item 4"


//---------------Modyfing classes and attributes---------------

listItem.setAttribute('id', 'list-item');
console.log(listItem.getAttribute('id'));//list-item
listItem.removeAttribute('id')
console.log(listItem.getAttribute('id')); //null

/**
 * To add/remove class we will use classList property only
 * Do not directly add classes
 */

listItem.classList.add('list-item');
console.log(listItem.classList.contains('list-item'))//true
// listItem.classList.remove('list-item')
// console.log(listItem.classList.contains('list-item'))//false


//-------Remove Element----------
listItem.remove()
