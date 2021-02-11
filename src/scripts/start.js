const start = document.querySelector("#start_btn"),
    subTittles = Array.from(document.querySelectorAll(".item")),
    mainTittle = document.querySelector("#main_tittle"),
    backMenu = document.querySelector("#backmenu"),
    info = document.querySelector(".container_info"),
    scrolling = document.querySelector("#scroll"),
    planets = document.querySelector('#planet_title'),
    menuItem = document.querySelectorAll('.menu__item'),
    navTrigger = document.getElementById('nav-trigger'),
    nav = document.querySelector('#nav');

start.addEventListener('click', function () {
    mainMenu();
    document.body.classList.add('visible');
});
backMenu.addEventListener('click', function () {
    goBack();
});
scrolling.addEventListener('click', function () {
    openInfo();
});
planets.addEventListener('click', function () {
    beep.play();
    info.scrollIntoView({
        block: 'end',
        behavior: 'smooth',
    })
});
menuItem.forEach(e => {
    e.addEventListener('click', function () {
        beep.play();
    })
});
function mainMenu() {
    beep.play();
    start.classList.add("hide");
    mainTittle.classList.add("hide");
    setTimeout(
        () => {
            subTittles.forEach(element => {
                element.classList.add('addTyping');
            });
            backMenu.classList.add("front");
            scrolling.classList.add("front");
        },
        200)
}

function goBack() {
    beep.play();
    start.classList.remove("hide");
    mainTittle.classList.remove("hide");
    subTittles.forEach(element => {
        element.classList.remove('addTyping');
    });
    backMenu.classList.remove("front");
    scrolling.classList.remove("front");
    info.classList.remove('block');
    document.body.classList.remove('visible');
}

function openInfo() {
    beep.play();
    info.classList.add('block');
    info.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
    })

}



navTrigger.addEventListener('click', navToggle);

function navToggle(e) {
    let closed = (navTrigger.classList.contains('close'));
    if (closed) {
        navTrigger.className = 'nav-trigger open';
        nav.className = 'out';
    } else {
        navTrigger.className = 'nav-trigger close';
        nav.className = 'in';
    }
}

