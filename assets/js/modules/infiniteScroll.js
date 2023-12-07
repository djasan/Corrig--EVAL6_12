const initInfiniteScroll = () => {
    /* Gestion des cards */
    const cards = document.querySelector("#cards");
    const footer = document.querySelector("footer");
    let increment = 5;//permettra de définir un nouveau nCard à chaque insertion de card
    const cardTitlesArray = [
        "Peugeot 208",
        "Ford Focus",
        "Audi A1",
        "Opel Mokka"
    ]

    /* detection du bas de page avec technique de l'observer sur l'element footer*/
    let observer = new IntersectionObserver(
        (entries) => {
            for (let index = 0; index < entries.length; index++) {
                if (entries[index].isIntersecting === true) {
                    setTimeout(() => {
                        console.log("footer enter after 2s");
                        // insertion des 4 cards supplémentaires
                        for (let i = 0; i < 4; i++) {
                            let orderCars = [];
                            switch (i) {
                                case 0:
                                    orderCars = [1, 2, 3, 4]
                                    break;
                                case 1:
                                    orderCars = [2, 3, 4, 1]
                                    break;
                                case 2:
                                    orderCars = [3, 4, 1, 2]
                                    break;
                                case 3:
                                    orderCars = [4, 1, 2, 3]
                                    break;    
                                default:
                                    break;
                            }
                            cards.innerHTML += `<div class="card">
                        <div id="carousel${increment}" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src="./assets/img/vehicule${orderCars[0]}.png" alt="First slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="./assets/img/vehicule${orderCars[1]}.png" alt="Second slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="./assets/img/vehicule${orderCars[2]}.png" alt="Third slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="./assets/img/vehicule${orderCars[3]}.png" alt="Third slide">
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carousel${increment}" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carousel${increment}" role="button"
                                data-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                        <div class="cardTxt">
                            <h3>${cardTitlesArray[i]}</h3>
                            <p>Diesel, 5 portes, GPS, Autoradio, Forfait 1000km (0,5/km supplémentaire).</p>
                            <p>999 € - Agence Paris</p>
                            <button>Réserver et Payer</button>
                        </div>
                        </div>`;
                            increment++;
                        }
                    }, 2000)
                } else {
                    console.log("footer getout!!!");
                }
            }
        },
        { threshold: [0] }
    )
    observer.observe(footer);
}
export { initInfiniteScroll }