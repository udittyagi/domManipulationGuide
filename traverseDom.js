//Traverse DOM

//Parent Node Traversal
/**
 * Nodes can be HTML Elements, documents, line breaks, text, comments
 * Elements are only HTML Elements
 */
const ul = document.querySelector('ul');

// console.log('Grand Parent Node', ul.parentNode.parentNode) //body
// console.log('Grand Parent Element', ul.parentElement.parentElement) //body

// const html = document.documentElement //It gives us HTML element
// console.log(html.parentNode); //#document
// console.log(html.parentElement); //null --> Bcoz no HTML element is above the html tag


//Child Node Traversal

console.log(ul.childNodes) //All the nodes
console.log(ul.firstChild); //First ChildNode
console.log(ul.lastChild); //Last ChildNode

/**
 * Beware of using styling or other properties on nodes
 */
// ul.firstChild.style.background = "red" ==> This might give error of node is not an element

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);


//Sibling Node Traversal
console.log(ul.previousSibling);//Previous Sibling Node
console.log(ul.nextSibling); //Next Sibling Node

console.log(ul.previousElementSibling)//Previous Element Sibling
console.log(ul.nextElementSibling);// Next Element Sibling
