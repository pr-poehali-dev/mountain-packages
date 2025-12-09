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
      image: "https://images.unsplash.com/photo-1551524164-687a55dd1126?auto=format&fit=crop&w=800&q=80",
      features: [
        "Трансфер Отель — Курорт — Отель",
        "Завтрак включен"
      ],
      highlight: false
    },
    {
      name: "Горы включены + Красная Поляна",
      price: "от 12 500 ₽",
      period: "за ночь",
      badge: "Популярно",
      image: "https://images.unsplash.com/photo-1551582045-6ec9c11d8697?auto=format&fit=crop&w=800&q=80",
      features: [
        "Трансфер Отель — Красная Поляна — Отель",
        "Завтрак включен",
        "Ски-пасс Красная Поляна на 1 день"
      ],
      highlight: true
    },
    {
      name: "Горы включены + Газпром Поляна",
      price: "от 14 500 ₽",
      period: "за ночь",
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?auto=format&fit=crop&w=800&q=80",
      features: [
        "Трансфер Отель — Газпром — Отель",
        "Завтрак включен",
        "Ски-пасс Газпром Поляна на 1 день"
      ],
      highlight: false
    }
  ];

  const benefits = [
    { 
      icon: "Waves", 
      title: "Аквазона с подогревом", 
      description: "Круглогодичный бассейн бесплатно",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
    },
    { 
      icon: "Package", 
      title: "Хранение снаряжения", 
      description: "Специально оборудованные комнаты",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=600&q=80"
    },
    { 
      icon: "Clock", 
      title: "Ранний заезд", 
      description: "Без дополнительной платы",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const attractions = [
    {
      title: "Олимпийский парк",
      description: "Знаменитые спортивные объекты Олимпиады-2014",
      image: "https://images.unsplash.com/photo-1590739225017-e52fad218c22?auto=format&fit=crop&w=600&q=80",
      distance: "5 мин"
    },
    {
      title: "Парк Южные культуры",
      description: "Ботанический сад с редкими растениями",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80",
      distance: "10 мин"
    },
    {
      title: "Орнитологический парк",
      description: "Более 200 видов птиц со всего мира",
      image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=600&q=80",
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1605540436563-5bca919ae766?auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-2xl">
            Горы включены
          </h1>
          <p className="text-2xl md:text-3xl mb-12 max-w-3xl mx-auto drop-shadow-lg font-light">
            Всё для идеального горнолыжного отдыха на первой береговой линии Сочи
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

      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Условия бронирования
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-20">
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

          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Выберите свой тариф
            </h2>
            <p className="text-xl text-gray-600">Три пакета для комфортного отдыха в горах</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                
                <div 
                  className="h-64 bg-cover bg-center relative"
                  style={{ backgroundImage: `url('${plan.image}')` }}
                >
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
                <div 
                  className="h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
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

            <div 
              className="h-[500px] rounded-3xl bg-cover bg-center shadow-xl"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80')"
              }}
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
                <div 
                  className="h-64 bg-cover bg-center relative"
                  style={{ backgroundImage: `url('${attraction.image}')` }}
                >
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
            <Button size="lg" className="text-lg px-10 py-7 bg-white text-blue-600 hover:bg-gray-100">
              <Icon name="Calendar" className="mr-2" size={22} />
              Забронировать сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-white text-white hover:bg-white/10">
              <Icon name="MessageCircle" className="mr-2" size={22} />
              Задать вопрос
            </Button>
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
