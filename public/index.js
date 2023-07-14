const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    const image = card.querySelector(".img_src");
    const imgSrc = card.dataset.imgSrc;
    let timeoutId = null;
    const findCard = [];

    card.addEventListener("click", function () {
        if (image.src.endsWith("carte.png")) {
            image.src = "/images/" + imgSrc;
            findCard.push(image.src);
            if (findCard.length > 2) {
                findCard.length = 2;
            }
            console.log(findCard);

            if (findCard[0] !== findCard[1]) {
                // Réinitialiser la source de l'image après 2 secondes
                clearTimeout(timeoutId);
                timeoutId = setTimeout(function () {
                    image.src = "/images/carte.png";
                }, 1000);
            }
        } else {
            image.src = "/images/carte.png";
            // Annuler le délai d'attente si la carte est à nouveau cliquée avant l'expiration du délai
            clearTimeout(timeoutId);
            findCard.length = 0;
        }
    });
});

// const cards = document.querySelectorAll(".card");

// cards.forEach((card) => {
//     const image = card.querySelector(".img_src");
//     const imgSrc = card.dataset.imgSrc;
//     let timeoutId = null;
//     const findCard = [];

//     card.addEventListener("click", function () {
//         if (image.src.endsWith("carte.png")) {
//             image.src = "/images/" + imgSrc;

//             // Réinitialiser la source de l'image après 2 secondes
//             clearTimeout(timeoutId);
//             timeoutId = setTimeout(function () {
//                 image.src = "/images/carte.png";
//             }, 1500);
//         } else {
//             image.src = "/images/carte.png";

//             // Annuler le délai d'attente si la carte est à nouveau cliquée avant l'expiration du délai
//             clearTimeout(timeoutId);
//         }
//     });
// });
