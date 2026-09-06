/* ========================================
   OPEN GIFT
======================================== */

function openGift() {

    const opening =
        document.getElementById("opening");

    const hero =
        document.getElementById("hero");

    const music =
        document.getElementById("bgMusic");


    /*
        Hide opening screen
    */

    opening.style.display = "none";


    /*
        Start music

        Browser allows this because
        it happens after a button click.
    */

    music.volume = 0.35;

    music.play().catch(() => {
        console.log("Music could not autoplay.");
    });


    /*
        Start floating hearts
    */

    startHearts();


    /*
        Scroll to hero
    */

    hero.scrollIntoView({
        behavior: "smooth"
    });

}



/* ========================================
   OPEN LETTER
======================================== */

function openLetter() {

    const letter =
        document.getElementById("letterContent");

    const button =
        document.getElementById("letterButton");


    /*
        Show letter
    */

    letter.classList.add("show");


    /*
        Change button
    */

    button.innerText = "Read slowly 🤍";


    /*
        Disable button
    */

    button.style.opacity = "0.5";

    button.style.pointerEvents = "none";


    /*
        Scroll to letter
    */

    setTimeout(() => {

        letter.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 400);

}



/* ========================================
   FLOATING HEARTS
======================================== */

function createHeart() {

    const container =
        document.getElementById(
            "hearts-container"
        );


    const heart =
        document.createElement("div");


    heart.classList.add("heart");


    /*
        Different heart characters
    */

    const hearts = [
        "♡",
        "♥",
        "🤍",
        "♡",
        "♥"
    ];


    heart.innerText =
        hearts[
            Math.floor(
                Math.random() * hearts.length
            )
        ];


    /*
        Random horizontal position
    */

    heart.style.left =
        Math.random() * 100 + "vw";


    /*
        Random size
    */

    heart.style.fontSize =
        Math.random() * 15 + 12 + "px";


    /*
        Random animation duration
    */

    heart.style.animationDuration =
        Math.random() * 3 + 4 + "s";


    container.appendChild(heart);


    /*
        Remove after animation
    */

    setTimeout(() => {

        heart.remove();

    }, 7000);

}



/* ========================================
   START HEARTS
======================================== */

function startHearts() {

    /*
        Create hearts continuously
    */

    setInterval(
        createHeart,
        900
    );

}