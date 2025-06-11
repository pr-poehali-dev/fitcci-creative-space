const ContactSection = () => {
  return (
    <section className="section-spacing bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-[#202020] leading-tight">
              Свяжитесь
              <span className="block text-[#EF82A2]">с нами</span>
            </h2>

            <p className="text-lg text-elegant leading-relaxed">
              Готовы присоединиться к нашему творческому сообществу? Мы всегда
              рады новым участникам и открыты для сотрудничества.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#F49098]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#EF82A2]">📍</span>
                </div>
                <div>
                  <div className="font-medium text-[#202020]">Адрес</div>
                  <div className="text-[#202020]/70">
                    ул. Творческая, 15, Москва
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#F49098]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#EF82A2]">📞</span>
                </div>
                <div>
                  <div className="font-medium text-[#202020]">Телефон</div>
                  <div className="text-[#202020]/70">+7 (495) 123-45-67</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#F49098]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#EF82A2]">✉️</span>
                </div>
                <div>
                  <div className="font-medium text-[#202020]">Email</div>
                  <div className="text-[#202020]/70">hello@fitcci.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#F49098]/20 rounded-full flex items-center justify-center">
                  <span className="text-[#EF82A2]">🕒</span>
                </div>
                <div>
                  <div className="font-medium text-[#202020]">Часы работы</div>
                  <div className="text-[#202020]/70">Пн-Вс: 10:00 - 22:00</div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="btn-primary">Записаться на мероприятие</button>
              <button className="border-2 border-[#EF82A2] text-[#EF82A2] hover:bg-[#EF82A2] hover:text-[#FFFFFF] font-medium px-6 py-3 rounded-lg transition-all duration-200">
                Задать вопрос
              </button>
            </div>
          </div>

          <div className="creative-card p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#202020] mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-[#FAD5C3] rounded-lg focus:ring-2 focus:ring-[#EF82A2] focus:border-transparent bg-white/50"
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#202020] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-[#FAD5C3] rounded-lg focus:ring-2 focus:ring-[#EF82A2] focus:border-transparent bg-white/50"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#202020] mb-2">
                  Сообщение
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-[#FAD5C3] rounded-lg focus:ring-2 focus:ring-[#EF82A2] focus:border-transparent bg-white/50"
                  placeholder="Расскажите о ваших интересах..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Отправить сообщение
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
