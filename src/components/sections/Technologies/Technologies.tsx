import TechnologyCard from '@components/features/TechnologyCard/TechnologyCard'
import styles from './Technologies.module.scss'
import type { TechnologyCardProps } from '@components/features/TechnologyCard/TechnologyCard'

import reactImg from '@assets/icons/react.svg'
import viteImg from '@assets/icons/vite.svg'
import javaImg from '@assets/icons/java.svg'
import nodeImg from '@assets/icons/node.svg'

export type TechnologiesProps = {
    className: string
}

export default function Technologies(props: TechnologiesProps) {
    const technologies: TechnologyCardProps[] = [
        { name: "React", description: "A library used to create user interfaces.", img: reactImg },
        { name: "Vite", description: "A framework for building websites.", img: viteImg },
        { name: "Node.js", description: "A framework for building websites.", img: nodeImg },
        { name: "Java", description: "A widely-used programming language.", img: javaImg },
    ]

    return (
        <div className={styles.technologies}>
            <div className={props.className}>
                <h1>My Technologies</h1>
                <div className={styles.technologiesContainer}>
                    {technologies.map(t => (
                        TechnologyCard(t)
                    ))}
                </div>
            </div>
        </div>
    )
}
