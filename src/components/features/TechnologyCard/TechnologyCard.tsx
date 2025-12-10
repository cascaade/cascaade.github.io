import styles from './TechnologyCard.module.scss';

export type TechnologyCardProps = {
    name: string,
    description: string,
    img: string
};

export default function TechnologyCard(props: TechnologyCardProps) {
    return (
        <div className={styles.card}>
            <img className={styles.image} src={props.img} alt={props.name.toLowerCase()} />
            <div className={styles.infoContainer}>
                <span className={styles.name}>{props.name}</span>
                <span className={styles.description}>{props.description}</span>
            </div>
        </div>
    )
}