import { NavLink } from "react-router-dom";
import styles from "./ProjectCard.module.scss"
import type { ProjectProps } from "@pages/Project";

export default function ProjectCard(props: ProjectProps) {
    return (
        <NavLink className={styles.projectCard} to={"/projects/" + props.url}>
            <img src={props.cardBanner} alt="Image" className={styles.image} />
            <div className={styles.info}>
                <span className={styles.name}>{props.title}<span className={styles.timestamp}>{props.date}</span></span>
                <span className={styles.desc}>{props.desc}</span>
            </div>
        </NavLink>
    )
}