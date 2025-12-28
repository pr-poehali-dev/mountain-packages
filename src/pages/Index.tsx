import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const plans = [
    {
      name: "Горы включены",
      price: "от 8 500 ₽",
      period: "за ночь",
      image: "https://cdn.poehali.dev/files/_L6A6896.jpg",
      features: [
        "Трансфер Отель — Курорт — Отель",
        "Завтрак включен",
        "Посещение тренажерного зала",
        "Бесплатный WI-FI",
        "Посещение аквазоны с подогреваемым бассейном",
        "Хранение горнолыжного снаряжения",
        "Ранний заезд без дополнительной платы",
        "20% скидка на услуги СПА",
        "Ски-пасс на горнолыжный курорт",
        "Ежедневная уборка",
        "Смена белья 1 раз в 3 дня",
        "Смена гостевых принадлежностей"
      ],
      highlight: false
    },
    {
      name: "Горы включены + Красная Поляна",
      price: "от 12 500 ₽",
      period: "за ночь",
      badge: "Популярно",
      image: "https://cdn.poehali.dev/files/горы включены.jpg",
      features: [
        "Трансфер Отель — Красная Поляна — Отель",
        "Завтрак включен",
        "Ски-пасс Красная Поляна на 1 день",
        "Посещение тренажерного зала",
        "Бесплатный WI-FI",
        "Посещение аквазоны с подогреваемым бассейном",
        "Хранение горнолыжного снаряжения",
        "Ранний заезд без дополнительной платы",
        "20% скидка на услуги СПА",
        "Ежедневная уборка",
        "Смена белья 1 раз в 3 дня",
        "Смена гостевых принадлежностей"
      ],
      highlight: true
    },
    {
      name: "Горы включены + Газпром Поляна",
      price: "от 14 500 ₽",
      period: "за ночь",
      image: "https://cdn.poehali.dev/files/EFR_3150-2.jpg",
      features: [
        "Трансфер Отель — Газпром — Отель",
        "Завтрак включен",
        "Ски-пасс Газпром Поляна на 1 день",
        "Посещение тренажерного зала",
        "Бесплатный WI-FI",
        "Посещение аквазоны с подогреваемым бассейном",
        "Хранение горнолыжного снаряжения",
        "Ранний заезд без дополнительной платы",
        "20% скидка на услуги СПА",
        "Ежедневная уборка",
        "Смена белья 1 раз в 3 дня",
        "Смена гостевых принадлежностей"
      ],
      highlight: false
    },
    {
      name: "Горы включены + Роза Хутор",
      price: "от 15 500 ₽",
      period: "за ночь",
      image: "https://cdn.poehali.dev/files/RosaMarch170322_by@asyart-231.JPG",
      features: [
        "Трансфер Отель — Роза Хутор — Отель",
        "Завтрак включен",
        "Ски-пасс Роза Хутор на 1 день",
        "Посещение тренажерного зала",
        "Бесплатный WI-FI",
        "Посещение аквазоны с подогреваемым бассейном",
        "Хранение горнолыжного снаряжения",
        "Ранний заезд без дополнительной платы",
        "20% скидка на услуги СПА",
        "Ежедневная уборка",
        "Смена белья 1 раз в 3 дня",
        "Смена гостевых принадлежностей"
      ],
      highlight: false
    }
  ];

  const included = [
    { icon: "Bus", title: "Трансфер", description: "Отель — Курорт — Отель" },
    { icon: "Coffee", title: "Завтрак", description: "Включен в стоимость" }
  ];

  const benefits = [
    { 
      icon: "Waves", 
      title: "Аквазона с подогревом", 
      description: "Круглогодичный бассейн бесплатно",
      image: "https://cdn.poehali.dev/files/DSC03069-Panorama111.jpg"
    },
    { 
      icon: "Package", 
      title: "Хранение снаряжения", 
      description: "Специально оборудованные комнаты",
      image: "https://cdn.poehali.dev/files/RosaMarch170322_by@asyart-231.JPG"
    },
    { 
      icon: "Clock", 
      title: "Ранний заезд", 
      description: "Без дополнительной платы",
      image: "https://cdn.poehali.dev/files/_L6A6896.jpg"
    }
  ];

  const attractions = [
    {
      title: "Олимпийский парк",
      description: "Знаменитые спортивные объекты Олимпиады-2014",
      image: "https://cdn.poehali.dev/files/EFR_3150-2.jpg",
      distance: "5 мин"
    },
    {
      title: "Парк Южные культуры",
      description: "Ботанический сад с редкими растениями",
      image: "https://cdn.poehali.dev/files/DSC03069-Panorama111.jpg",
      distance: "10 мин"
    },
    {
      title: "Орнитологический парк",
      description: "Более 200 видов птиц со всего мира",
      image: "https://cdn.poehali.dev/files/RosaMarch170322_by@asyart-231.JPG",
      distance: "15 мин"
    }
  ];

  const conditions = [
    { title: "Заезд / Выезд", value: "14:00 / 12:00", icon: "CalendarCheck" },
    { title: "Минимальный срок", value: "от 2 ночей", icon: "Calendar" },
    { title: "Бронирование", value: "Онлайн или по телефону", icon: "Phone" },
    { title: "Отмена", value: "Бесплатно за 7 дней", icon: "RotateCcw" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://cdn.poehali.dev/files/горы включены.jpg" 
          alt="Mountains" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-2xl">
            Горы включены
          </h1>
          <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto drop-shadow-lg font-light">
            Живите у моря - путешествуйте в горы без очередей и переплат
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-10 py-7 bg-blue-600 hover:bg-blue-700 shadow-2xl">
              <Icon name="Snowflake" className="mr-2" size={22} />
              Забронировать
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 bg-white/95 hover:bg-white border-0 text-gray-900 shadow-2xl">
              <Icon name="Phone" className="mr-2" size={22} />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-8">
            Вы приезжаете к морю, заселяетесь в комфортный номер, отдыхаете после дороги и наслаждаетесь атмосферой курорта.
          </p>
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-8">
            А уже со следующего дня отправляетесь в горнолыжный курорт - без сложной логистики, очереди за прогулочным билетом и лишних расходов.
          </p>
          <p className="text-2xl md:text-3xl text-gray-900 font-semibold leading-relaxed">
            Пакет "Горы включены" - это отдых, в котором все продумано заранее.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Выберите свой тариф
            </h2>
            <p className="text-xl text-gray-600">Четыре пакета для комфортного отдыха в горах</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border-0 ${
                  plan.highlight ? 'ring-4 ring-blue-500 shadow-2xl' : 'shadow-lg'
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-6 right-6 z-10">
                    <Badge className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={plan.image} 
                    alt={plan.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{plan.name}</h3>
                  <div className="mb-8">
                    <span className="text-5xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-500 ml-2 text-lg">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Icon name="Check" size={22} className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full text-lg py-6 ${
                      plan.highlight 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                    size="lg"
                  >
                    Забронировать
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Включено в тариф
            </h2>
            <p className="text-xl text-gray-600">Что входит в стоимость каждого пакета</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {included.map((item, index) => (
              <Card 
                key={index}
                className="p-8 text-center hover:shadow-xl transition-all duration-300 border-0 shadow-md"
              >
                <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name={item.icon as any} size={32} className="text-blue-600" />
                </div>
                <h3 className="font-bold mb-3 text-xl">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Условия бронирования
            </h2>
            <p className="text-xl text-gray-600">Простые и удобные правила размещения</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {conditions.map((condition, index) => (
              <Card 
                key={index}
                className="p-8 text-center hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-md"
              >
                <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon name={condition.icon as any} size={32} className="text-blue-600" />
                </div>
                <h3 className="font-bold mb-3 text-lg">{condition.title}</h3>
                <p className="text-gray-600 text-lg">{condition.value}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Бесплатно для гостей
            </h2>
            <p className="text-xl text-gray-600">Дополнительные услуги без доплаты</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((item, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-blue-100 p-4 rounded-xl">
                      <Icon name={item.icon as any} size={28} className="text-blue-600" />
                    </div>
                    <h3 className="font-bold text-xl">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Наша локация
            </h2>
            <p className="text-xl text-gray-600">Идеальное расположение для активного отдыха</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-blue-100 p-4 rounded-2xl flex-shrink-0">
                  <Icon name="MapPin" size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-3">Первая береговая линия</h3>
                  <p className="text-gray-600 text-lg">Уникальное расположение — море и горы в 30 минутах</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-blue-100 p-4 rounded-2xl flex-shrink-0">
                  <Icon name="Navigation" size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-3">Быстрый доступ</h3>
                  <p className="text-gray-600 text-lg">До горнолыжных курортов 30-40 минут на трансфере</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="bg-blue-100 p-4 rounded-2xl flex-shrink-0">
                  <Icon name="Sparkles" size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-3">Насыщенный отдых</h3>
                  <p className="text-gray-600 text-lg">Горнолыжный спорт днём, прогулки у моря вечером</p>
                </div>
              </div>
            </div>

            <img 
              src="https://cdn.poehali.dev/files/_L6A6896.jpg" 
              alt="Sochi location"
              className="h-[500px] w-full rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Достопримечательности рядом
            </h2>
            <p className="text-xl text-gray-600">Откройте для себя красоту Сочи</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md"
              >
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 right-6">
                    <Badge className="bg-white text-gray-900 px-4 py-2 text-base font-semibold">
                      {attraction.distance}
                    </Badge>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{attraction.title}</h3>
                  <p className="text-gray-600 text-lg">{attraction.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы отправиться в горы?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Забронируйте номер прямо сейчас и получите незабываемые впечатления
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-10 py-7 bg-white text-blue-600 hover:bg-gray-100">Забронировать</Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-white text-white hover:bg-white/10">Позвонить</Button>
          </div>
        </div>
      </section>

      <footer className="py-10 px-4 bg-gray-900 text-white text-center">
        <p className="text-gray-400 text-lg">© 2024 Горы включены. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Index;