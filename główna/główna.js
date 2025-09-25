const navBar = document.getElementsByClassName("navigation");
const wypiekImg = document.getElementById("wypiekImg")
const napójImg = document.getElementById("napójImg")
const atmosferaImg = document.getElementById("atmosferaImg")

function openSidebar(){
    navBar[0].classList.add('show');
};

function closeSidebar(){
    navBar[0].classList.remove('show');
};


// let wypiekImages = ['/główna/images/wypiek1.png', '/główna/images/wypiek2.png', '/główna/images/wypiek3.png']
// let napójImages = ['/główna/images/napój1.png', '/główna/images/napój2.png', '/główna/images/napój3.png']
// let atmosferaImages = ['/główna/images/atmosfera1.png', '/główna/images/atmosfera2.png', '/główna/images/atmosferak3.png']


// function changeWypiekImg(){
//     let index = 0;
//      wypiekImg.src = wypiekImages[index];
//      index = (index + 1) % wypiekImages.length;
// }
// function changeNapójkImg(){
//     let index = 0;
//      napójImg.src = napójImg[index];
//      index = (index + 1) % napójImg.length;
// }
// function changeAtmosferakImg(){
//     let index = 0;
//      atmosferaImg.src = atmosferaImg[index];
//      index = (index + 1) % atmosferaImg.length;
// }

// window.onload = function(){
//     setInterval(changeWypiekImg, 5000)
//     setInterval(changeNapójkImg, 5000)
//     setInterval(changeAtmosferaImg, 5000)
// };