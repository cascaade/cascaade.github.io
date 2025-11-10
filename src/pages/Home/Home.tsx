import styles from "./Home.module.scss";

import HomeHero from "@components/sections/HomeHero/HomeHero";
import ProjectCard from "@components/features/ProjectCard";
import type { ProjectProps } from "@components/features/ProjectCard/ProjectCard"

import { props as flappyBirdNetworkProjectProps } from "@components/features/projects/FlappyBirdNetwork";
// import { props as sandwichBotProjectProps } from "@components/features/projects/SandwichBot";
import { props as clockProjectProps } from "@components/features/projects/ClockApp";
import { props as periodicTableProps } from "@components/features/projects/PeriodicTable";
import ProjectPreview from "@components/sections/ProjectPreview";
import Contact from "@components/sections/Contact/Contact";

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
            <div className={styles.content}>
                <div id="projects">
                    {
                        projects.map((p) => (
                            <ProjectPreview {...p}/>
                        ))
                    }
                </div>
                <div id="contact">
                    <Contact />
                </div>
            </div>
        </div>
    );
}
