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

header__burgerMenu.addEventListener('click', ()=> {
    header__burgerMenu.firstChild.classList.toggle("fi-br-x");
    checkBurgerMenu();
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
        header__nav.style.visibility = `visible`;
        header.replaceChild(header__nav,header__burgerMenu);
        changeOnIndicator('laptop');
    } else {
        changeOnIndicator('laptop');
    }
}

function checkBurgerMenu() {
    if (header__burgerMenu.firstChild.classList.contains("fi-br-x")) {
        header__nav.style.visibility = `visible`;
    } else {
        header__nav.style.visibility = `hidden`;
    }
}

function changeOnIndicator(type) {
    let index, arrayGridColumns = [], arrayGridRows = [];
    if (window.location.pathname == '/index.html' || window.location.pathname == '/') index = 0;
    else if (window.location.pathname == '/producto/index.html') index = 1;
    else if (window.location.pathname == '/blog/index.html') index = 2;
    else index = 3;

    if (type == 'laptop' && type != auxtype) {
        for (let i=0; i < header__links.childElementCount; i++) {
            // arrayGridColumns[i] = `${linkContent[i].clientWidth}px`;
            if (i == index) {barindicator[i].classList.add("indicator--active")}
            else {barindicator[i].classList.remove("indicator--active")}
        }
        // header__indicator.style = `
        //     grid-template-columns: ${arrayGridColumns[0]} ${arrayGridColumns[1]} ${arrayGridColumns[2]} ${arrayGridColumns[3]};
        //     `;

        auxtype = type;
    } else if (type == 'tablet' && type != auxtype) {
        for (let i=0; i < header__links.childElementCount; i++) {
            // arrayGridRows[i] = `${linkContent[i].clientHeight}px`;
            if (i == index) {barindicator[i].classList.add("indicator--active")}
            else {barindicator[i].classList.remove("indicator--active")}
        }
        // header__indicator.style = `
        //     grid-template-rows: ${arrayGridRows[0]} ${arrayGridRows[1]} ${arrayGridRows[2]} ${arrayGridRows[3]};
        //     `;

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