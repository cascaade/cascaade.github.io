import styles from './StreakBanner.module.scss';

export default function StreakBanner() {
    return (
        <div className={styles.streakBanner}>
            <div className={styles.left}>
                <img src="/fire" alt="[fire]" />
                <p>50</p>
            </div>
            <div className={styles.right}>
                <p>Over <strong>300</strong> commits across <strong>5</strong> repositories.</p>
                <p>Created <strong>4</strong> new repositories in the last month.</p>
            </div>
        </div>
    )
}
