// Check if it's the user's first visit or if the loading page was shown before
if (!localStorage.getItem('visited')) {
    // Redirect to loading page if the user hasn't visited
    window.location.href = 'loading.html';
    localStorage.setItem('visited', 'true');
} else {
    // Otherwise, show the home page
    document.addEventListener("DOMContentLoaded", function() {
        // Show home page contents here if needed
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".top-bar-links");

    menuIcon.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});