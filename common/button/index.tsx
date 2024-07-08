'use client'
import { PropsWithChildren, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

type Props = PropsWithChildren<{
    variant?: 'primary' | 'error';
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>

type variantsTypes = Record<'primary' | 'error', string>
type hoverTypes = Record<'primary' | 'error', string>
type shadowTypes = Record<'primary' | 'error', string>


export const Button:React.FC<Props> = ({ variant = 'primary', children, ...props }) => {
    const variants: variantsTypes = {
        primary: 'bg-zinc-800',
        error: 'bg-red-500'
    } 
    const hovers: hoverTypes = {
        primary: 'hover:bg-zinc-600',
        error: 'hover:bg-red-600'
    }
    const shadows: shadowTypes = {
        primary: 'hover:shadow-zinc-300/50',
        error: 'hover:shadow-red-300/50'
    }
    
    const buttonStyles: string = `${variants[variant]} ${hovers[variant]} shadow-md ${shadows[variant]} rounded px-6 pb-2 pt-2.5 text-sm font-medium text-white`;
    
    return (
        <button {...props} className={buttonStyles}>{children}</button>
    )

}
