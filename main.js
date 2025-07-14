const clamp = (num, min, max) => Math.min(Math.max(num, min), max); // why doesnt js have native clamp pls
let nav;
let transition = false;
let changeNavbar = true;
let toLocation;

(async () => {
    try {
        const response = await fetch('/navbar.html');
        if (!response.ok) {
            throw new Error(`Failed to fetch navbar: ${response.status} ${response.statusText}`);
        }
        const res = await response.text();

        document.getElementById('navbar-container').innerHTML = res;

    } catch (e) {
        console.error(e);
    }

    nav = document.querySelector("nav");

    window.addEventListener("scroll", (e) => {
        if (changeNavbar) {
            checkScrollLocation(window.scrollY);
        }

        let t = 10;

        if (window.scrollY - t <= toLocation && window.scrollY + t >= toLocation) {
            changeNavbar = true;
        }

        if (transition) {
            nav.style.transition = "all 500ms cubic-bezier(.36,.11,.29,1)";
        }
    });

    checkScrollLocation(window.scrollY);
})();

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
            const rect = element.getBoundingClientRect();
            y = rect.top + window.scrollY - window.innerHeight * 0.15;

            y = clamp(y, 0, document.documentElement.scrollHeight - window.innerHeight)
        }
    }

    toLocation = y;
    changeNavbar = false;
    isScrolling = true;
    window.scrollTo({ top: y, behavior: 'smooth' });
    checkScrollLocation(y);
    window.history.pushState({}, '', str);
}