'use client'
import style from './button.module.css'

export const Button = ({ children, variant, ...props }) => {
    const buttonStyles = `inline-block rounded-full ${`bg-${variant}`} px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white ${`shadow-${variant}-3`} transition duration-150 ease-in-out hover:${`bg-${variant}-accent-300`} hover:${`shadow-${variant}-2`} focus:${`bg-${variant}-accent-300`} focus:${`shadow-${variant}-2`} focus:outline-none focus:ring-0 active:${`bg-${variant}-600`} active:${`shadow-${variant}-2`} motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong`;
    return (
        <button {...props} className={buttonStyles}>{children}</button>
    )

}