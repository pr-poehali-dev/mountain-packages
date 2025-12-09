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
      features: [
        "Трансфер до курортов",
        "Завтрак включен",
        "Доступ в аквазону",
        "Хранение снаряжения",
        "Ранний заезд"
      ],
      highlight: false,
      color: "from-blue-500 to-cyan-400"
    },
    {
      name: "Горы включены + Красная Поляна",
      price: "от 12 500 ₽",
      period: "за ночь",
      badge: "Популярно",
      features: [
        "Всё из базового пакета",
        "Ски-пасс Красная Поляна",
        "Трансфер до подъемников",
        "Скидка на прокат снаряжения",
        "Карта гостя с бонусами"
      ],
      highlight: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Горы включены + Газпром Поляна",
      price: "от 14 500 ₽",
      period: "за ночь",
      features: [
        "Всё из базового пакета",
        "Ски-пасс Газпром Поляна",
        "VIP трансфер",
        "Приоритетный доступ на подъемники",
        "Консьерж-сервис"
      ],
      highlight: false,
      color: "from-orange-500 to-red-500"
    }
  ];

  const included = [
    { icon: "Bus", title: "Трансфер", description: "Комфортная доставка до курортов и обратно" },
    { icon: "Coffee", title: "Завтрак", description: "Сытный завтрак каждое утро" },
    { icon: "Waves", title: "Аквазона", description: "Подогреваемый бассейн круглый год" },
    { icon: "Package", title: "Хранение", description: "Безопасное хранение снаряжения" },
    { icon: "Clock", title: "Ранний заезд", description: "Заезд без доплаты с утра" }
  ];

  const attractions = [
    {
      title: "Олимпийский парк",
      description: "Знаменитые спортивные объекты Олимпиады-2014",
      icon: "Trophy",
      distance: "5 мин"
    },
    {
      title: "Парк Южные культуры",
      description: "Ботанический сад с редкими растениями",
      icon: "Trees",
      distance: "10 мин"
    },
    {
      title: "Орнитологический парк",
      description: "Более 200 видов птиц со всего мира",
      icon: "Bird",
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
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-purple-50">
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1605540436563-5bca919ae766?auto=format&fit=crop&w=2000&q=80')",
            filter: "brightness(0.7)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cyan-50" />
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            Горы включены
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-lg">
            Всё для идеального горнолыжного отдыха на первой береговой линии Сочи
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 shadow-xl">
              <Icon name="Snowflake" className="mr-2" size={20} />
              Забронировать
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/90 hover:bg-white backdrop-blur-sm shadow-xl">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Выберите свой тариф
            </h2>
            <p className="text-xl text-gray-600">Три уровня комфорта для вашего идеального отдыха</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.highlight ? 'ring-4 ring-purple-500 shadow-2xl' : 'shadow-lg'
                } animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1">
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <div className={`h-32 bg-gradient-to-r ${plan.color} flex items-center justify-center`}>
                  <Icon name="Mountain" size={48} className="text-white drop-shadow-lg" />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      plan.highlight 
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' 
                        : 'bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500'
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

      <section className="py-20 px-4 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Что включено в стоимость
            </h2>
            <p className="text-xl text-white/90">Забота о каждой детали вашего отдыха</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {included.map((item, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:scale-105 transition-all duration-300 bg-white/95 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon as any} size={32} className="text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Наша локация
            </h2>
            <p className="text-xl text-gray-600">Идеальное расположение для активного отдыха</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-orange-100 to-red-100 p-3 rounded-full">
                  <Icon name="MapPin" size={28} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Первая береговая линия</h3>
                  <p className="text-gray-600">Уникальное расположение — море и горы в 30 минутах</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-3 rounded-full">
                  <Icon name="Navigation" size={28} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Быстрый доступ</h3>
                  <p className="text-gray-600">До горнолыжных курортов 30-40 минут на трансфере</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-3 rounded-full">
                  <Icon name="Sparkles" size={28} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Насыщенный отдых</h3>
                  <p className="text-gray-600">Горнолыжный спорт днём, прогулки у моря вечером</p>
                </div>
              </div>
            </div>

            <div 
              className="h-96 rounded-2xl bg-cover bg-center shadow-2xl animate-scale-in"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80')"
              }}
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Достопримечательности рядом
            </h2>
            <p className="text-xl text-gray-600">Откройте для себя красоту Сочи</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {attractions.map((attraction, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-full">
                    <Icon name={attraction.icon as any} size={32} className="text-purple-600" />
                  </div>
                  <Badge variant="outline" className="text-purple-600 border-purple-600">
                    {attraction.distance}
                  </Badge>
                </div>
                <h3 className="text-2xl font-bold mb-2">{attraction.title}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Условия бронирования
            </h2>
            <p className="text-xl text-gray-600">Простые и удобные правила размещения</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {conditions.map((condition, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={condition.icon as any} size={28} className="text-cyan-600" />
                </div>
                <h3 className="font-bold mb-2 text-lg">{condition.title}</h3>
                <p className="text-gray-600">{condition.value}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы отправиться в горы?
          </h2>
          <p className="text-xl mb-8">
            Забронируйте номер прямо сейчас и получите незабываемые впечатления
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-gray-100">
              <Icon name="Calendar" className="mr-2" size={20} />
              Забронировать сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white/10">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-gray-900 text-white text-center">
        <p className="text-gray-400">© 2024 Горы включены. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Index;
