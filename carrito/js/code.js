// of header
const cartShopList = document.querySelector(".cart-shoppinglist");

// of index
const PW__main = document.querySelector(".product-view__main");
const PW__filing = document.querySelector(".product-view__filing");
const FP__thumbnails = document.querySelector(".filing-product__thumbnails");
const thumbnailsProduct = document.querySelectorAll(".thumbnails-product");
const FP__picture = document.querySelector(".filing-product__picture");
const FP__pictureImg = document.querySelector(".filing-product__picture img");
const PW__info = document.querySelector(".product-view__info");
const IP__title = document.querySelector(".info-product__title");
const IP__title_fixed = `Bebida Probiótica de Kéfir con frutos rojos y mashua negra.`;
const IP__score = document.querySelector(".info-product__score");
const SS__rate = document.querySelectorAll(".score-stars__rate");
const SS__number = document.querySelector(".score-stars__number");
const scoreDivline = document.querySelector(".score-divline");
const IP__cost = document.querySelector(".info-product__cost");
const PC__select = document.querySelector(".presentation-content__select");
const lessBtn = document.querySelector(".less-button");
const currentNmbr = document.querySelector(".current-number");
const moreBtn = document.querySelector(".more-button");
const cartBtn = document.querySelector(".cart-button");


if (check()) {
    FP__picture.addEventListener('click', ()=>{
        if (FP__thumbnails.classList.contains("moveToDown") && window.innerWidth <= 1024) {
            FP__thumbnails.classList.replace("moveToDown", "moveToUp");
        } else if (window.innerWidth <= 1024) {
            FP__thumbnails.classList.add("moveToDown");     
        }
    });

    PC__select.addEventListener('click', (e)=>{
        if (PC__select.value == 1) {
            IP__title.textContent = `${IP__title_fixed} Vitalmash - 500g`;
            IP__cost.innerHTML = `<sup>S/ </sup>6.00`;
            console.log("500 g")
        }
        if (PC__select.value == 2) {
            IP__title.textContent = `${IP__title_fixed} Vitalmash - 1Kg`;
            IP__cost.innerHTML = `<sup>S/ </sup>10.00`;
            console.log("1 kg")
        }
    });

    lessBtn.addEventListener('click', ()=> {
        if (currentNmbr.value > 0) {
            currentNmbr.value--;
            if (currentNmbr.value == 0) {
                lessBtn.style.color = `var(--darkColor40)`;
            } else {
                lessBtn.style.color = `var(--darkColor)`;
            }
        }
    });

    moreBtn.addEventListener('click', ()=> {
        if(currentNmbr.value < 100) {
            currentNmbr.value++;
        }
        if (currentNmbr.value > 0) {
            lessBtn.style.color = `var(--darkColor)`;
        }
    });

    cartBtn.addEventListener('click', ()=> {
        if (currentNmbr.value > 0 && currentNmbr.value < 100) {
            addLocalStorge(currentNmbr.value);
            cartShopList.textContent = cartShopState(localStorage.getItem("quantityShop"));
            if (window.innerWidth <= 1024) {
                const header__burgerMenu = document.querySelector(".header__burgerMenu");
                header__burgerMenu.classList.add("header__burgerMenu--shop");
            }
        }
    });
    




    for (let i = 0; i < FP__thumbnails.childElementCount ; i++) {
        thumbnailsProduct[i].addEventListener('click', ()=>{
            toggleClassListChild(i, FP__thumbnails, thumbnailsProduct, "thumbnails-product--selected");
            FP__pictureImg.src = `img/bottle_etiqueta${i}.png`;
        });
    }


    scoreStart(SS__number.textContent);




}

function addLocalStorge(quantity) {
    localStorage.setItem("quantityShop", quantity);
}


function scoreStart(rate) {
    rate--;
    for (let i = 0; i < rate + 1 ; i++) {
        if (rate < i && rate > i - 1) {
            SS__rate[i].style.width = '9px';
            break;
        } else {
            SS__rate[i].style.width = '18px';
        }
    }
}

function cartShopState(quantity) {
    if (quantity > 9) {
        return `9+`;
    } else {
        return quantity;
    }
}


export function changeOnresizeOnload() {
    changeOnProductView__filing();
    changeOnScoreDivline();
}


function changeOnProductView__filing() {
    if (window.innerWidth <= 768) {
        PW__main.insertBefore(IP__title, PW__filing);
        PW__main.insertBefore(IP__score, PW__filing);
    } else {
        PW__info.insertBefore(IP__title, IP__cost);
        PW__info.insertBefore(IP__score, IP__cost);
    }
}

function changeOnScoreDivline() {
    if (IP__score.clientHeight > 25) {
        scoreDivline.style.width = `0`;
    } else {
        scoreDivline.style.width = `1px`;
    }
}


function check(){
    return window.location.pathname.includes("carrito")
}


function toggleClassListChild(index, dad, children, name) {
    for (let i = 0; i < dad.childElementCount; i++) {
        if (i == index) {
            children[index].classList.add(name)
        } else {
            children[i].classList.remove(name)
        }
    }
}
