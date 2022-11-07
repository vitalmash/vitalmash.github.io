window.onload = ()=> {
    const header = document.getElementById("header");
    const header__nav = document.querySelector(".header__nav");
    const header__links = document.querySelector(".header__links");
    const linkContent = document.querySelectorAll(".link-content");
    const header__indicator = document.querySelector(".header__indicator");
    const main = document.getElementById("main");
    const footer__divline = document.querySelector(".footer__divline");


    const header__burgerMenu = document.createElement("DIV");
    header__burgerMenu.classList.add("header__burgerMenu");
    header__burgerMenu.innerHTML = `<i class="fi fi-br-menu-burger"></i>`;
    
    // momentario
    
    const contentSection = document.querySelectorAll(".content-section");
    const CS__picture = document.querySelectorAll(".content-section__picture");
    const CS__nutrition = document.querySelector(".content-nutrition");

    function changeContentSection() {
        console.log(document.documentElement.scrollWidth)
        if (document.documentElement.scrollWidth <=1024 && contentSection[1].childElementCount == 2) {
            contentSection[1].removeChild(CS__picture[1]);
        } 
        if (document.documentElement.scrollWidth >1024 && !(contentSection[1].childElementCount == 2)) {
            contentSection[1].insertBefore(CS__picture[1], CS__nutrition);
        }
    }

    //

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
        changeContentSection();
    }

    function changeOnHeader() {
        if (document.documentElement.scrollWidth <= 768) {
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
        let index, header__linksCoords, linkContentCoords, linkContentPosition;
        if (window.location.pathname == 'index.html' || window.location.pathname == '/') index = 0;
        else if (window.location.pathname == 'producto/index.html') index = 1;
        else if (window.location.pathname == 'blog/index.html') index = 2;
        else index = 3;

        header__linksCoords = header__links.getBoundingClientRect();
        linkContentCoords = linkContent[index].getBoundingClientRect();
        if (type == 'laptop') {
            linkContentPosition = linkContentCoords.left - header__linksCoords.left;
            header__indicator.style = `
            width: ${linkContent[index].clientWidth}px;
            height: 4px;
            margin-left: ${linkContentPosition}px;
        `;
        } else if (type == 'tablet') {
            linkContentPosition = linkContentCoords.top - header__linksCoords.top;
            header__indicator.style = `
            width: 4px;
            height: ${linkContent[index].clientHeight}px;
            margin-top: ${linkContentPosition}px;
        `;
        }
    }

    function changeOnFooter() {
        if (document.documentElement.scrollWidth > 768) {
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

    if (window.location.pathname == 'producto/index.html') {

    }

}