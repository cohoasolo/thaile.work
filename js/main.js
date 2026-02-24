// set current date & time
let time = document.getElementById('current-time');
let date = document.getElementById('current-date');

// specify the home timezone (IANA identifier)
const homeTimeZone = 'Asia/Ho_Chi_Minh'; // my current timezone

setInterval(() =>{
    let d = new Date(); // Current date and time in UTC internally
    // format using the desired timezone regardless of visitor's system
    date.innerHTML = d.toLocaleDateString(undefined, { timeZone: homeTimeZone });
    time.innerHTML = d.toLocaleTimeString(undefined, { timeZone: homeTimeZone });
},1000)



// jQuery hamburger nav
$('.nav-toggle').on('click', function() {

    $('.nav_container').toggleClass('appear')
    $('.nav').toggleClass('open')

    return false

})



// Set --pageMargin variable from .page_container {margin-left} only if screen width >= 2080px, in order to position projects' .cover-image
let pageMargin = 0;
document.addEventListener('DOMContentLoaded', function() {
    setInterval(() =>{
        if (window.innerWidth >= 2080) {
            const pageContainer = document.querySelector('.page_container');
            if (pageContainer) {
                const marginLeft = getComputedStyle(pageContainer).marginLeft;
                pageContainer.style.setProperty('--pageMargin', marginLeft);
            }
        }
    },200)
});

