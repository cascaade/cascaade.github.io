import type { ProjectProps } from "@components/features/ProjectCard/ProjectCard";
import styles from "./ProjectPreview.module.scss";
import Button from "@components/features/Button";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProjectPreview(props: ProjectProps) {
    const boxRef = useRef<HTMLDivElement>({} as HTMLDivElement);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

    useEffect(() => {
        let onResize = () => {
            setIsMobile(window.innerWidth < 1200);
        }

        window.addEventListener("resize", onResize);
        return () => { window.removeEventListener("resize", onResize) }
    });


    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: boxRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
            });

            tl.fromTo(
                boxRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
            );

            tl.fromTo(
                boxRef.current.querySelectorAll(
                    `.${styles.title}, .${styles.desc}, .${styles.buttonsContainer}, .${styles.img}`
                ),
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.3,
                    stagger: 0.1,
                    ease: "power2.out",
                },
                "-=0.2"
            );
        }, boxRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className={`${styles.project} ${isMobile && styles.mobile}`} ref={boxRef}>
            {isMobile && (
                <div className={styles.imageContainer}>
                    <img src={props.image} alt="" className={styles.img} />
                </div>
            )}
            <div className={styles.infoContainer}>
                <span className={styles.title}>{props.name}</span>
                <span className={styles.desc}>{props.desc}</span>
                <div className={styles.buttonsContainer}>
                    {props.live ? (
                        <>
                            <Button type="primary" href={props.live}>
                                <img src="" alt="" />
                                <span>Live</span>
                            </Button>
                            <Button type="secondary" href={props.code}>
                                <span>View Code</span>
                            </Button>
                        </>
                    ) : (
                        <Button type="primary" href={props.code}>
                            <span>View Code</span>
                        </Button>
                    )}
                </div>
            </div>
            {!isMobile && (
                <div className={styles.imageContainer}>
                    <img src={props.image} alt="" className={styles.img} />
                </div>
            )}
        </div>
    );
}
