const nav = document.querySelector("nav");

let transition = false;
let changeNavbar = true;
let toLocation;

window.addEventListener("scroll", (e) => {
    if (changeNavbar) {
        checkScrollLocation(document.documentElement.scrollTop);
    }

    let t = 10;

    if (document.documentElement.scrollTop - t <= toLocation && document.documentElement.scrollTop + t >= toLocation) {
        changeNavbar = true;
    }

    if (transition) {
        nav.style.transition = "all 500ms cubic-bezier(.36,.11,.29,1)";
    }
});

function checkScrollLocation(y) {
    if (nav.classList.contains("full")) {
        if (y > window.innerHeight * 0.8) { // past the hero
            nav.classList.remove("full");
        }
    } else {
        if (y <= window.innerHeight * 0.6) {
            nav.classList.add("full");
        }
    }

    transition = true;
}

function navScroll(y, str) {
    if (typeof y === 'string') {
        const element = document.getElementById(y);
        if (element) {
            y = Math.max(0, element.offsetTop - window.innerHeight * 0.15);
        }
    }

    toLocation = y;
    changeNavbar = false;
    window.scrollTo({top: y, behavior: 'smooth'});
    checkScrollLocation(y);
    window.history.pushState({}, '', str)
}

checkScrollLocation(document.documentElement.scrollTop);