import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const documents = [
    { title: "Устав СНТ ТИМЕР", type: "PDF", size: "2.3 MB" },
    { title: "Правила внутреннего распорядка", type: "PDF", size: "1.8 MB" },
    { title: "Протокол общего собрания", type: "PDF", size: "0.9 MB" },
    { title: "Тарифы на 2025 год", type: "PDF", size: "0.5 MB" },
    { title: "Форма заявления на вступление", type: "DOC", size: "0.2 MB" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section с панорамным фото */}
      <section className="relative h-96 w-full overflow-hidden">
        <img
          src="https://cdn.poehali.dev/files/721a476c-0417-472f-9489-440866f9b63c.jpeg"
          alt="Панорамный вид СНТ ТИМЕР"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 font-montserrat">
              СНТ ТИМЕР
            </h1>
            <p className="text-xl opacity-90">
              Садоводческое некоммерческое товарищество
            </p>
          </div>
        </div>
      </section>

      {/* Основная информация */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Icon name="Home" size={24} />О нашем товариществе
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                СНТ ТИМЕР — это уютное садоводческое товарищество, расположенное
                в живописном месте с видом на озеро. Мы объединяем любителей
                садоводства и загородного отдыха в дружном сообществе.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span className="text-sm">Участки: 450 наделов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} />
                  <span className="text-sm">Основан: 1987 год</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={16} />
                  <span className="text-sm">Семей: 420</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Icon name="Settings" size={24} />
                Инфраструктура
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Icon name="Zap" size={16} />
                    Электроснабжение
                  </span>
                  <Badge
                    variant="outline"
                    className="text-green-700 border-green-300"
                  >
                    Есть
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Icon name="Droplet" size={16} />
                    Водоснабжение
                  </span>
                  <Badge
                    variant="outline"
                    className="text-green-700 border-green-300"
                  >
                    Есть
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Icon name="Shield" size={16} />
                    Охрана
                  </span>
                  <Badge
                    variant="outline"
                    className="text-green-700 border-green-300"
                  >
                    Круглосуточно
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Icon name="Car" size={16} />
                    Парковка
                  </span>
                  <Badge
                    variant="outline"
                    className="text-green-700 border-green-300"
                  >
                    Есть
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Контактная информация */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Icon name="Phone" size={24} />
                  Контакты правления
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Председатель СНТ</h4>
                  <p className="text-gray-600">Иванов Сергей Петрович</p>
                  <p className="text-gray-600">+7 (123) 456-78-90</p>
                </div>
                <div>
                  <h4 className="font-semibold">Бухгалтерия</h4>
                  <p className="text-gray-600">+7 (123) 456-78-91</p>
                  <p className="text-gray-600">timer.snt@mail.ru</p>
                </div>
                <div>
                  <h4 className="font-semibold">Режим работы</h4>
                  <p className="text-gray-600">Пн-Пт: 9:00-18:00</p>
                  <p className="text-gray-600">Сб: 9:00-15:00</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Icon name="MapPin" size={24} />
                  Как добраться
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Адрес</h4>
                    <p className="text-gray-600">
                      Московская область, Истринский район
                    </p>
                    <p className="text-gray-600">СНТ ТИМЕР</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">На автомобиле</h4>
                    <p className="text-gray-600">
                      По Волоколамскому шоссе, 45 км от МКАД
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Общественный транспорт</h4>
                    <p className="text-gray-600">
                      Автобус №372 до остановки "Садоводство"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Документы для скачивания */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">
            Документы для скачивания
          </h2>
          <p className="text-gray-600">Основные документы и формы СНТ ТИМЕР</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((doc, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <Icon
                      name="FileText"
                      size={20}
                      className="text-green-600"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm mb-1">{doc.title}</h4>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {doc.type}
                      </Badge>
                      <span>{doc.size}</span>
                    </div>
                    <Button
                      size="sm"
                      className="w-full bg-green-600 hover:bg-green-700"
                    >
                      <Icon name="Download" size={16} className="mr-2" />
                      Скачать
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Leaf" size={24} className="text-green-400" />
            <span className="text-xl font-bold">СНТ ТИМЕР</span>
          </div>
          <p className="text-gray-400">
            © 2025 Садоводческое некоммерческое товарищество ТИМЕР
          </p>
          <p className="text-gray-400 text-sm mt-2">Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
