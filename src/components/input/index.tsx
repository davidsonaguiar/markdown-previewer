import { ChangeEvent } from "react"
import styles from "./styles.module.css"

interface PropsInput {
    label: string
    name: string
    value: string
    handleChange: (value: string) => void
}

export default function Input({label, name, value, handleChange}: PropsInput) {
    return(
        <label 
        className={styles.label}
        htmlFor={name}>
            {label}
            <textarea 
            id={name}
            value={value}
            className={styles.input}
            onChange={(e) => {
                handleChange(e.target.value)
            }}/>
        </label>
    )
}