'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1C1C] text-white">
      {/* Верхняя часть футера */}
      <div className="py-12 border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Левая часть - Контакты */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Контактные данные</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Телефон</h4>
                    <a href="tel:77172249673" className="text-gray-400 hover:text-white transition-colors">+7 (7172) 24-96-73</a>
                    <a href="tel:77009782119" className="text-gray-400 hover:text-white transition-colors">+7 700 978 2119</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Email</h4>
                    <a href="mailto:citystroy2030@mail.ru" className="text-gray-400 hover:text-white transition-colors">citystroy2030@mail.ru</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-200">Адреса</h4>
                    <div className="text-gray-400 space-y-1">
                      <p>г. Актобе, ул. Газизы Жубановой 39Н, н/п 44</p>
                      <p>г. Астана, пр. Мангилик Ел 37, офис 62</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая часть - Навигация */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Компания</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">О нас</Link></li>
                  <li><Link href="/contact-form" className="text-gray-400 hover:text-white transition-colors">Контакты</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Продукция</h3>
                <ul className="space-y-2">
                  <li><Link href="/uchebno-trenirovochnye-kompleksy" className="text-gray-400 hover:text-white transition-colors">Учебные комплексы</Link></li>
                  <li><Link href="/spetstehnika" className="text-gray-400 hover:text-white transition-colors">Спецтехника</Link></li>
                  <li><Link href="/sredstva-individualnoy-zashchity" className="text-gray-400 hover:text-white transition-colors">СИЗ</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className="py-6 bg-[#151515]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} City Stroy. Все права защищены.
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
