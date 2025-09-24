import styles from "./ProjectHero.module.scss";

export type ProjectHeroProps = {
    title: string;
    date: string;
    banner: string;
}

export default function ProjectHero(props: ProjectHeroProps) {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <span className={styles.title}>{props.title}</span>
                <span className={styles.date}>{props.date}</span>
                <img alt="imagine a stunning image here" src={props.banner} className={styles.img} />
            </div>
        </div>
    )
}