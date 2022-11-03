window.onload = ()=> {
    const header = document.getElementById("header");
    const header__nav = document.querySelector(".header__nav");
    const header__links = document.querySelector(".header__links");
    const linkContent = document.querySelectorAll(".link-content");
    const header__indicator = document.querySelector(".header__indicator");
    const main = document.getElementById("main");

    const header__burgerMenu = document.createElement("DIV");
    header__burgerMenu.classList.add("header__burgerMenu");
    header__burgerMenu.innerHTML = `<i class="fi fi-br-menu-burger"></i>`;
    

    changeOnResizeOnload();
    window.onresize = ()=>{changeOnResizeOnload()};

    header__burgerMenu.addEventListener('click', ()=> {
        header__burgerMenu.firstChild.classList.toggle("fi-br-x");
        checkBurgerMenu();
    });

    function changeOnResizeOnload() {
        changeHeader();
    }

    function changeHeader() {
        if (document.documentElement.scrollWidth <= 768) {
            checkBurgerMenu();
            header.replaceChild(header__burgerMenu, header__nav);
            document.body.insertBefore(header__nav, main);
            changeIndicator('tablet');
        } else if (header.contains(header__burgerMenu)) {
            header__nav.style.visibility = `visible`;
            header.replaceChild(header__nav,header__burgerMenu);
            changeIndicator('laptop');
        } else {
            changeIndicator('laptop');
        }
    }

    function checkBurgerMenu() {
        if (header__burgerMenu.firstChild.classList.contains("fi-br-x")) {
            header__nav.style.visibility = `visible`;
        } else {
            header__nav.style.visibility = `hidden`;
        }
    }

    function changeIndicator(type) {
        let index, header__linksCoords, linkContentCoords, linkContentPosition;
        if (window.location.pathname == 'index.html') index = 0;
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

}