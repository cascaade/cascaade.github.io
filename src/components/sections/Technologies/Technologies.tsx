import TechnologyCard from '@components/features/TechnologyCard/TechnologyCard'
import styles from './Technologies.module.scss'
import type { TechnologyCardProps } from '@components/features/TechnologyCard/TechnologyCard'

import reactImg from '@assets/icons/react.svg'

export type TechnologiesProps = {
    className: string
}

export default function Technologies(props: TechnologiesProps) {
    const technologies: TechnologyCardProps[] = [
        { name: "React", description: "A framework for building websites.", img: reactImg }
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
