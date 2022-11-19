var switchStart = false, countNumber = 0;

const header = document.getElementById("header");
const header__nav = document.querySelector(".header__nav");
const header__links = document.querySelector(".header__links");
const linkContent = document.querySelectorAll(".link-content");
const header__indicator = document.querySelector(".header__indicator");
const barindicator = document.querySelectorAll(".barindicator");
const main = document.getElementById("main");
const footer__divline = document.querySelector(".footer__divline");

var auxtype = 'nothing'; // auxtype: para saber el type anterior y no repetir procesos. En f:  changeOnIndicator(type)
const header__burgerMenu = document.createElement("DIV");
header__burgerMenu.classList.add("header__burgerMenu");
header__burgerMenu.innerHTML = `<i class="fi fi-br-menu-burger"></i>`;

window.addEventListener('scroll', ()=> {
    if (header__burgerMenu.firstChild.classList.contains("fi-br-x") && window.innerWidth <= 1024) {
        clickBurgerMenu();
    }
});

main.addEventListener('click', ()=> {
    if (header__burgerMenu.firstChild.classList.contains("fi-br-x") && window.innerWidth <= 1024) {
        clickBurgerMenu();
    }
});

header__burgerMenu.addEventListener('click', ()=> {
    clickBurgerMenu();
});

export function changeOnresizeOnload() {
    checkMainModal();
    changeOnHeader();
    changeOnFooter();
}

function changeOnHeader() {
    if (window.innerWidth <= 1024) {
        if (!header.contains(header__burgerMenu)) {
            header.replaceChild(header__burgerMenu, header__nav);
            document.body.insertBefore(header__nav, main);
            changeOnIndicator('tablet');
        } else if (header__burgerMenu.firstChild.classList.contains("fi-br-x")){
            header__nav.classList.add("swipeCenter");
            header__nav.classList.remove("swipeCenter-rvrs");
        }
    } else if (header.contains(header__burgerMenu)) {
        header.replaceChild(header__nav,header__burgerMenu);
        changeOnIndicator('laptop');
    } else {
        changeOnIndicator('laptop');
    }
}

function checkBurgerMenu() {
    if (header__burgerMenu.firstChild.classList.contains("fi-br-x")) {
        header__nav.classList.add("swipeCenter");
        header__nav.classList.remove("swipeCenter-rvrs");
    } else if (switchStart) {
        header__nav.classList.add("swipeCenter-rvrs");
        header__nav.classList.remove("swipeCenter");
    }
}

function clickBurgerMenu() {
    header__burgerMenu.firstChild.classList.toggle("fi-br-x");
    header__burgerMenu.classList = `header__burgerMenu rotate360${countNumber%2 == 0 ? '' : '-rvrs'}`;
    main.classList.toggle("main--modal");
    checkBurgerMenu();
    switchStart = true;
    countNumber++;
}

function checkMainModal() {
    if (window.innerWidth > 1024) {
        header__nav.classList.remove("swipeCenter");
        header__nav.classList.remove("swipeCenter-rvrs");
        main.classList.remove("main--modal");
    } else if (header__burgerMenu.firstChild.classList.contains("fi-br-x")) {
        main.classList.add("main--modal");
    }
}

function addEventOnIndicator(index) {
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
}

function changeOnIndicator(type) {
    let index;
    if (window.location.pathname.includes('producto')) index = 1;
    else if (window.location.pathname.includes('carrito')) index = 2;
    else if (window.location.pathname.includes('blog')) index = 3;
    else if (window.location.pathname.includes('contacto')) index = 4;
    else index = 0;

    if (type == 'laptop' && type != auxtype) {
        addEventOnIndicator(index);
        auxtype = type;
    } else if (type == 'tablet' && type != auxtype) {
        addEventOnIndicator(index);
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