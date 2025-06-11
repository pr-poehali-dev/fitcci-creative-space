const ServicesSection = () => {
  const services = [
    {
      icon: "✨",
      title: "Творческие вечера",
      description:
        "Уютные встречи с единомышленниками в атмосфере вдохновения и творчества",
    },
    {
      icon: "🖼️",
      title: "Арт-мастерские",
      description: "Практические занятия по различным направлениям искусства",
    },
    {
      icon: "📚",
      title: "Лекции и дискуссии",
      description: "Обсуждение искусства, культуры и творческих процессов",
    },
    {
      icon: "🌿",
      title: "Медитативные практики",
      description: "Сессии осознанности для раскрытия творческого потенциала",
    },
    {
      icon: "🎭",
      title: "Культурные события",
      description: "Выставки, перформансы и презентации творческих проектов",
    },
    {
      icon: "☕",
      title: "Коворкинг-зона",
      description:
        "Пространство для индивидуальной работы в творческой атмосфере",
    },
  ];

  return (
    <section className="section-spacing warm-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-[#2C2C2C] mb-6">
            Наши <span className="text-[#8B7355]">услуги</span>
          </h2>
          <p className="text-lg text-[#2C2C2C]/80 max-w-2xl mx-auto">
            Разнообразие форматов для раскрытия творческого потенциала
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="creative-card p-8 text-center group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium text-[#2C2C2C] mb-4">
                {service.title}
              </h3>
              <p className="text-[#2C2C2C]/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="btn-primary text-lg">Узнать расписание</button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
