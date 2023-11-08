import styles from './not-found.module.css'
import GoBackButton from "@/app/components/GoBackButton/GoBackButton";


export default function NotFound() {
    return (
        <div className={styles.notFound}>
            <h2>Not Found 404</h2>
            <p>Could not find requested resource</p>
            <GoBackButton/>
        </div>
    )
}