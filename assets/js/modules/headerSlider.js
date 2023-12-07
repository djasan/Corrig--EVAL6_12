const initHeaderSlider = () => {
    let count=0;
    let countB=1;
    // get header size avec resize event
    const header = document.querySelector("header");
    let h = header.clientHeight;
    let w = header.clientWidth
    console.dir(header);
    // creation des elements


    const imageA = document.createElement("div");
    imageA.id = "imageA";
    imageA.style.position = "absolute";
    imageA.style.width = w + "px";
    imageA.style.height = h + "px";
    imageA.style.top = 0;
    imageA.style.left = 0;
    imageA.style.backgroundImage= "url(./assets/img/background0.jpg)";
    imageA.style.backgroundPosition = 0;
    imageA.style.backgroundRepeat= "no - repeat";
    imageA.style.backgroundSize = "cover";
    imageA.style.zIndex = -1;

    const imageB = document.createElement("div");
    imageB.id = "imageB";
    imageB.style.position = "absolute";
    imageB.style.width = w + "px";
    imageB.style.height = h + "px";
    imageB.style.top = 0;
    imageB.style.left = 0;
    imageB.style.backgroundImage= "url(./assets/img/background1.jpg)";
    imageB.style.backgroundPosition = 0;
    imageB.style.backgroundRepeat= "no - repeat";
    imageB.style.backgroundSize = "cover";
    imageB.style.zIndex = -2;
    document.body.prepend(imageA);
    document.body.prepend(imageB);

    setInterval(()=>{
        imageA.style.transition = "all 2s ease-in-out";
        imageA.style.transform = "translateX(-100%)";
        count < 2 ? count++ : count = 0;
        setTimeout(()=>{
            imageA.style.transition = "none";
            imageA.style.transform = "translateX(0)";
            imageA.style.backgroundImage = "url(./assets/img/background"+count+".jpg)";
            countB < 2 ? countB++ : countB = 0;
            imageB.style.backgroundImage = "url(./assets/img/background"+countB+".jpg)";
        },2000)
    },4000)


    //en cas de redimentionnement je redimentionne mes images de slider
    window.addEventListener("resize", () => {
        h = header.clientHeight;
        w = header.clientWidth;
        console.log(h + "|" + w);
        imageA.style.width = w + "px";
        imageA.style.height = h + "px";
        imageB.style.width = w + "px";
        imageB.style.height = h + "px";
    })
}
export { initHeaderSlider }