const btn2 = document.querySelector('#btn-2');

const alertBtn = function() {
    alert("I Love JS TOO!!");
}

btn2.addEventListener('click', alertBtn)

//mouseover
const eventContainer = document.querySelector('#event');

// const changeBgColor = function() {
//     eventContainer.style.backgroundColor = "blue"
// }

// eventContainer.addEventListener('mouseover', changeBgColor);

const changeBgColor = function() {
    if(eventContainer.classList.contains('color-blue')) {
        eventContainer.classList.remove('color-blue')
    } else {
        eventContainer.classList.add('color-blue')
    }
}

eventContainer.addEventListener('click', changeBgColor)
