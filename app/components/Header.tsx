'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface MenuItem {
  title: string;
  href: string;
  subItems?: { title: string; href: string }[];
  className?: string;
}

const Header = () => {
  const menuItems: MenuItem[] = [
    { 
      title: 'Продукция', 
      href: '/products',
      subItems: [
        { title: 'Учебно-тренировочные комплексы', href: '/uchebno-trenirovochnye-kompleksy' },
        { title: 'Спецтехника для сил МЧС МВД и МО', href: '/spetstehnika' },
        { title: 'Средства Индивидуальной Защиты', href: '/sredstva-individualnoy-zashchity' },
        { title: 'Специальное оборудование', href: '/spetsialnoe-oborudovanie' }
      ]
    },

    { title: 'О компании', href: '/about' },
    { title: 'Контакты', href: '/#contact-form', className: 'bg-[#D32F2F] text-white' },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setIsMobileMenuOpen(false);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const renderMenuItem = (item: MenuItem) => {
    if (item.subItems) {
      return (
        <div 
          key={item.href} 
          className="relative group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button 
            className="flex items-center bg-[#2C2C2C] hover:bg-[#D32F2F] text-white px-4 py-2 rounded-lg transition-colors"
          >
            {item.title}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            className={`absolute right-0 mt-2 w-56 bg-[#2C2C2C] rounded-lg shadow-lg z-50 transition-all duration-300 ${
              isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <div className="py-2">
              {item.subItems.map((subItem) => (
                <Link
                  key={subItem.href}
                  href={subItem.href}
                  className="block px-4 py-3 text-base hover:bg-[#D32F2F] hover:text-white transition-colors"
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    }
    return (
      <Link 
        key={item.href} 
        href={item.href} 
        className={`bg-[#2C2C2C] hover:bg-[#D32F2F] text-white px-4 py-2 rounded-lg transition-colors ${item.className || ''}`}
      >
        {item.title}
      </Link>
    );
  };

  // Закрываем мобильное меню при изменении размера окна на десктопный
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="bg-[#000000]/80 backdrop-blur-sm text-white fixed w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center h-18">
          <Link href="/">
            <Image
              src="/logo.avif"
              alt="City Stroy"
              width={80}
              height={20}
              priority
            />
          </Link>
          <div className="hidden md:flex items-center space-x-2">
            <Link 
              href="/" 
              className="bg-[#2C2C2C] hover:bg-[#D32F2F] text-white px-4 py-2 rounded-lg transition-colors"
            >
              Главная
            </Link>
            {menuItems.map(renderMenuItem)}
          </div>
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="bg-[#2C2C2C] hover:bg-[#D32F2F] text-white p-2 rounded-lg transition-colors"
              aria-label="Меню"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Мобильное меню */}
          <div 
            className={`md:hidden fixed inset-0 bg-black/80 z-40 transition-all duration-300 transform ${
              isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
            onClick={closeMobileMenu}
          >
            <div 
              className="absolute top-20 right-4 bg-[#2C2C2C] rounded-lg shadow-lg w-64 p-4 flex flex-col space-y-2"
              onClick={(e) => e.stopPropagation()}
            >
              <Link 
                href="/" 
                className="block px-4 py-3 text-base hover:bg-[#D32F2F] hover:text-white rounded-lg transition-colors"
                onClick={closeMobileMenu}
              >
                Главная
              </Link>
              {menuItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-base hover:bg-[#D32F2F] hover:text-white rounded-lg transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {item.title}
                  </Link>
                  {item.subItems && isMobileMenuOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#D32F2F] hover:text-white rounded-lg transition-colors"
                          onClick={closeMobileMenu}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;