import { useState } from 'react';
import { useDarkMode } from "./darkmode-button"
import { Sun, Moon, Menu, X } from "lucide-react";

function NavigationBar() {
  const [theme, toggleTheme] = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="relative bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-bold">Portfolio</h1>

          {/* Desktop Menu */}

        <div className='flex flex-row space-x-5'>
           
            <ul className="hidden md:flex space-x-8 items-center">
                {navLinks.map((link) => (
                <li key={link.href}>
                    <a
                    href={link.href}
                    className="relative pb-1 text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 dark:after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                    >
                    {link.label}
                    </a>
                </li>
                ))}
            </ul>

            <button
            onClick={toggleTheme}
            className="hidden md:block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
            {theme === 'light' ? (
                <Moon size={20} />
            ) : (
                <Sun size={20} />
            )}
            </button>
        </div>        
          
        {/* Mobile Menu Toggle */}
        <div className='block md:hidden flex flex-row space-x-5'>
            <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 
            dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
            {theme === 'light' ? (
                <Moon size={20} />
            ) : (
                <Sun size={20} />
            )}
            </button>
        </div>

        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full z-20 overflow-hidden rounded-b-2xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 shadow-lg transition-all duration-300 ease-out 
            ${
            isMenuOpen
              ? 'max-h-60 opacity-100 translate-y-0 py-4'
              : 'max-h-0 opacity-0 invisible -translate-y-3 py-0 pointer-events-none'
          }`}
        >
          <ul className="flex flex-col space-y-3 px-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-4 py-2 text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar