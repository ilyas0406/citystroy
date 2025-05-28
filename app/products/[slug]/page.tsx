import { notFound } from 'next/navigation';

const products = [
  { slug: 'teplodymokamera', title: 'Теплодымокамера' },
  { slug: 'seismotrenazher', title: 'Сейсмотренажер' },
  { slug: 'ognevoi-poligon', title: 'Огневой полигон' },
  { slug: 'modulnyj-strelkovyj-tir', title: 'Модульный стрелковый тир' },
  { slug: 'shturmovik', title: 'Штурмовик' },
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
import ACACarousel from '../../components/ACACarousel';
import ShturmovikCarousel from '../../components/ShturmovikCarousel';
import TirCarousel from '../../components/TirCarousel';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.slug);
  if (!product) return notFound();

  if (product.slug === 'avtobaklaboratoriya') {
    return (
      <div className="min-h-screen bg-[#181818] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Автобаклаборатория</h1>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <AvtobaclabCarousel />
            </div>
            <div className="md:w-1/2 space-y-6">
              <p className="text-lg text-gray-300">
                Автобаклаборатория — это специализированный мобильный комплекс санитарно-эпидемиологического назначения, предназначенный для проведения противоэпидемических мероприятий.
              </p>
              
              <div className="bg-[#222] p-6 rounded-xl">
                <p className="mb-4">
                  Лаборатория обеспечивает выполнение противоэпидемических, диагностических и профилактических мероприятий в условиях очагов инфекционных заболеваний, а также при техногенных авариях и чрезвычайных ситуациях. В случае падения ракет и выброса опасных веществ лаборатория осуществляет отбор проб, идентификацию токсичных и химически опасных соединений, а также экспресс оценку степени загрязнения окружающей среды и угрозы для здоровья населения.
                </p>
              </div>

              <div className="bg-[#222] p-6 rounded-xl">
                <h2 className="text-2xl font-semibold mb-4 text-red-500">🔹 Основные возможности</h2>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Проведение экспресс-диагностики возбудителей особо опасных, в том числе высокопатогенных инфекций (чума, холера, сибирская язва, бруцеллёз, сальмонеллёз, коронавирусы и др.)</li>
                  <li>Оперативное реагирование на биологические и химические угрозы, включая последствия падения ракет с выбросом токсичных веществ</li>
                  <li>Отбор и анализ проб воздуха, воды, почвы и биоматериала для выявления загрязнений</li>
                  <li>Выполнение бактериологических и вирусологических исследований</li>
                  <li>Проведение санитарно-гигиенического и эпидемиологического мониторинга в реальном времени</li>
                  <li>Контроль за дезинфекцией, стерильностью, условиями хранения проб и реагентов</li>
                  <li>Автономная работа с поддержанием необходимого температурного режима и биологической безопасности (BSL 2/BSL 3)</li>
                  <li>Функционирование в качестве опорного пункта при развёртывании мобильных пунктов карантинного контроля</li>
                </ul>
              </div>

              <div className="bg-[#222] p-6 rounded-xl">
                <h2 className="text-2xl font-semibold mb-4 text-red-500">🔹 Сферы применения</h2>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Ликвидация последствий чрезвычайных ситуаций</li>
                  <li>Проведение плановых санитарно-эпидемиологических обследований в труднодоступных и удалённых районах</li>
                  <li>Медицинское сопровождение массовых мероприятий, полевых лагерей, миссий</li>
                  <li>Поддержка научно-исследовательской или экспедиционной деятельности</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (product.slug === 'modulnyj-strelkovyj-tir') {
    return (
      <div className="min-h-screen bg-[#181818] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Модульный стрелковый тир</h1>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <TirCarousel />
            </div>
            <div className="md:w-1/2 space-y-6">
              <p className="text-lg text-gray-300">
                Модульный стрелковый тир предназначен для профессиональной подготовки, идеально подходящие для армии, полиции, спецподразделений и охранных структур. Полностью автономные и экологически безопасные комплексы размещаются в модульных помещениях и обеспечивают реальную стрельбу в защищённой и управляемой среде.
              </p>
              
              <div className="bg-[#222] p-6 rounded-xl">
                <h2 className="text-2xl font-semibold mb-4 text-red-500">🔹 Ключевые преимущества</h2>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Мобильность и расширяемость — от 1 до 20+ полос стрельбы</li>
                  <li>Готов к работе за 30–180 дней</li>
                  <li>100% баллистическая защита</li>
                  <li>Экологическая безопасность: HEPA-фильтрация, система HVAC, контроль свинца</li>
                  <li>Круглогодичная эксплуатация — не зависит от погодных условий</li>
                  <li>Низкие эксплуатационные расходы и быстрая окупаемость</li>
                </ul>
              </div>

              <div className="bg-[#222] p-6 rounded-xl">
                <h2 className="text-2xl font-semibold mb-4 text-red-500">🔹 Настраиваемые опции</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Учебные классы</li>
                    <li>Баллистические модули</li>
                    <li>Взрывозащитные комнаты</li>
                    <li>Камеры и оборудование для тестирования</li>
                  </ul>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Модули для экспертиз</li>
                    <li>Уборочные системы</li>
                    <li>Комнаты отдыха, санузлы</li>
                    <li>Мобильные версии на прицепах (MCSATS)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (product.slug === 'shturmovik') {
    return (
      <div className="min-h-screen bg-[#181818] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Учебно-тренировочный комплекс «Штурмовик»</h1>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <ShturmovikCarousel />
            </div>
            <div className="md:w-1/2 space-y-6">
              <p className="text-lg text-gray-300">
                Учебно-тренировочный комплекс «Штурмовик» — это современная многофункциональная модульная башня, предназначенная для отработки навыков тактического штурма, высотных операций, спасательных работ и тренировок в условиях, приближенных к реальным боевым условиям.
              </p>
              
              <div className="bg-[#222] p-6 rounded-xl">
                <h2 className="text-2xl font-semibold mb-4 text-red-500">🔹 Назначение</h2>
                <p className="mb-4">Комплекс разработан для тренировок:</p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Специальных подразделений (МВД, МО, КНБ)</li>
                  <li>Подразделений охраны и служб быстрого реагирования</li>
                  <li>Участников спортивных и экстремальных мероприятий</li>
                </ul>
              </div>

              <div className="bg-[#222] p-6 rounded-xl">
                <h2 className="text-2xl font-semibold mb-4 text-red-500">🔹 Функциональные возможности</h2>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Отработка вертикального штурма с использованием альпинистского снаряжения</li>
                  <li>Репеллинг, спуск по канату, подъем по штурмовой лестнице</li>
                  <li>Работа в задымленных или затемненных зонах (при использовании спецэффектов)</li>
                  <li>Тренировка действий в многоэтажных зданиях</li>
                  <li>Симуляция захвата/освобождения заложников, тактических зачисток</li>
                </ul>
              </div>

              <div className="bg-[#222] p-6 rounded-xl">
                <h2 className="text-2xl font-semibold mb-4 text-red-500">🔹 Преимущества</h2>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Быстрая сборка и демонтаж — возможна мобильная установка</li>
                  <li>Прочная и устойчивая конструкция, рассчитанная на интенсивную эксплуатацию</li>
                  <li>Возможность индивидуальной адаптации под нужды заказчика</li>
                  <li>Соответствие требованиям безопасности и стандартам подготовки спецподразделений</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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
        <h1 className="text-4xl font-bold mb-6">Сейсмотренажёр</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="text-gray-300 text-base space-y-4 max-w-2xl">
            <p>Сейсмотренажёр — это специализированный симулятор землетрясения, предназначенный для повышения осведомлённости населения о природных катастрофах и формирования навыков безопасного поведения.</p>
            <p>Устройство имитирует сейсмические колебания различной интенсивности и позволяет на практике отработать алгоритмы действий при землетрясении. Сейсмотренажёр используется для обучения, а также для проведения демонстраций на учебных мероприятиях.</p>
            <p>Цель использования — не только информирование, но и формирование устойчивых моделей поведения в экстренной ситуации, что способствует снижению риска травм и паники.</p>
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
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <OgnevoyPoligonCarousel />
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
              src="/reanimobil/reanimobilwhite1.jpg"
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
          <div className="text-gray-300 text-base space-y-4 max-w-2xl">
            <p>Аварийно-спасательный автомобиль — это специализированный пожарный автомобиль первой помощи, предназначенный для оперативной доставки пожарных подразделений к месту чрезвычайных ситуаций, включая пожары, дорожно-транспортные происшествия и техногенные аварии.</p>
            
            <p>Аварийно-спасательный автомобиль выполняет следующие задачи:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>доставка личного состава, огнетушащих веществ, технического оснащения и аварийно-спасательного оборудования к месту происшествия;</li>
              <li>проведение аварийно-спасательных работ, включая ликвидацию последствий ДТП;</li>
              <li>оказание первичной помощи пострадавшим и обеспечение безопасности на месте ЧС.</li>
            </ul>
            
            <p>По требованию Заказчика аварийно-спасательный автомобиль может быть изготовлен на базе различных шасси, таких как Toyota Hilux, Iveco, Газель, Ford, КамАЗ.</p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <ACACarousel />
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
        <h1 className="text-4xl font-bold mb-6">Воздушно-дыхательный аппарат</h1>
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
              src="/msa/msa.jpg"
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