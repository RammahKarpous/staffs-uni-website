// Showing message on non-existing pages
let not_working_links = document.querySelectorAll('.nav__link--not-working');

not_working_links.forEach((not_working) => {
    not_working.addEventListener('click', (e) => {
        e.preventDefault();
        alert('This page will be coming soon');
    });
});

// Slider functionality


// Courses content toggle
let expandCollapseToggleButtons = document.querySelectorAll('.expand-collapse');

expandCollapseToggleButtons.forEach((button) =>  {
    button.addEventListener('click', (e) => {
        e.parentElement.classList.add("active");
    });
});

// Form validation
let