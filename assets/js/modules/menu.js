const initMenu = () => {
    /* Gestion du menu simple*/
    const logo = document.querySelector("#logo");
    const menu = document.querySelector("#menu");
    logo.addEventListener("click", () => {
        menu.classList.toggle("hide");
        menu.classList.toggle("show");
    })
    const menubtns = document.querySelectorAll("#menu li");
    menubtns.forEach((element,index) => {
        element.addEventListener("click",()=>{
            console.log("do something for btn "+index);
        })
    });
}
export {initMenu}