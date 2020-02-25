// Showing message on non-existing pages
let not_working_links = document.querySelectorAll('a[href="#"]');

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

// Disabling forms
let forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
});

// Modules toggle functionality
let modButtons = document.querySelectorAll('.module-input');
let modList = document.querySelectorAll('.module-info--list');
let notList;
let i;

for (i = 0; i < modButtons.length; i++) {
    let index = i+1;
    notList = document.querySelectorAll(`.module-info--item:nth-child(${i})`);
}

modButtons.forEach((modButton) => {

    modButton.addEventListener('click', (e) => {

        let modClass = document.querySelector(`.${modButton.value}`);

        modClass.classList.add('show-modules');

        console.log(modClass);

        // if(modButton.checked) {
        //     modList.classList.add('this-class');
        //     notList.classList.remove('this-class');
        // }
    });
});

// Authentication functionality