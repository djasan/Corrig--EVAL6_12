import { initInfiniteScroll } from "./modules/infiniteScroll.js";
import { initMenu } from "./modules/menu.js";
import { initHeaderSlider } from "./modules/headerSlider.js";


/* // carousel simple pour le header
const header = document.querySelector("header");
let count = 1;
//background.jpg
setInterval(()=>{
    header.style.backgroundImage = "url('./assets/img/background"+count+".jpg')";
    count < 2 ? count++ : count=0;
},4000) */

// carousel + complex with effects
initHeaderSlider();
//menu
initMenu();
//infiniteScroll
initInfiniteScroll();

