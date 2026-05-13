import { useState, useEffect } from 'react';
import { useDarkMode } from "./darkmode-button";
import { Sun, Moon, Menu, X } from "lucide-react";

const useNavigation = (navLinks: { href: string }[]) => {
  const [activeLink, setActiveLink] = useState('home');

  const handleScroll = (href: string) => {
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveLink('home');
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80; 
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
      setActiveLink(href.slice(1));
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navLinks]);

  return { activeLink, handleScroll };
};

interface NavItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  mobile?: boolean;
}

export const NavItem = ({ label, isActive, onClick, mobile }: NavItemProps) => {
  const baseStyles = mobile 
    ? `w-full text-left px-4 py-3 rounded-lg transition-all ${isActive ? 'bg-teal-50 dark:bg-teal-900/20 text-teal-600 font-bold' : 'text-gray-600 dark:text-gray-300'}`
    : `relative pb-1 text-sm font-medium transition-colors duration-300 cursor-pointer ${isActive ? 'text-teal-500' : 'text-gray-600 dark:text-gray-300 hover:text-teal-500'}`;

  const underlineStyles = !mobile && `after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-teal-500 after:transition-all after:duration-300 ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`;

  return (
    <button onClick={onClick} className={`${baseStyles} ${underlineStyles}`}>
      {label}
    </button>
  );
};

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#accomplishments", label: "Accomplishments" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function NavigationBar() {
  const [theme, toggleTheme] = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeLink, handleScroll } = useNavigation(NAV_LINKS);

  const onLinkClick = (href: string) => {
    handleScroll(href);
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className='cursor-pointer' onClick={() => onLinkClick('#home')}>
          <p className='text-sm dark:text-white font-medium'>Online Portfolio</p>
          <h1 className="text-lg/3 dark:text-white font-bold">
            Nathaniel Aniban
          </h1>
        </div>

        <div className="flex items-center space-x-5">
          <ul className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavItem 
                  {...link} 
                  isActive={activeLink === link.href.slice(1)} 
                  onClick={() => onLinkClick(link.href)} 
                />
              </li>
            ))}
          </ul>

          <button onClick={toggleTheme} className="p-2 rounded-lg transition transition-all duration-100 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden dark:text-white p-2 transition transition-all duration-100 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute w-full bg-white dark:bg-gray-800 transition-all ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="p-4 space-y-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavItem 
                {...link} 
                mobile 
                isActive={activeLink === link.href.slice(1)} 
                onClick={() => onLinkClick(link.href)} 
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}