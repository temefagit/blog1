'use client'

export const Button = ({ children, variant = 'primary', ...props }) => {
    const variants = {
        primary: 'bg-zinc-800',
        error: 'bg-red-500'
    } 
    const hovers = {
        primary: 'hover:bg-zinc-600',
        error: 'hover:bg-red-600'
    }
    const shadows = {
        primary: 'hover:shadow-zinc-300/50',
        error: 'hover:shadow-red-300/50'
    }
    
    const buttonStyles = `${`${variants?.[variant]}`} ${`${hovers?.[variant]}`} shadow-md ${`${shadows?.[variant]}`} rounded px-6 pb-2 pt-2.5 text-sm font-medium text-white`;
    
    return (
        <button {...props} className={buttonStyles}>{children}</button>
    )

}