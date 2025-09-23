import { useEffect, useState } from 'react';
import styles from './NavBar.module.scss';

import icon from "@assets/icons/logo_blue_nobg.svg"

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

    return (
        <nav className={`${styles.navBar} ${scrolled ? "" : styles.full}`}>
            <div className={styles.inner}>
                <img src={icon} alt="logo" className={styles.icon} />
                <div className={styles.buttons}>
                    <a href="/#/">Home</a>
                    <a href="/#/about">About</a>
                    <a href="/#/projects">Projects</a>
                </div>
            </div>
        </nav>
    );
}
