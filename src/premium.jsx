function Premium({
  food1,
  food2,
  food3,
  food4,
  footerTitle,
  footerText,
}) {
  return (
    <section className="max-w-[1380px] mx-auto bg-white rounded-[30px] p-8">

      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Программа ПремиумБоул</h2>
        <p className="text-sm text-[#4D8F76]">
          ◉ Каждый день новое меню
        </p>
      </div>

      <p className="mt-6 mb-3">Калорийность</p>

      <div className="grid grid-cols-5 gap-4">
        <button className="border border-[#E8D9CA] rounded-2xl p-4">
          900 ккал
          <p className="text-xs">3 блюда</p>
        </button>

        <button className="bg-[#E1CDB5] rounded-2xl p-4">
          1 250 ккал
          <p className="text-xs">4 блюда</p>
        </button>

        <button className="border border-[#E8D9CA] rounded-2xl p-4">
          1 600 ккал
          <p className="text-xs">5 блюд</p>
        </button>

        <button className="border border-[#E8D9CA] rounded-2xl p-4">
          2 050 ккал
          <p className="text-xs">6 блюд</p>
        </button>

        <button className="border border-[#E8D9CA] rounded-2xl p-4">
          Индивидуально
          <p className="text-xs">подобрать</p>
        </button>
      </div>

      <p className="mt-6 mb-3">Продолжительность</p>

      <div className="grid grid-cols-5 gap-4">
        <button className="border border-[#E8D9CA] rounded-2xl p-4">
          Пробные 2 дня
          <p className="text-xs">за 2 900 ₽</p>
        </button>

        <button className="border border-[#E8D9CA] rounded-2xl p-4">
          1 неделя
          <p className="text-xs">1 700 ₽ в день</p>
        </button>

        <button className="bg-[#E1CDB5] rounded-2xl p-4">
          2 недели
          <p className="text-xs">1 600 ₽ в день</p>
        </button>

        <button className="border border-[#E8D9CA] rounded-2xl p-4">
          3 недели
          <p className="text-xs">1 520 ₽ в день</p>
        </button>

        <button className="border border-[#E8D9CA] rounded-2xl p-4">
          4 недели
          <p className="text-xs">1 450 ₽ в день</p>
        </button>
      </div>

      <div className="flex items-center gap-3 mt-6 text-sm">
        <p>Выберите дни:</p>
        <button className="bg-[#E1CDB5] rounded-full px-3 py-1">5</button>
        <button className="border rounded-full px-3 py-1">6</button>
        <button className="border rounded-full px-3 py-1">7</button>
      </div>

      <h3 className="font-bold mt-6">
        Пример дневного рациона
      </h3>

      <div className="flex flex-wrap gap-3 mt-4">
        <button className="border rounded-full px-4 py-2">понедельник</button>
        <button className="border rounded-full px-4 py-2">вторник</button>
        <button className="border rounded-full px-4 py-2">четверг</button>
        <button className="bg-[#E1CDB5] rounded-full px-4 py-2">пятница</button>
        <button className="border rounded-full px-4 py-2">суббота</button>
        <button className="border rounded-full px-4 py-2">воскресенье</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">

        <div>
          <img src={food1} alt="Завтрак" className="w-full h-[160px] object-contain" />
          <p className="text-xs mt-3">Завтрак</p>
          <p className="font-medium text-sm">Название первого блюда</p>
        </div>

        <div>
          <img src={food2} alt="Обед" className="w-full h-[160px] object-contain" />
          <p className="text-xs mt-3">Обед</p>
          <p className="font-medium text-sm">Название второго блюда</p>
        </div>

        <div>
          <img src={food3} alt="Полдник" className="w-full h-[160px] object-contain" />
          <p className="text-xs mt-3">Полдник</p>
          <p className="font-medium text-sm">Название третьего блюда</p>
        </div>

        <div>
          <img src={food4} alt="Ужин" className="w-full h-[160px] object-contain" />
          <p className="text-xs mt-3">Ужин</p>
          <p className="font-medium text-sm">Название четвёртого блюда</p>
        </div>

      </div>

      <div className="bg-[#A4BF97] rounded-2xl p-6 mt-8 text-white">
        <button className="bg-[#4D8F76] rounded-full px-5 py-3">
          Заказать питание
        </button>

        <h3 className="font-bold mt-4">{footerTitle}</h3>
        <p className="text-sm mt-2">{footerText}</p>
      </div>

    </section>
  );
}
export default Premium