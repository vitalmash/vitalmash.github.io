const cartShopList = document.querySelector(".cart-shoppinglist");

document.addEventListener("DOMContentLoaded", ()=>{onLoad()});

function onLoad(){
    if (localStorage.getItem("quantityShop") === null) {
        localStorage.setItem("quantityShop", "0")
    } else {
        cartShopList.textContent = cartShopState(localStorage.getItem("quantityShop"));
    }
}

function cartShopState(quantity) {
    if (quantity > 9) {
        return `9+`;
    } else {
        return quantity;
    }
}