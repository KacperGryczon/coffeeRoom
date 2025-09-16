const navBar = document.getElementsByClassName("navigation");

function openSidebar(){
    navBar[0].classList.add('show');
};

function closeSidebar(){
    navBar[0].classList.remove('show');
};