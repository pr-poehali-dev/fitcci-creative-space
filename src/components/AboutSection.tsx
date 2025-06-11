const AboutSection = () => {
  return (
    <section className="section-spacing bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-[#202020] leading-tight">
              Атмосфера
              <span className="block text-[#EF82A2]">творчества</span>
            </h2>

            <div className="space-y-6 text-elegant">
              <p className="text-lg leading-relaxed">
                В нашем пространстве каждая деталь продумана для создания особой
                атмосферы. Мягкий свет, натуральные материалы и минималистичный
                дизайн создают идеальные условия для творческого процесса.
              </p>

              <p className="text-lg leading-relaxed">
                Мы верим, что красота окружающего пространства вдохновляет на
                создание прекрасного. Здесь искусство рождается естественно, в
                комфорте и гармонии.
              </p>
            </div>

            <div className="flex space-x-8">
              <div className="text-center">
                <div className="text-3xl font-light text-[#EF82A2] mb-2">
                  50+
                </div>
                <div className="text-sm uppercase tracking-wide text-[#202020]/70">
                  мероприятий
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-[#EF82A2] mb-2">
                  200+
                </div>
                <div className="text-sm uppercase tracking-wide text-[#202020]/70">
                  участников
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-[#EF82A2] mb-2">3</div>
                <div className="text-sm uppercase tracking-wide text-[#202020]/70">
                  года опыта
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="creative-card p-8 h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-[#F49098]/30 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-medium text-[#202020]">
                  Творческое пространство
                </h3>
                <p className="text-[#202020]/70">
                  Вдохновляющая среда для реализации идей
                </p>
              </div>
            </div>

            {/* Декоративный элемент */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FAD5C3]/40 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
