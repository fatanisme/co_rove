'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Button from './ui/Button';
import Cookies from 'js-cookie';  // Make sure js-cookie is installed

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check the login status when the component mounts
    useEffect(() => {
        const token = Cookies.get('authToken');
        setIsLoggedIn(!!token);  // Set isLoggedIn based on whether the token exists
    }, []);

    const handleLogout = () => {
        // Remove token from cookies or localStorage
        Cookies.remove('authToken');  // Remove token from cookies
        setIsLoggedIn(false);  // Update state to reflect logged out status
    };

    // Data for dropdown menu items
    const pageItems = [
        { label: 'Maintenance Data', href: '/pages/data-pemeliharaan' },
        { label: 'News', href: '/pages/berita' },
    ];

    // Handle click outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <span className="ml-2 text-xl font-bold text-red-600">CO-ROVE</span>
                </Link>

                <nav className="hidden md:flex space-x-4">
                    <Link href="/" className="text-gray-600 hover:text-red-600">Home</Link>
                    <Link href="/map" className="text-gray-600 hover:text-red-600">Map</Link>

                    {/* Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            ref={buttonRef}
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                            className="text-gray-600 hover:text-red-600 focus:outline-none flex items-center"
                        >
                            Monitoring
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
                    {/* Show Logout button if logged in */}
                    {isLoggedIn ? (
                        <Button onClick={handleLogout} variant="outline">
                            Logout
                        </Button>
                    ) : (
                        <>
                            {/* Show Login and Register buttons if not logged in */}
                            <Button href="/login" variant="outline">
                                Login
                            </Button>
                            <Button href="/register">Register</Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
