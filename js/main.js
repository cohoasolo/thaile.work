// set my current time
let time = document.getElementById('current-time');
let date = document.getElementById('current-date');

// specify the home timezone (IANA identifier)
const homeTimeZone = 'Asia/Ho_Chi_Minh'; // change as needed

setInterval(() =>{
    let d = new Date(); // Current date and time in UTC internally
    // format using the desired timezone regardless of visitor's system
    date.innerHTML = d.toLocaleDateString(undefined, { timeZone: homeTimeZone });
    time.innerHTML = d.toLocaleTimeString(undefined, { timeZone: homeTimeZone });
},1000)

// hamburger nav
$('.nav-toggle').on('click', function() {

    $('.nav_container').toggleClass('appear')
    $('.nav').toggleClass('open')

    return false

})