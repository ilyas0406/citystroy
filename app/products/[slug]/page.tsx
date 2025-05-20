import { notFound } from 'next/navigation';

const products = [
  { slug: 'teplodymokamera', title: 'Теплодымокамера' },
  { slug: 'seismotrenazher', title: 'Сейсмотренажер' },
  { slug: 'ognevoi-poligon', title: 'Огневой полигон' },
  { slug: 'abr', title: 'АБР (Автомобиль быстрого реагирования)' },
  { slug: 'reanimobil', title: 'Реанимобиль A/B/C' },
  { slug: 'aca', title: 'АСА (аварийно-спасательный автомобиль)' },
  { slug: 'avtobaklaboratoriya', title: 'Автобаклаборатория' },
  { slug: 'msa', title: 'Воздушно дыхательный аппарат - MSA (Германия)' },
  { slug: 'vodolaz', title: 'Водолазный дыхательный аппарат' },
  { slug: 'bop', title: 'Боевая одежда пожарного - БОП' },
  { slug: 'snaryazhenie', title: 'Снаряжения для спецназа' },
  { slug: 'kostyum-ximicheskii', title: 'Костюм изолирующий химический закрытого типа' },
  { slug: 'protivogaz', title: 'Противогаз' },
  { slug: 'kompressor-statsionar', title: 'Стационарный компрессор (высокого и среднего давления)' },
  { slug: 'kompressor-mobil', title: 'Мобильный компрессор (высокого и среднего давления)' },
];

import React from 'react';
import Image from 'next/image';
import SwatCarousel from '../../components/SwatCarousel';
import OgnevoyPoligonCarousel from '../../components/OgnevoyPoligonCarousel';
import AvtobaclabCarousel from '../../components/AvtobaclabCarousel';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.slug);
  if (!product) return notFound();

  if (product.slug === 'teplodymokamera') {
    return (
      <div className="min-h-screen bg-[#181818] text-white flex flex-col md:flex-row items-center justify-center p-8 gap-8">
        {/* Левая часть — текст */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-start max-w-xl">
          <h1 className="text-4xl font-bold mb-6">Теплодымокамера</h1>
          <div className="text-gray-300 text-base space-y-4">
            <p>Учебно-тренировочный комплекс «Теплодымокамера» (УТК) — это специализированный многофункциональный модульный комплекс, изготовленный на заказ с учетом всех требований безопасности. Предназначен для подготовки спасателей, пожарных и сотрудников специальных подразделений.</p>
            <p>Комплекс моделирует реальные сценарии пожара и аварийных ситуаций, позволяя отрабатывать навыки тушения возгораний, проведения спасательных операций и ликвидации последствий чрезвычайных ситуаций. Занятия в УТК способствуют развитию физической выносливости, адаптации к высоким температурам и устойчивости к эмоциональным и стрессовым нагрузкам.</p>
          </div>
        </div>
        {/* Правая часть — изображение */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <Image 
            src="/dymcamera/dymcamera5.jpg"
            alt="Теплодымокамера"
            width={800}
            height={600}
            className="rounded-lg shadow-xl object-cover"
            priority
          />
        </div>
      </div>
    );
  }

  // Индивидуальные описания для каждого продукта
  const productDescriptions: Record<string, React.ReactNode> = {
    'seismotrenazher': (
      <>
        <h1 className="text-4xl font-bold mb-6">Сейсмотренажер</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="text-gray-300 text-base mb-2 max-w-2xl">
          Симулятор землетрясения предназначен не только для повышения осведомленности населения о землетрясениях, но и для демонстрации индивидуального безопасного поведения и практических действий в случае землетрясения.
            <b>Возможности комплекса:</b>
            <ul className="list-disc ml-6">
              <li>Пульт управления симулятором</li>
              <li>Система двухсторонней симплексной связи</li>
              <li>Система видеонаблюдения</li>
              <li>Динамическая платформа (технологический отсек)</li>
              <li>Имитация жилой комнаты</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <Image 
               src="/seismo/24.avif"
              alt="Сейсмотренажер"
              width={650}
              height={500}
              className="rounded-2xl shadow-xl object-fill"
            />
          </div>
        </div>
      </>
    ),
    'ognevoi-poligon': (
      <>
        <h1 className="text-4xl font-bold mb-6">Огневой полигон</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="text-gray-300 text-base mb-2 max-w-2xl">
            Полномасштабный учебно-тренировочный комплекс, предназначенный для подготовки пожарных и спасателей к работе в самых сложных и опасных условиях. Комплекс позволяет максимально приблизить условия реальных чрезвычайных ситуаций, включая сложнейшие сценарии с огнем, дымом, высокой влажностью и замкнутыми пространствами. Используется для полноценной профессиональной подготовки личного состава служб спасения, формирования устойчивых навыков действий в экстремальных условиях.

            <b>Возможности комплекса:</b>
            <ul className="list-disc ml-6">
              <li>Отработка навыков тушения и применения спецтехники</li>
              <li>Работа в защитных костюмах и СИЗОД</li>
              <li>Тренировки по спасению людей в задымлённой зоне</li>
              <li>Развитие устойчивости к стрессовым факторам пожара</li>
            </ul>

            <b>Характеристики:</b>
            <ul className="list-disc ml-6">
              <li>Контейнеры от 2 до 12 м</li>
              <li>Камеры сжигания до 201 т с люками и цепями</li>
              <li>Система контроля температуры (Bluetooth)</li>
              <li>Лестницы, двери, крыши с элементами нагрузки</li>
              <li>Противопожарные и аварийные элементы</li>
            </ul>
            
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <OgnevoyPoligonCarousel />
          </div>
        </div>
      </>
    ),
    'abr': (
      <>
        <h1 className="text-4xl font-bold mb-6">Автомобиль быстрого реагирования (АБР)</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="text-gray-300 text-base mb-2 max-w-2xl">
            Автомобиль быстрого реагирования – это пожарный автомобиль первой помощи.<br/><br/>
            <b>Назначение:</b>
            <ul className="list-disc ml-6">
              <li>Доставка к месту пожара (аварии) личного состава, запаса огнетушащих веществ, технического вооружения и аварийно-спасательного оборудования и инструмента;</li>
              <li>Проведение аварийно-спасательных работ на месте ДТП;</li>
              <li>Тушение пожаров классов А, Б, С при помощи подачи воды и пены;</li>
              <li>Выполнение задач по ликвидации возгораний и последствий ДТП;</li>
              <li>Штатная кабина для размещения до 6 человек боевого расчета.</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <Image 
              src="/Abr/abr.avif"
              alt="Автомобиль быстрого реагирования"
              width={650}
              height={500}
              className="rounded-2xl shadow-xl object-fill"
            />
          </div>
        </div>
      </>
    ),
    'reanimobil': (
      <>
        <h1 className="text-4xl font-bold mb-6">Реанимобиль A/B/C</h1>
           <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="text-gray-300 text-base mb-2 max-w-2xl">
            <p className="mb-4">Реанимобиль предназначен для перевозки маломобильных пациентов, пострадавших с травмами и тяжёлобольных.</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Расширенный функционал для оказания медицинской помощи в пути</li>
              <li>Быстрая транспортировка в больницу</li>
              <li>Современное оборудование и комфорт для пациента и медицинского персонала</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <Image 
              src="/reanimobil/reanimobil.avif"
              alt="Реанимобиль"
              width={650}
              height={500}
              className="rounded-2xl shadow-xl object-fill"
            />
          </div>
        </div>
      </>
    ),
    'aca': (
      <>
        <h1 className="text-4xl font-bold mb-6">Аварийно-спасательный автомобиль (АСА)</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="text-gray-300 text-base mb-2 max-w-2xl">
            <p className="mb-4">Аварийно-спасательный автомобиль предназначен для оперативного реагирования в чрезвычайных ситуациях и оснащён всем необходимым для проведения спасательных работ:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Тушение очагов возгорания с использованием воды и пенообразователей;</li>
              <li>Оценка оперативной обстановки и передача данных в штаб реагирования;</li>
              <li>Выполнение аварийно-спасательных работ при ДТП и других ЧС;</li>
              <li>Оказание первой медицинской помощи пострадавшим на месте происшествия.</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <Image 
              src="/asa/asa.avif"
              alt="Аварийно-спасательный автомобиль"
              width={650}
              height={500}
              className="rounded-2xl shadow-xl object-fill"
            />
          </div>
        </div>
      </>
    ),
    'avtobaklaboratoriya': (
      <>
        <h1 className="text-4xl font-bold mb-6">Автобаклаборатория</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="text-gray-300 text-base mb-2 max-w-2xl">
            Санитарно-эпидемиологическая лаборатория для работы в зоне ЧС, разрушенной инфраструктуре, для проведения противоэпидемических мероприятий.<br/><br/>
            <b>Возможности:</b>
            <ul className="list-disc ml-6">
              <li>Диагностика возбудителей особо опасных инфекций;</li>
              <li>Проведение ПЦР-диагностики;</li>
              <li>Работа с биоматериалами и культурами;</li>
              <li>Автономная работа в полевых условиях.</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <AvtobaclabCarousel />
          </div>
        </div>
      </>
    ),
    'msa': (
      <>
        <h1 className="text-4xl font-bold mb-6">Воздушно-дыхательный аппарат MSA (Германия)</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="text-gray-300 text-lg mb-2 max-w-2xl">
            Воздушно-дыхательный аппарат предназначен для защиты органов дыхания пожарных и спасателей в условиях сильного задымления.<br/><br/>
            <b>Основные характеристики:</b>
            <ul className="list-disc ml-6 space-y-2">
              <li>Высокая степень защиты органов дыхания;</li>
              <li>Работа в условиях повышенной температуры;</li>
              <li>Регулировка подачи воздуха;</li>
              <li>Работа в задымленных помещениях.</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <Image 
              src="/msa/msa.png"
              alt="Воздушно-дыхательный аппарат MSA"
              width={250}
              height={160}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </>
    ),
    'vodolaz': (
      <>
        <h1 className="text-4xl font-bold mb-6">Водолазный дыхательный аппарат</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="text-gray-300 text-xl mb-4 max-w-3xl">
            Аппарат для дыхания под водой с замкнутым циклом. Используется для проведения подводных работ на больших глубинах.<br/><br/>
            <b>Характеристики:</b>
            <ul className="list-disc ml-6 space-y-3 text-lg">
              <li>Работа на глубинах до 60 метров с полной безопасностью;</li>
              <li>Автономность работы до 4 часов без перезарядки;</li>
              <li>Регенеративный дыхательный контур с полной очисткой;</li>
              <li>Надежная защита от внешнего давления.</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <Image 
              src="/vda/vda.jpg"
              alt="Водолазный дыхательный аппарат"
              width={450}
              height={300}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </>
    ),
    'bop': (
      <>
        <h1 className="text-4xl font-bold mb-6">Боевая одежда пожарного (БОП)</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="text-gray-300 text-xl mb-4 max-w-3xl">
            Конструктивный костюм пожарного:<br/>
            <ul className="list-disc ml-6 space-y-3 text-lg">
              <li>Эргономичный дизайн для эффективности и комфорта;</li>
              <li>Высокий уровень защиты и прочности;</li>
              <li>Защита от перегрева и пламени;</li>
              <li>Превосходная воздухопроницаемость;</li>
              <li>Разные цветовые варианты и типы лент;</li>
              <li>Опционально со съемной подкладкой;</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <Image 
              src="/bop/bop.jpg"
              alt="Боевая одежда пожарного"
              width={350}
              height={250}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </>
    ),
    'snaryazhenie': (
      <>
        <h1 className="text-4xl font-bold mb-6">Снаряжение для спецназа (SWAT)</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="text-gray-300 text-xl mb-4 max-w-3xl">
            Надёжное и современное снаряжение для профессиональных подразделений спецназа.<br/><br/>
            <b>Основные компоненты:</b>
            <ul className="list-disc ml-6 space-y-3 text-lg">
              <li>Тактические шлемы с бронировкой и креплениями для оборудования;</li>
              <li>Бронежилеты с высоким уровнем защиты;</li>
              <li>Разгрузочные жилеты с индивидуальной комплектацией;</li>
              <li>Активные тактические наушники с шумоподавлением;</li>
              <li>Бронепластины повышенного класса защиты;</li>
              <li>Шлемные коммуникационные системы.</li>
            </ul>
          </div>
          <div className="md:w-3/4 flex justify-center items-center">
            <SwatCarousel />
          </div>
        </div>
      </>
    ),
    'kostyum-ximicheskii': (
      <>
        <h1 className="text-4xl font-bold mb-6">Костюм изолирующий химический закрытого типа</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="text-gray-300 text-xl mb-4 max-w-3xl">
            Защитный костюм для работы с химическими веществами, газами, кислотами, щелочами. Разработан для максимальной безопасности при работе с опасными химическими веществами.<br/><br/>
            <b>Применение:</b>
            <ul className="list-disc ml-6 space-y-3 text-lg">
              <li>Газоспасательные и аварийные работы;</li>
              <li>Обслуживание резервуаров, чистка сточных вод;</li>
              <li>Профилактика и ликвидация утечек опасных веществ;</li>
              <li>Герметичная молния и крепления для максимальной безопасности.</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <Image 
              src="/kostyum-ximicheskii/kostyum-ximicheskii.jpg"
              alt="Костюм изолирующий химический"
              width={450}
              height={300}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </>
    ),
    'protivogaz': (
      <>
        <h1 className="text-4xl font-bold mb-6">Противогаз</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="text-gray-300 text-xl mb-4 max-w-3xl">
            Полнолицевая маска 3S фирмы MSA AUER — мировой лидер по количеству проданных масок.<br/><br/>
            <b>Преимущества:</b>
            <ul className="list-disc ml-6 space-y-3 text-lg">
              <li>Мягкий и удобный обтюратор;</li>
              <li>Широкие ремни и глубокий подмасочник для плотного прилегания;</li>
              <li>Смотровое стекло из ударопрочного поликарбоната;</li>
              <li>Быстрое надевание и снятие даже под шлемом;</li>
              <li>Возможность носить на груди в постоянной готовности.</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <Image 
              src="/protivogaz/protivogaz.jpeg"
              alt="Противогаз MSA AUER"
              width={450}
              height={300}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </>
    ),
    'kompressor-statsionar': (
      <>
        <h1 className="text-4xl font-bold mb-6">Стационарный компрессор (высокого и среднего давления)</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="text-gray-300 text-xl mb-4 max-w-3xl">
            Специальное оборудование для пожарных частей и промышленных объектов.<br/><br/>
            <b>Характеристики:</b>
            <ul className="list-disc ml-6 space-y-3 text-lg">
              <li>Производительность и надежность для заправки дыхательных аппаратов и баллонов;</li>
              <li>Работа в интенсивных режимах;</li>
              <li>Современные системы фильтрации и контроля.</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <Image 
              src="/compressor/91.avif"
              alt="Стационарный компрессор"
              width={450}
              height={300}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </>
    ),
    'kompressor-mobil': (
      <>
        <h1 className="text-4xl font-bold mb-6">Мобильный компрессор (высокого и среднего давления)</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="text-gray-300 text-xl mb-4 max-w-3xl">
            Мобильная версия компрессора для оперативной работы в полевых условиях.<br/><br/>
            <b>Преимущества:</b>
            <ul className="list-disc ml-6 space-y-3 text-lg">
              <li>Компактность и мобильность;</li>
              <li>Быстрая заправка дыхательных аппаратов;</li>
              <li>Использование в аварийных ситуациях и при ЧС.</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <Image 
              src="/compressormobil/92.avif"
              alt="Мобильный компрессор"
              width={450}
              height={300}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </>
    ),
  };

  if (productDescriptions[product.slug]) {
    return (
      <div className="min-h-screen bg-[#181818] text-white flex flex-col items-center justify-start pt-16 p-8">
        {productDescriptions[product.slug]}
      </div>
    );
  }

  // fallback на случай отсутствия описания
  return (
    <div className="min-h-screen bg-[#181818] text-white flex flex-col items-center justify-start pt-16 p-8">
      <h1 className="text-5xl font-bold mb-10">{product.title}</h1>
      <p className="text-xl text-gray-300">Описание и характеристики появятся здесь.</p>
    </div>
  );
}