// Set --pageMargin variable from .page_container {margin-left} only if 1025px < screen width <= 1300px or screen width >= 2080px , in order to position projects' .cover-image
let pageMargin = 0;
document.addEventListener('DOMContentLoaded', function() {
    setInterval(() =>{
        if ((window.innerWidth > 1025 && window.innerWidth <= 1300 ) || (window.innerWidth >= 2080)) {
            const pageContainer = document.querySelector('.page_container');
            if (pageContainer) {
                const marginLeft = getComputedStyle(pageContainer).marginLeft;
                pageContainer.style.setProperty('--pageMargin', marginLeft);
            }
        }
    },200)
});