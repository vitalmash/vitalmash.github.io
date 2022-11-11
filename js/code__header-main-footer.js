var switchStart = false, countNumber = 0;

const header = document.getElementById("header");
const header__nav = document.querySelector(".header__nav");
const header__links = document.querySelector(".header__links");
const linkContent = document.querySelectorAll(".link-content");
const header__indicator = document.querySelector(".header__indicator");
const barindicator = document.querySelectorAll(".barindicator");
const main = document.getElementById("main");
const footer__divline = document.querySelector(".footer__divline");

//
const contentSection = document.querySelectorAll(".content-section");
const CS__picture = document.querySelectorAll(".content-section__picture");
const CS__nutrition = document.querySelector(".content-nutrition");

//


var auxtype = 'nothing'; // auxtype: para saber el type anterior y no repetir procesos. En f:  changeOnIndicator(type)
const header__burgerMenu = document.createElement("DIV");
header__burgerMenu.classList.add("header__burgerMenu");
header__burgerMenu.innerHTML = `<i class="fi fi-br-menu-burger"></i>`;

changeOnresizeOnload();
window.onresize = ()=>{changeOnresizeOnload()};

window.addEventListener('scroll', ()=> {
    if (header__burgerMenu.firstChild.classList.contains("fi-br-x")) {
        clickBurgerMenu();
    }
});


header__burgerMenu.addEventListener('click', ()=> {
    clickBurgerMenu();
});

main.addEventListener('click', ()=> {
    if (header__burgerMenu.firstChild.classList.contains("fi-br-x")) {
        clickBurgerMenu();
    }
});

function changeOnresizeOnload() {
    changeOnHeader();
    changeOnFooter();
    //
    if (window.location.pathname == '/producto/index.html' || window.location.pathname == '/C:/Users/USUARIO/OneDrive/ESTUDIO/Proyectos/Vitalmash/github/producto/index.html') {
        changeContentSection();
    }
}

//

function changeContentSection() {
    if (window.innerWidth <= 1024) {
        if (contentSection[1].childElementCount == 2) {
            contentSection[1].removeChild(CS__picture[1]);
        }  
    } else {
        if (!(contentSection[1].childElementCount == 2)) {
            contentSection[1].insertBefore(CS__picture[1], CS__nutrition);
        }
    }
}

//

function changeOnHeader() {
    if (window.innerWidth <= 768) {
        checkBurgerMenu();
        if (!header.contains(header__burgerMenu)) {
            header.replaceChild(header__burgerMenu, header__nav);
            document.body.insertBefore(header__nav, main);
            changeOnIndicator('tablet');
        }
    } else if (header.contains(header__burgerMenu)) {
        header__nav.style = `animation-name: swipeCenter;`;
        header.replaceChild(header__nav,header__burgerMenu);
        changeOnIndicator('laptop');
    } else {
        changeOnIndicator('laptop');
    }
}

function checkBurgerMenu() {
    if (header__burgerMenu.firstChild.classList.contains("fi-br-x")) {
        header__nav.style = `animation-name: swipeCenter;`;
    } else if (switchStart) {
        header__nav.style = `animation-name: swipeCenter--reverse;`;
    }
}

function clickBurgerMenu() {
    header__burgerMenu.firstChild.classList.toggle("fi-br-x");
    header__burgerMenu.style = `
        animation-name: rote360${countNumber%2 == 0 ? '' : '--reverse'};
    `;
    checkBurgerMenu();
    switchStart = true;
    countNumber++;
}

function changeOnIndicator(type) {
    let index;
    if (window.location.pathname == '/index.html' || window.location.pathname == '/') index = 0;
    else if (window.location.pathname == '/producto/index.html') index = 1;
    else if (window.location.pathname == '/blog/index.html') index = 2;
    else if (window.location.pathname == '/contacto/index.html') index = 3;
    else index = 0;

    if (type == 'laptop' && type != auxtype) {
        for (let i=0; i < header__links.childElementCount; i++) {
            if (i == index) {
                linkContent[i].addEventListener('mouseover', (e)=>{
                    header__indicator.classList.add(`header__indicator--index${i}`)
                });
                linkContent[i].addEventListener('mouseout', (e)=>{
                    header__indicator.classList.remove(`header__indicator--index${i}`)
                });
                barindicator[i].classList.add("indicator--active")
            }
            else {
                barindicator[i].classList.remove("indicator--active")
            }
        }
        auxtype = type;

    } else if (type == 'tablet' && type != auxtype) {
        for (let i=0; i < header__links.childElementCount; i++) {
            if (i == index) {
                barindicator[i].classList.add("indicator--active")
            }
            else {
                barindicator[i].classList.remove("indicator--active")
            }
        }
        auxtype = type;

    }
}

function changeOnFooter() {
    if (window.innerWidth > 768) {
        if (!footer__divline.classList.contains("vertical-line") && !footer__divline.classList.contains("horizontal-line")) {
            footer__divline.classList.add("vertical-line");
        } else {
            footer__divline.classList.replace("horizontal-line","vertical-line");
        }
    } else {
        if (!footer__divline.classList.contains("vertical-line") && !footer__divline.classList.contains("horizontal-line")) {
            footer__divline.classList.add("horizontal-line");
        } else {
            footer__divline.classList.replace("vertical-line","horizontal-line");
        }
    }

}