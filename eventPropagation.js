//Event Propagation
/**
 * It happens in 3 steps
 *  1. Event Capturing (root to target) (Phase 1)
 *  2. Target (phase 2)
 *  3. Event Bubbling (target to root) (phase 3)
 * 
 * Third Parameter of addEventListener tells whether we want to trigger events in capturing phase or bubbling phase
 *  1. true :-> Trigger on Capturing phase
 *  2. false (default) :-> Trigger on bubbling phase
 * 
 * event.stopPropagaton will stop the capturing or bubbling of events
 * 
 * If we want to fire of any event handler once then we can give third parameter as an obeject and pass once:true
 */

// window.addEventListener('click', () => {
//     console.log('Window')
// }, true)

// document.addEventListener('click', () => {
//     console.log('document')
// }, true)

// document.querySelector('#main-container').addEventListener('click', (e) => {
//     e.stopPropagation()
//     console.log('Main Container')
// }, true)

// document.querySelector('#event').addEventListener('click', () => {
//     console.log('Event Container')
// }, true)

// document.querySelector('#btn-2').addEventListener('click', (e) => {
//     console.log(' Button 2', e)
// }, true)

window.addEventListener('click', () => {
    console.log('Window')
})

document.addEventListener('click', () => {
    console.log('document')
})

document.querySelector('#main-container').addEventListener('click', (e) => {
    // e.stopPropagation();
    console.log('Main container')
})

//This will fire only first time (only once)
document.querySelector('#event').addEventListener('click', () => {
    console.log('Event Container')
}, {once: true})

document.querySelector('#btn-2').addEventListener('click', (e) => {
    console.log(' Button 2', e)
})


//Prevent Default
/**
 * To prevent any degfault behaviour we can use event.preventDefault()
 * eg: When we click on anchor tag we get redirected to the href link, so to prevent it
 *  we will use preventDefault
 */
const googleLink = document.querySelector('#google');

googleLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Google is not reachable')
})