"use client"
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Button from './ui/Button'

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)  // Referensi untuk dropdown
    const buttonRef = useRef(null)  // Referensi untuk tombol dropdown (opsional)

    // Data untuk menu dropdown
    const pageItems = [
        { label: 'Data Spasial Temporal', href: '/pages/data-spasial-temporal' },
        { label: 'Data Jenis Mangrove', href: '/pages/data-jenis-mangrove' },
        { label: 'Data Pemeliharaan', href: '/pages/data-pemeliharaan' },
        { label: 'Berita', href: '/pages/berita' },
    ]

    // Mengatur efek untuk mendeteksi klik di luar dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Menutup dropdown jika klik di luar dropdown atau tombol
            if (
                dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false)
            }
        }

        // Menambahkan event listener untuk klik di luar
        document.addEventListener('mousedown', handleClickOutside)

        // Membersihkan event listener saat komponen unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])  // Efek hanya dijalankan sekali saat komponen dimounting

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <span className="ml-2 text-xl font-bold text-red-600">CO-ROVE</span>
                </Link>

                <nav className="hidden md:flex space-x-4">
                    <Link href="/" className="text-gray-600 hover:text-red-600">Home</Link>
                    <Link href="/about" className="text-gray-600 hover:text-red-600">About</Link>

                    {/* Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            ref={buttonRef}
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                            className="text-gray-600 hover:text-red-600 focus:outline-none flex items-center"
                        >
                            Pages
                            <img
                                src="/images/dropdown.svg"
                                alt="Dropdown Icon"
                                className="ml-2 w-4 h-4 transition-transform duration-300 transform"
                                style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            />
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                                <div className="py-1">
                                    {pageItems.map((item, index) => (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </nav>

                <div className="flex items-center space-x-4">
                    <Button href="/login" variant="outline">Login</Button>
                    <Button href="/register">Register</Button>
                </div>
            </div>
        </header>
    )
}

export default Header
