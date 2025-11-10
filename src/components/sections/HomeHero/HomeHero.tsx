import Button from '@components/features/Button';
import styles from './HomeHero.module.scss';

import locationIcon from '@assets/icons/location.svg';
import starIcon from '@assets/icons/star.svg';
import codeIcon from '@assets/icons/code.svg';

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function HomeHero() {
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
        <div className={styles.hero}>
            <div className={styles.left}>
                <span className={styles.intro}>Hi, I'm</span>
                <span className={styles.name}>Owen</span>
                <span className={styles.desc}>
                    Crafting web experiences that users actually enjoy, pixel by pixel.
                </span>
                <div className={styles.skillsContainer}>
                    <span className={styles.skill}>React</span>
                    <span className={styles.skill}>Vite</span>
                    <span className={styles.skill}>Node.js</span>
                </div>
                <div className={styles.buttonsContainer}>
                    <Button type="primary" onButtonClick={() => scrollTo("projects")}>Explore Projects</Button>
                    <Button type="secondary" onButtonClick={() => scrollTo("contact")}>Reach Out</Button>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.attribute}>
                    <img src={locationIcon} className={styles.icon}/>
                    <span>Located in New England, USA</span>
                </div>
                <div className={styles.attribute}>
                    <img src={starIcon} className={styles.icon}/>
                    <span>Built 10+ Projects</span>
                </div>
                <div className={styles.attribute}>
                    <img src={codeIcon} className={styles.icon}/>
                    <span><strong>Software Engineer</strong></span>
                </div>
            </div>
        </div>
    );
}
