import styles from "./Home.module.scss";

import HomeHero from "@components/sections/HomeHero/HomeHero";
import type { ProjectProps } from "@components/features/ProjectCard/ProjectCard"

import { props as flappyBirdNetworkProjectProps } from "@components/features/projects/FlappyBirdNetwork";
// import { props as sandwichBotProjectProps } from "@components/features/projects/SandwichBot";
import { props as clockProjectProps } from "@components/features/projects/ClockApp";
import { props as periodicTableProps } from "@components/features/projects/PeriodicTable";
import ProjectPreview from "@components/sections/ProjectPreview";
import Contact from "@components/sections/Contact/Contact";
import Technologies from "@components/sections/Technologies";

export default function Home() {
    const projects: ProjectProps[] = [
        clockProjectProps,
        periodicTableProps,
        flappyBirdNetworkProjectProps,
        // sandwichBotProjectProps,
    ];
    
    return (
        <div className={styles.homePage}>
            <HomeHero />
            <div className={styles.content} id="projects">
                {
                    projects.map((p) => (
                        <ProjectPreview {...p}/>
                    ))
                }
            </div>
            <Technologies className={styles.content} />
            <div className={styles.content} id="contact">
                <Contact />
            </div>
        </div>
    );
}
