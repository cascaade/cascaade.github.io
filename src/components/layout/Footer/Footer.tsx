import Button from "@components/features/Button";
import styles from "./Footer.module.scss";

import githubIcon from "@assets/icons/github-mark-white.svg"

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Footer() {

    const scrollToTop = () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: 0 },
            ease: "power4.out",
        });
    };

    return (
        <footer className={styles.footer}>
            {/* <div className={styles.dev}>
                <span className={styles.name}>Owen</span>
                <span className={styles.role}>
                    Full Stack Developer
                    <br />
                    Design Enthusiast
                    <br />
                    Maker
                </span>
                <span className={styles.tagline}>Learn. Make. Create.</span>
            </div> */}
            <Button type="secondary" onButtonClick={scrollToTop}>Back to Top</Button>
            <div className={styles.bar}>
                <span>&copy; 2026 Owen. All rights reserved.</span>
                <div className={styles.icons}>
                    <a href="https://github.com/cascaade/">
                        <img src={githubIcon} alt="GitHub" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
