const PW = document.querySelector(".product-view");
const PW__main = document.querySelector(".product-view__main");
const PW__filing = document.querySelector(".product-view__filing");
const PW__info = document.querySelector(".product-view__info");
const IP__title = document.querySelector(".info-product__title");
const IP__score = document.querySelector(".info-product__score");
const IP__cost = document.querySelector(".info-product__cost");

export function changeOnresizeOnload() {
    changeOnProductView__filing();
}

function changeOnProductView__filing() {
    if (window.innerWidth <= 768 && PW__info.contains(IP__title)) {
        PW__main.insertBefore(IP__title, PW__filing);
        PW__main.insertBefore(IP__score, PW__filing);
    } else if (!PW__info.contains(IP__title)) {
        PW__info.insertBefore(IP__title, IP__cost);
        PW__info.insertBefore(IP__score, IP__cost);
    }
}