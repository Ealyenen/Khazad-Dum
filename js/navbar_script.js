window.addEventListener('DOMContentLoaded', () => {
    const dropMenu = document.querySelector('.dropdown_menu'),
        nav = document.querySelector('.nav_bar'),
        link = document.querySelectorAll('.nav_item'),
        span = document.querySelectorAll('.spans');

    dropMenu.addEventListener('click', () => {
        nav.classList.toggle('nav_bar_active');
        span.forEach(item => {
            item.classList.toggle('active_span');
        })
    });

    link.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('nav_bar_active');
            span.forEach(item => {
                item.classList.toggle('active_span');
            })
            nav.classList.remove('nav_bar_active');

        })
    })
})
