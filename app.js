let textTyped = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Mobile Developer"],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 900,
    loop: true
});
let menu = document.querySelector('.menu');
let menuIcon = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");
let menuCancel = document.querySelector(".menu-cancel");


console.log(navbar.children);
const arrList = Array.prototype.slice.call( navbar.children );
arrList.forEach(element => {
    element.addEventListener('click', () => {
    navbar.style.display = 'none';
    })
});

let isTrue = true;

function handleToggle(res) {
    res.children[0].style.display = 'none';
    navbar.style.display = 'flex';
    menuCancel.style.display = 'block';
}

function handleCancel(response) {
    response.children[0].style.display = 'none';
    navbar.style.display = 'none';
    menuIcon.style.display = 'block';
}
 
function myFunc() {
    window.location.href = './uni.html';
}

function myReactFunc() {
    window.location.href = './react-edu.html';
}


function myHtmlFunc() {
    window.location.href = './html-edu.html';
}

function myNodeFunc() {
    window.location.href = './node-edu.html';
}

function myDataFunc() {
    window.location.href = './data-edu.html';
}

function myAppFunc() {
    window.location.href = './app-edu.html';
}