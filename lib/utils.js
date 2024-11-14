// Format date to a readable string
export const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}
// @/lib/utils.js

export function cn(...classNames) {
    return classNames.filter(Boolean).join(' ');
}

// Truncate text to a specified length
export const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text
    return text.substr(0, maxLength) + '...'
}

// Capitalize the first letter of each word in a string
export const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, l => l.toUpperCase())
}

// Generate a random color (for demo purposes)
export const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

// Simple email validation
export const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

// Debounce function for performance optimization
export const debounce = (func, delay) => {
    let timeoutId
    return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => func(...args), delay)
    }
}