let not_working_links = document.querySelectorAll('.nav__link--not-working');

not_working_links.forEach((not_working) => {
    not_working.addEventListener('click', (e) => {
        e.preventDefault();
        alert('This page will be coming soon');
    });
});
