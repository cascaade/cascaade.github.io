import Button from "@components/features/Button";
import styles from "./Contact.module.scss";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Contact() {
    const boxRef = useRef<HTMLDivElement>({} as HTMLDivElement);

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
                    `.${styles.fieldContainer}, .${styles.buttonContainer}`
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
        <div className={styles.contact} ref={boxRef}>
            <span className={styles.label}>&mdash; REACH OUT &mdash;</span>
            {/* <div className={styles.contactInfo}>
                <img src="" alt="" />

            </div>
            <div className={styles.hr}>
                <span className={styles.span}>OR</span>
            </div> */}
            <div className={styles.fieldContainer}>
                <input
                    type="text"
                    name="name"
                    className={styles.inputField}
                    placeholder=" "
                />
                <label className={styles.inputLabel}>Name</label>
            </div>
            <div className={styles.fieldContainer}>
                <input
                    type="email"
                    name="email"
                    className={styles.inputField}
                    placeholder=" "
                />
                <label className={styles.inputLabel}>Email</label>
            </div>
            <div className={styles.fieldContainer}>
                <textarea
                    name="message"
                    className={`${styles.inputField} ${styles.textarea}`}
                    placeholder=" "
                ></textarea>
                <label className={styles.inputLabel}>Message</label>
            </div>
            <div className={styles.buttonContainer}>
                <Button type="primary" onButtonClick={() => {
                    alert("This feature does not work at this time. Please check back later.");
                }}>Send Message</Button>
            </div>
        </div>
    );
}
