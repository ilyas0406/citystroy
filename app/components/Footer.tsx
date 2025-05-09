'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-4">
              <p>Телефон: <a href="tel:87132415637" className="underline hover:text-primary">8 (7132) 415637</a></p>
              <p>Email: <a href="mailto:citystroy2030@mail.ru" className="underline hover:text-primary">citystroy2030@mail.ru</a></p>
              <p>Юридический адрес: г. Актобе, ул. Газизы Жубановой 39Н, н/п 44</p>
              <p>Фактический адрес: г. Актобе, ул. Газизы Жубановой 39Н, офис 303, БЦ «Апельсин»</p>
              <p>Контактное лицо: Асхат Максатович Жалимбетов, <a href="tel:+77762528252" className="underline hover:text-primary">+7 776 252 82 52</a></p>

            </div>
          </div>


          <nav className="flex flex-col gap-2 mt-6 md:mt-0">
            <span className="text-xl font-bold mb-4 block">Навигация</span>
            <Link href="/" className="text-gray-400 hover:text-white font-medium mb-1">Главная</Link>
            <div className="flex flex-col gap-1 ml-0">
              <span className="text-gray-400 font-medium mb-1">Продукция</span>
              <div className="flex flex-col gap-1 ml-4">
                <Link href="/training-complexes" className="text-gray-400 hover:text-white">Учебно-тренировочные комплексы</Link>
                <Link href="/special-vehicles" className="text-gray-400 hover:text-white">Спецтехника для сил МЧС МВД и МО</Link>
                <Link href="/siz" className="text-gray-400 hover:text-white">Средства Индивидуальной Защиты</Link>
                <Link href="/equipment" className="text-gray-400 hover:text-white">Специальное оборудование</Link>
              </div>
            </div>

            <Link href="/contacts" className="text-gray-400 hover:text-white font-medium">Контакты</Link>
          </nav>

          <div>
            <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-[#D32F2F] hover:text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className="text-[#D32F2F] hover:text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </a>
              <a href="#" className="text-[#D32F2F] hover:text-white">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} City Stroy. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
