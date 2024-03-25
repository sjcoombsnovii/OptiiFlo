// FAQ Accordian

document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');

    faqContainer.addEventListener('click', (e) => { 
        const groupHeader = e.target.closest('.faq-group-header');

        if (!groupHeader) return;
        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        //toggle icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        //toggle visibility of menu
        groupBody.classList.toggle('open');

        //making sure only one is open at a time
        const otherGroups = faqContainer.querySelectorAll('.faq-group');

        otherGroups.forEach((otherGroup) => {
            if(otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');

                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });
    });
});

//Mobile Menu

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'));
});