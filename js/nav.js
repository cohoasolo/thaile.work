// jQuery-version hamburger nav
// $('.nav-toggle').on('click', function() {

//     $('.nav_container').toggleClass('appear')
//     $('.nav').toggleClass('open')

//     return false

// })

// JSS-version hamburger nav
const toggleTag = document.querySelector("a.nav-toggle")
const navContainerTag = document.querySelector(".nav_container")
const navTag = document.querySelector("nav")

// when i click the toggle tag, toggle a class of appear on the nav container tag, and open on the nav tag
toggleTag.addEventListener("click", function (event) {
    // prevent the default action of the anchor tag (in jQuery this is default for a tag with href="#" )
    event.preventDefault()
    
    // toggle class
    navContainerTag.classList.toggle("appear")
    navTag.classList.toggle("open")

    // check if nav is open, change the toggle icon to close and remove background color
    if ((navContainerTag.classList.contains("appear")) && (navTag.classList.contains("open"))) {
            toggleTag.innerHTML = '<img src="/assets/close.svg">'
            toggleTag.classList.add("no-background")
    } else {
        toggleTag.innerHTML = '<img src="/assets/hamburger.svg">'
        toggleTag.classList.remove("no-background")
    }
})