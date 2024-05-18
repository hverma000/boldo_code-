let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}


//  =============  darkmod ============ 

let darkmod = document.querySelector('darkmoon');

darkmod.onclick = () => {
    if (darkmod.classList.contains('bx-moon')) {
        darkmod.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    }
    else {
        darkmod.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}