// Function to scroll smoothly to a section when a nav link is clicked
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    });
}

// Event listeners for smooth scrolling
document.getElementById('navAbout').addEventListener('click', () => {
    smoothScroll('about');
});

document.getElementById('navProjects').addEventListener('click', () => {
    smoothScroll('projects');
});

document.getElementById('navContact').addEventListener('click', () => {
    smoothScroll('contact');
});
