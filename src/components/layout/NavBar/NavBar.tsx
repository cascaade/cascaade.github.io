import { useEffect, useState } from 'react';
import styles from './NavBar.module.scss';

import icon from "@assets/icons/logo_blue_nobg.svg"

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function NavBar() {
    const isScrolled = () => {
        const triggerPixels = 32;

        return window.scrollY > triggerPixels;
    }

    const [scrolled, setScrolled] = useState(isScrolled());

    // set if the user has scrolled down the page enough to trigger navbar
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrolled(isScrolled());
        });
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            gsap.to(window, {
                duration: 1,
                scrollTo: { y: el, offsetY: 100 },
                ease: "power4.out",
            });
        }
    };

    return (
        <nav className={`${styles.navBar} ${scrolled ? styles.full : styles.full}`}>
            <div className={styles.inner}>
                <img src={icon} alt="logo" className={styles.icon} />
                <div className={styles.buttons}>
                    <button onClick={() => scrollTo("projects")}>Projects</button>
                    <button onClick={() => scrollTo("timeline")}>Timeline</button>
                    <button onClick={() => scrollTo("contact")}>Contact</button>
                </div>
            </div>
        </nav>
    );
}
