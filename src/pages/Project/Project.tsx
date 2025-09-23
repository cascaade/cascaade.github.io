import styles from "./Project.module.scss"

import type { ReactNode } from "react"

export type ProjectPageProps = {
    content: ReactNode;
}

export default function Project(props: ProjectPageProps) {
    return (<>
    <div className={styles.content}>
        {props.content}
    </div>
    </>)
}