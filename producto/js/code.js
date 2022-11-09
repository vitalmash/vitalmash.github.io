const contentSection = document.querySelectorAll(".content-section");
const CS__picture = document.querySelectorAll(".content-section__picture");
const CS__nutrition = document.querySelector(".content-nutrition");

changeOnResizeOnLoad();
window.onresize = ()=>{changeOnResizeOnLoad()};
function changeOnResizeOnLoad() {
    changeContentSection();
}

function changeContentSection() {
    if (document.documentElement.scrollWidth <=1024) {
        if (contentSection[1].childElementCount == 2) {
            contentSection[1].removeChild(CS__picture[1]);
        }  
    } else {
        if (!(contentSection[1].childElementCount == 2)) {
            contentSection[1].insertBefore(CS__picture[1], CS__nutrition);
        }
    }
}