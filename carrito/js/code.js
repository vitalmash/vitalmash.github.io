const PW__main = document.querySelector(".product-view__main");
const PW__filing = document.querySelector(".product-view__filing");
const FP__thumbnails = document.querySelector(".filing-product__thumbnails");
const FP__picture = document.querySelector(".filing-product__picture");
const PW__info = document.querySelector(".product-view__info");
const IP__title = document.querySelector(".info-product__title");
const IP__score = document.querySelector(".info-product__score");
const IP__cost = document.querySelector(".info-product__cost");

if (window.location.pathname == '/carrito/index.html') {
    FP__picture.addEventListener('click', ()=>{
        if (FP__thumbnails.classList.contains("moveToDown") && window.innerWidth <= 1024) {
            FP__thumbnails.classList.replace("moveToDown", "moveToUp");
        } else if (window.innerWidth <= 1024) {
            FP__thumbnails.classList.add("moveToDown");     
        }
    });
}

export function changeOnresizeOnload() {
    changeOnProductView__filing();
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

