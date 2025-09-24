import ProjectHero from "@components/sections/ProjectHero";
import styles from "./Project.module.scss"

import type { ReactNode } from "react"

export type ProjectProps = {
    title: string;
    desc: string;
    date: string;
    cardBanner: string;
    url: string;
}

export type ProjectPageProps = {
    title: string;
    date: string;
    banner: string;
    content: ReactNode;
}

export default function Project(props: ProjectPageProps) {
    return (<>
        <ProjectHero title={props.title} date={props.date} banner={props.banner}></ProjectHero>
        <div className={styles.content}>
            {props.content}
        </div>
    </>)
}