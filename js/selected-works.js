if (window.innerWidth > 1025) {

// Rotate the cards randomly
const projectItems = document.querySelectorAll("a.project-item")

projectItems.forEach(item => {
    const x = (Math.random() - 0.5) * 2 // Scale for visible rotation

    item.style.transform = `rotate(${x}deg)`
    // Store the random rotation for later restoration
    item.dataset.rotation = x;

    // Rotate to 0deg on hover
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'rotate(0deg)';
    });

    // Restore random rotation on mouseout
    item.addEventListener('mouseleave', () => {
        item.style.transform = `rotate(${item.dataset.rotation}deg)`;
    });
})
}
