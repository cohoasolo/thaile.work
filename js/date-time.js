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