import Button from "@components/features/Button";
import styles from "./HomeHero.module.scss";

import locationIcon from "@assets/icons/location.svg";
import starIcon from "@assets/icons/star.svg";
import codeIcon from "@assets/icons/code.svg";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollToPlugin);

export default function HomeHero() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

    useEffect(() => {
        let onResize = () => {
            setIsMobile(window.innerWidth < 1200);
        }

        window.addEventListener("resize", onResize);
        return () => { window.removeEventListener("resize", onResize) }
    });

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            gsap.to(window, {
                duration: 1,
                scrollTo: { y: el },
                ease: "power4.out",
            });
        }
    };

    return (
        <div className={`${styles.hero} ${isMobile && styles.mobile}`}>
            <div className={styles.left}>
                <span className={styles.intro}>Hi, I'm</span>
                <span className={styles.name}>Owen</span>
                {isMobile && (
                    <div className={styles.right}>
                        <div className={styles.attribute}>
                            <img src={locationIcon} className={styles.icon} />
                            <span>Located in New England, USA</span>
                        </div>
                        <div className={styles.attribute}>
                            <img src={starIcon} className={styles.icon} />
                            <span>Built 10+ Projects</span>
                        </div>
                        <div className={styles.attribute}>
                            <img src={codeIcon} className={styles.icon} />
                            <span>
                                <strong>Software Engineer</strong>
                            </span>
                        </div>
                    </div>
                )}
                <span className={styles.desc}>
                    Crafting web experiences that users actually enjoy, pixel by
                    pixel.
                </span>
                <div className={styles.skillsContainer}>
                    <span className={styles.skill}>React</span>
                    <span className={styles.skill}>Vite</span>
                    <span className={styles.skill}>Node.js</span>
                </div>
                <div className={styles.buttonsContainer}>
                    <Button
                        type="primary"
                        onButtonClick={() => scrollTo("projects")}
                    >
                        Explore Projects
                    </Button>
                    <Button
                        type="secondary"
                        onButtonClick={() => scrollTo("contact")}
                    >
                        Reach Out
                    </Button>
                </div>
            </div>
            {!isMobile && (
                <div className={styles.right}>
                    <div className={styles.attribute}>
                        <img src={locationIcon} className={styles.icon} />
                        <span>Located in New England, USA</span>
                    </div>
                    <div className={styles.attribute}>
                        <img src={starIcon} className={styles.icon} />
                        <span>Built 10+ Projects</span>
                    </div>
                    <div className={styles.attribute}>
                        <img src={codeIcon} className={styles.icon} />
                        <span>
                            <strong>Software Engineer</strong>
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}
