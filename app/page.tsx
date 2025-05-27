'use client';

import Link from 'next/link';
import FlipCard from './components/FlipCard';
import RotatingLogo from './components/RotatingLogo';
import InfinityPartnersCarousel from './components/InfinityPartnersCarousel';









export default function Home() {
  return (
    <main className="bg-[#000000] text-white ">
      {/* Hero Section */}
      <section id="hero-section" className="relative h-screen w-full overflow-hidden m-0 p-0">
      <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover z-0"
>
  <source src="/citystroyhome.mp4" type="video/mp4" />
</video>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Комплексные решения по производству и поставке оборудования для  обеспечения безопасности
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Поставка тренажёров, спецтехники и СИЗ для МЧС, МВД, МО и промышленных объектов
            </p>
            <Link
              href="#contact-form"
              className="inline-block bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Оставить заявку
            </Link>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="w-full bg-[#181818] py-12 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-stretch gap-8 w-full">
          <div className="flex-1 flex flex-col justify-center max-w-5xl text-left break-words" style={{ hyphens: 'auto' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-left">О компании</h2>
            <p className="text-base md:text-lg mb-6 text-left" style={{ maxWidth: '100%' }}>
              СитиСтрой-2030 — надёжный поставщик учебно-тренировочных комплексов, специализированного оборудования и строительных решений в сфере промышленной безопасности. С 2010 года реализуем проекты по всей территории Казахстана для государственных и частных заказчиков — и для государственных, и для частных предприятий. Стабильно обеспечиваем качество, безопасность и современные технологии для ваших задач.
            </p>
            <a href="/about" className="inline-block bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors w-auto self-start">Подробнее</a>
          </div>
          <div className="flex-1 flex justify-center items-center md:justify-center md:items-center mt-8 md:mt-0">
            <RotatingLogo />
          </div>
        </div>
      </section>

      {/* Key Directions */}
      <section className="carbonBg relative py-2">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/50 to-transparent z-10"></div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-center mt-16">Наши ключевые направления</h2>
        <div className="flip-cards grid grid-cols-1 md:grid-cols-3 gap-8 py-16 mt-8">
          <FlipCard 
            frontTitle="Производство"
            frontText="Собственное производство по ГОСТ и ТУ — контроль качества на каждом этапе"
            backText="Работаем с МЧС, МО, МВД и корпоративными клиентами по всему Казахстану"
          />
          <FlipCard
            frontTitle="Поставка"
            frontText="Поставляем спецтехнику, СИЗ, оборудование и снаряжение для МВД, МЧС и др."
            backText="Гарантируем наличие, сроки и полное сопровождение поставки"
          />
          <FlipCard
            frontTitle="ПНР"
            frontText="Профессиональный монтаж и пусконаладка под ключ"
            backText="Инженеры выезжают на объект, обучают персонал и обеспечивают поддержку"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="w-full bg-[#23232b] py-16 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-stretch">
          {/* Форма связи */}
          <div className="flex-1 bg-[#181818] rounded-2xl shadow-lg p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6">Связаться с нами</h2>
            <form className="space-y-5">
              <input type="text" placeholder="Имя" className="w-full px-4 py-3 bg-secondary text-white rounded-lg focus:outline focus:ring-2 focus:ring-primary" />
              <input type="tel" placeholder="Телефон" className="w-full px-4 py-3 bg-secondary text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="email" placeholder="E-mail" className="w-full px-4 py-3 bg-secondary text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
              <textarea placeholder="Сообщение" rows={4} className="w-full px-4 py-3 bg-secondary text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
              <button type="submit" className="w-full bg-primary hover:bg-destructive text-primary-foreground py-4 rounded-lg font-semibold transition-colors">Отправить</button>
            </form>
          </div>
          {/* Контактные данные */}
          <div className="flex-1 bg-[#181818] rounded-2xl shadow-lg p-8 flex flex-col justify-start">
            <h2 className="text-2xl font-bold mb-6">Контакты</h2>
            <div className="space-y-4 text-lg ">
              <div><span className="font-semibold">г. Актобе,</span> ул. Газизы Жубановой 39Н, н/п 44</div>
              <div><span className="font-semibold">г. Астана,</span> пр. Мангилик Ел 37, офис 62</div>
              <div><span className="font-semibold">Телефон:</span> <a href="tel:+7 (7172) 24-96-73" className="underline hover:text-primary">+7 (7172) 24-96-73</a></div>
              <div><span className="font-semibold">E-mail:</span> <a href="mailto:citystroy2030@mail.ru" className="underline hover:text-primary">citystroy2030@mail.ru</a></div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Carousel */}
      <section className="w-full carbonBg">
        <div className="container mx-auto px-4">
          <InfinityPartnersCarousel />
        </div>
      </section>
    </main>
  );
}