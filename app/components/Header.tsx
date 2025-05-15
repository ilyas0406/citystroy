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

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      if (currentScrollY > 0) {
        if (currentScrollY > lastScrollY) {
          setShowHeader(false);
        } else {
          setScrollTimeout(
            setTimeout(() => {
              setShowHeader(true);
            }, 150)
          );
        }
      } else {
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  return (
    <header 
      className={`bg-[#000000]/80 backdrop-blur-sm text-white fixed w-full z-50 transition-all duration-500 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
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
            <button className="bg-[#2C2C2C] hover:bg-[#D32F2F] text-white p-2 rounded-lg transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
