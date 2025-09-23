import styles from './HomeHero.module.scss';

export default function HomeHero() {
    return (
        <div className={styles.hero}>
            <div className={styles.content}>
                <span className={styles.title}>Learn. Make. Create.</span>
                <span className={styles.sub}>Owen's Project Portfolio</span>
            </div>
            <span className={styles.note}>
                (Images of projects will likely go here in the future.)
            </span>
        </div>
    );
}
