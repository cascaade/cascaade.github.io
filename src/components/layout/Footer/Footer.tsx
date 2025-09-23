import styles from "./Footer.module.scss";

import githubIcon from "@assets/icons/github-mark-white.svg"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.dev}>
                <span className={styles.name}>Owen</span>
                <span className={styles.role}>
                    Full Stack Developer
                    <br />
                    Design Enthusiast
                    <br />
                    Maker
                </span>
                <span className={styles.tagline}>Learn. Make. Create.</span>
            </div>
            <a href="#" className={styles.backToTop}>
                &#1997; Back to Top
            </a>
            <div className={styles.bar}>
                <span>&copy; 2025 Owen. All rights reserved.</span>
                <div className={styles.icons}>
                    <a href="https://github.com/cascaade/">
                        <img src={githubIcon} alt="GitHub" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
