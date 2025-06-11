import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center warm-gradient relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#A8B5A0]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#D4B996]/30 rounded-full blur-3xl"></div>

      <div
        className={`text-center max-w-4xl mx-auto px-6 transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
      >
        <h1 className="text-6xl md:text-8xl font-light text-[#2C2C2C] mb-8 tracking-wide">
          Fitcci
        </h1>

        <div className="w-24 h-0.5 bg-[#8B7355] mx-auto mb-8"></div>

        <p className="text-2xl md:text-3xl text-[#8B7355] font-light mb-12 leading-relaxed">
          место где расцветает творчество
        </p>

        <p className="text-lg md:text-xl text-[#2C2C2C]/80 max-w-2xl mx-auto leading-relaxed mb-12">
          Создаём эстетичные и уютные вечера, где искусство встречается с
          комфортом. Минималистичный стиль и атмосфера Pinterest подарят
          участникам вдохновение и уникальный опыт.
        </p>

        <button className="btn-primary text-lg">
          Присоединиться к творчеству
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
