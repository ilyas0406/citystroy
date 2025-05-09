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

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);
  if (!product) return notFound();

  if (product.slug === 'teplodymokamera') {
    const DymcameraCarousel = require('../../components/DymcameraCarousel').default;
    return (
      <div className="min-h-screen bg-[#181818] text-white flex flex-col md:flex-row items-center justify-center p-8 gap-8">
        {/* Левая часть — текст */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-start max-w-xl">
          <h1 className="text-4xl font-bold mb-6">Теплодымокамера</h1>
          <div className="text-gray-300 text-base mb-2">
            Противопожарные тренажеры — это изготовленные на заказ многомодульные тренажеры для обучения поведению при пожаре, изготовленные с учетом требований безопасности. На этих тренажерах можно проводить множество практических занятий, в том числе: перекидывание через стену, обратное перемещение и работу на высоте. Конечные пользователи получат пользу от практических упражнений в реальных условиях, таких как боевые действия и ситуационные мероприятия. Наряду с этим, учебный центр пожарной охраны позволяет департаменту проводить наилучшую подготовку для своих новобранцев и совершенствовать навыки пожарных и способность реагировать.<br/>
            <br/>
            Учебно-тренажерный коплекс "Теплодымокамера" включает в себя:
            <ul className="list-disc ml-6">
              <li>тренажерную зону;</li>
              <li>пульт управления комплекса;</li>
              <li>лабиринт;</li>
              <li>участок;</li>
              <li>система задымления;</li>
              <li>система контактных полов;</li>
              <li>система двухсторонней дуплексно/симплексной связи;</li>
              <li>система видеонаблюдения и инфракрасного слежения;</li>
              <li>система создания световых эффектов;</li>
              <li>система создания звуковых эффектов;</li>
              <li>система приточно-вытяжной вентиляции;</li>
              <li>система дистанционного контроля;</li>
              <li>тренажер спасения из шахт, завалов, колодцев</li>
            </ul>
          </div>
        </div>
        {/* Правая часть — карусель */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <DymcameraCarousel />
        </div>
      </div>
    );
  }

  // Для остальных продуктов — заглушка
  return (
    <div className="min-h-screen bg-[#181818] text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-6">{product.title}</h1>
      <p className="text-lg text-gray-300">Описание и характеристики появятся здесь.</p>
    </div>
  );
}
