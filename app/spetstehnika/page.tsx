import Image from 'next/image';

export default function Spetstehnika() {
  const products = [
    {
      title: 'Реанимобиль A/B/C',
      description: 'Специализированный медицинский автомобиль для экстренной помощи',
      image: '/reanimobil/reanimobilwhite1.jpg',
      slug: 'reanimobil'
    },
    {
      title: 'Аварийно-спасательный автомобиль',
      description: 'Автомобиль для ликвидации чрезвычайных ситуаций и проведения спасательных работ',
      image: '/ASA/asa1.jpg',
      slug: 'aca'
    },
    {
      title: 'Автобаклаборатория',
      description: 'Мобильный комплекс для проведения санитарно-эпидемиологических исследований',
      image: '/avtobaclab/Avtobaclab.jpg',
      slug: 'avtobaklaboratoriya'
    }
  ];

  return (
    <div className="min-h-screen bg-[#181818] text-white py-16 px-8">
      <h1 className="text-5xl font-bold mb-12 text-center">Спецтехника</h1>
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
