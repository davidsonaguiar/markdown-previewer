import styles from "./styles.module.css"

export default function Title({ children }: { children: string}) {
    return <h1 className={styles.title}>{children}</h1>
}