import { NavLink } from "react-router-dom";
import styles from "./ProjectCard.module.scss"

export type ProjectProps = {
    name: string,
    desc: string,
    date: string,
    cardBanner: string,
    url: string,
}

export default function ProjectCard(props: ProjectProps) {
    return (
        <NavLink className={styles.projectCard} to={"/projects/" + props.url}>
            <img src={props.cardBanner} alt="Image" className={styles.image} />
            <div className={styles.info}>
                <span className={styles.name}>{props.name}<span className={styles.timestamp}>{props.date}</span></span>
                <span className={styles.desc}>{props.desc}</span>
            </div>
        </NavLink>
    )
}