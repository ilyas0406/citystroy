'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Контакты */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-base text-gray-200">
              <li>
                Телефон: <a href="tel:87132415637" className="underline hover:text-primary">8 (7132) 415637</a>
              </li>
              <li>
                Email: <a href="mailto:citystroy2030@mail.ru" className="underline hover:text-primary">citystroy2030@mail.ru</a>
              </li>
              <li>г.Актобе, ул. Газизы Жубановой 39Н, н/п 44</li>
              <li>г.Астана, пр.Мангилик Ел 37, офис 62</li>
              <li>
                Контактное лицо: Асхат Максатович — <a href="tel:+77762528252" className="underline hover:text-primary">+7 776 252 82 52</a>
              </li>
            </ul>
          </div>

          {/* Навигация */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2 text-base text-gray-300">
              <li><Link href="/" className="hover:text-white">Главная</Link></li>
              <li>
                <span className="font-medium">Продукция</span>
                <ul className="mt-1 space-y-1 ml-4">
                  <li><Link href="/training-complexes" className="hover:text-white">Учебные комплексы</Link></li>
                  <li><Link href="/special-vehicles" className="hover:text-white">Спецтехника</Link></li>
                  <li><Link href="/siz" className="hover:text-white">СИЗ</Link></li>
                  <li><Link href="/equipment" className="hover:text-white">Оборудование</Link></li>
                </ul>
              </li>
              <li><Link href="/contacts" className="hover:text-white font-medium">Контакты</Link></li>
            </ul>
          </div>

          {/* Социальные сети */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-[#D32F2F] hover:text-white flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5A4.5 4.5 0 0023 3z"/>
                </svg>
                Twitter
              </a>
              <a href="#" className="text-[#D32F2F] hover:text-white flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                </svg>
                Telegram
              </a>
              <a href="#" className="text-[#D32F2F] hover:text-white flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                </svg>
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Подвал */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300 text-base">
          <p>© {new Date().getFullYear()} City Stroy. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
