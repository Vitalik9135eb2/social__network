
import s from "./formIteme.module.css";




export const textarea = ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={hasError ? s.textarea__wrap : " "}>
            <textarea {...input} {...props} className={s.textarea} />

            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const input = ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={hasError ? s.textarea__wrap : " "}>
            <input {...input} {...props}  />
        </div>
    )
}