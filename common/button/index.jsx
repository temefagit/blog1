import style from './button.module.css'

export const Button = ({children, ...props}) => {

    return (
        <button {...props} className={style.btn}>{children}</button>
    )
}