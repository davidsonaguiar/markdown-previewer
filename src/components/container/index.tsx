import { ReactElement } from "react"
import styles from "./styles.module.css"

interface PropsContainer {
    children: ReactElement[] | ReactElement
}


export default function Container({ children }: PropsContainer) {
    return(
        <div className={styles.container}>
            {children}
        </div>
    )   
}