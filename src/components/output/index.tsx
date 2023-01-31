import ReactMarkdown from "react-markdown"
import styles from "./styles.module.css"

export default function Output({ children}: { children: string }) {
    return(
        <div 
        id="preview"
        className={styles.container}>
            <p className={styles.text}>Saida:</p>
            <ReactMarkdown className={styles.markdown}>
                {children}
            </ReactMarkdown>
        </div>
    )
}