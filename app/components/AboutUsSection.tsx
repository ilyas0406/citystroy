import React from "react";

export default function AboutUsSection() {
  return (
    <>
      <section className="w-full bg-[#181818] text-white py-20 pt-[80px]">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-10">О компании</h2>

          <p className="text-lg text-center text-gray-300 mb-10">
            С 2010 года мы предоставляем качественные строительно-монтажные работы, надёжные поставки оборудования и разрабатываем современные учебно-тренировочные комплексы (УТК) для подготовки спасателей и спецподразделений.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Миссия</h3>
              <p className="text-gray-300">
                Создавать условия для эффективной подготовки в экстремальных ситуациях — развивая физическую выносливость и устойчивость к высоким температурам.
              </p>

              <h3 className="text-2xl font-semibold mt-28 mb-4">Основные направления</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Строительно-монтажные работы</li>
                <li>Производство УТК: Теплодымокамера, ЛАВА Плюс, Пламя</li>
                <li>Поставки спецтехники и дыхательных аппаратов</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 ">Принципы</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Качество и надёжность</li>
                <li>Соблюдение сроков и стандартов</li>
                <li>Современные технологии</li>
                <li>Полный цикл — от проекта до сдачи</li>
                <li>Охрана труда и партнёрство</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Факты</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Более 10 лет на рынке</li>
                <li>Индустриальный сертификат, лицензия СМР 1 категории</li>
                <li>Участие в госзакупках РК и Самрук-Казына</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
    
  );
}
