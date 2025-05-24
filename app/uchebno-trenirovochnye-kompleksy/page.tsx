import Image from 'next/image';

export default function UchebnoTrenirovochnyeKompleksy() {
  const products = [
    {
      title: 'Теплодымокамера',
      description: 'Тренажёр для отработки навыков спасения в условиях высокой температуры и задымления',
      image: '/dymcamera/dymcamera5.jpg',
      slug: 'teplodymokamera'
    },
    {
      title: 'Сейсмотренажер',
      description: 'Симуляция действий в условиях землетрясения и чрезвычайных ситуаций',
      image: '/seismo/24.avif',
      slug: 'seismotrenazher'
    },
    {
      title: 'Огневой полигон',
      description: 'Специализированная площадка для подготовки пожарных и спасателей',
      image: '/ognevoipoligon/ognevoypoligon1.jpg',
      slug: 'ognevoi-poligon'
    },
    {
      title: 'Модульный стрелковый тир',
      description: '',
      image: '/tir/tir.jpg',
      slug: 'modulnyj-strelkovyj-tir'
    },
    {
      title: 'Штурмовик',
      description: '',
      image: '/shturmovik/shturmovik.jpg',
      slug: 'shturmovik'
    }
  ];

  return (
    <div className="min-h-screen bg-[#181818] text-white py-16 px-8">
      <h1 className="text-5xl font-bold mb-12 text-center">Учебно-тренировочные комплексы</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div 
            key={product.slug} 
            className="bg-[#222] rounded-xl overflow-hidden shadow-xl transition-transform hover:scale-105"
          >
            <Image 
              src={product.image} 
              alt={product.title} 
              width={600} 
              height={400} 
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
              <p className="text-gray-300 mb-6">{product.description}</p>
              <a 
                href={`/products/${product.slug}`} 
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Подробнее
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
