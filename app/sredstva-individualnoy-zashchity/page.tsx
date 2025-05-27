import Image from 'next/image';

export default function SredstvaIndividualnoyZashchity() {
  const products = [
    {
      title: 'Воздушно-дыхательный аппарат',
      description: 'Защита органов дыхания для пожарных и спасателей',
      image: '/msa/msa.png',
      slug: 'msa'
    },
    {
      title: 'Водолазный дыхательный аппарат',
      description: 'Аппарат для дыхания под водой с замкнутым циклом',
      image: '/vda/vda.jpg',
      slug: 'vodolaz'
    },
    {
      title: 'Боевая одежда пожарного - БОП',
      description: 'Защитный костюм для профессиональных пожарных',
      image: '/bop/bop.jpg',
      slug: 'bop'
    },
    {
      title: 'Снаряжения для спецназа',
      description: 'Экипировка для профессиональных подразделений спецназа',
      image: '/swat/swat.jpg',
      slug: 'snaryazhenie'
    },
    {
      title: 'Костюм изолирующий химический закрытого типа',
      description: 'Защитный костюм для работы с опасными химическими веществами',
      image: '/kostyum-ximicheskii/kostyum-ximicheskii.jpg',
      slug: 'kostyum-ximicheskii'
    }
  ];

  return (
    <div className="min-h-screen bg-[#181818] text-white py-16 px-8">
      <h1 className="text-5xl font-bold mb-12 text-center">Средства индивидуальной защиты</h1>
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
              className="w-full h-110 object-fill"
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
