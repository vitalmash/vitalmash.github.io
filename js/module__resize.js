import {changeOnresizeOnload as COROL__HMF} from "./code__header-main-footer.js";
import {changeOnresizeOnload as COROL__producto} from "../producto/js/code.js";
import {changeOnresizeOnload as COROL__carrito} from "../carrito/js/code.js";

corol(); // COROL: Change On Resize On Load
window.onresize = ()=>{corol()};

function corol(){
    // For all
    COROL__HMF();
    // For each pathname
    if (window.location.pathname == '/producto/index.html' || window.location.pathname == '/C:/Users/USUARIO/OneDrive/ESTUDIO/Proyectos/Vitalmash/github/producto/index.html') {
        COROL__producto();
    } else if (window.location.pathname == '/carrito/index.html') {
        COROL__carrito();
    }
}