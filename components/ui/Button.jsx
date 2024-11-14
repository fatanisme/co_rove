import React from 'react'
import Link from 'next/link'

const Button = ({ href, onClick, children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = 'inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2'
    const variants = {
        primary: 'text-white bg-red-600 hover:bg-red-700 focus:ring-red-500',
        secondary: 'text-red-700 bg-red-100 hover:bg-red-200 focus:ring-red-500',
        outline: 'text-red-600 bg-white border-red-600 hover:bg-red-50 focus:ring-red-500',
    }

    const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`

    if (href) {
        return (
            <Link href={href} className={buttonStyles} {...props}>
                {children}
            </Link>
        )
    }

    return (
        <button className={buttonStyles} onClick={onClick} {...props}>
            {children}
        </button>
    )
}

export default Button