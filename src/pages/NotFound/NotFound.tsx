import Button from "@components/features/Button";
import styles from "./NotFound.module.scss";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className={styles.error}>
            <div className={styles.container}>
                <span className={styles.glyph}>🔥</span>
                <span className={styles.title}>Ruh-roh!</span>
                <span className={styles.details}>This page does not exist!</span>
                <Link to="/">
                    <Button type="primary">Back to Home</Button>
                </Link>
            </div>
        </div>
    )
}
