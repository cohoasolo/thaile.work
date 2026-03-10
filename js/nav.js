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

// on content pages, when i scroll down, at a certain point (80px)
// add a class to make the nav toggle has white background
const bgToggle = function() {
    const pixels = window.pageYOffset

    if (pixels > 80) {
        toggleTag.classList.add("background")
    } else {
        toggleTag.classList.remove("background")
    }
}

bgToggle()

// check if nav is open when scroll
document.addEventListener("scroll", function() {
    if ((!navContainerTag.classList.contains("appear")) && (!navTag.classList.contains("open"))) {
        bgToggle()
    }
})

// when i click the toggle tag, toggle a class of appear on the nav container tag, and open on the nav tag
toggleTag.addEventListener("click", function (event) {
    // prevent the default action of the anchor tag (in jQuery this is default for a tag with href="#" )
    event.preventDefault()

    // to open, add class appear and open to the nav container and nav tag respectively
    // then change the toggle icon to close and remove background color
    // add delay for smooth animation of nav and nav container tag
    if ((!navContainerTag.classList.contains("appear")) && (!navTag.classList.contains("open"))) {
        
        navContainerTag.classList.add("appear")
        
        setTimeout (function() {
            navTag.classList.add("open")
        }, 100)
        
        toggleTag.innerHTML = '<img src="/assets/close.svg">'
        toggleTag.classList.remove("background")       

    } else {

        navTag.classList.remove("open")

        setTimeout (function() {
            navContainerTag.classList.remove("appear")
        }, 200)

        toggleTag.innerHTML = '<img src="/assets/hamburger.svg">'
        toggleTag.classList.add("background") 

    }
})


