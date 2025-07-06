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
    { title: "Реквизиты для взносов", type: "PDF", size: "0.1 MB" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header с узкой фотографией */}
      <header className="w-full h-48 overflow-hidden relative">
        <img
          src="/img/f97c078e-a1e9-4bd3-8cdb-f60bd3899270.jpg"
          alt="СНТ ТИМЕР"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-2">СНТ ТИМЕР</h1>
            <p className="text-lg">Садоводческое некоммерческое товарищество</p>
          </div>
        </div>
      </header>

      {/* Основная информация */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Icon name="Home" size={24} />О товариществе
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                СНТ ТИМЕР — это уютное садоводческое товарищество, основанное в
                1987 году. Мы объединяем любителей садоводства и загородного
                отдыха в дружном сообществе.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span className="text-sm">Участки: 1000 наделов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={16} />
                  <span className="text-sm">Семей: 950</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} />
                  <span className="text-sm">Основан: 1987 год</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Icon name="Phone" size={24} />
                Контакты
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
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
                  <h4 className="font-semibold">Адрес</h4>
                  <p className="text-gray-600">
                    Московская область, Истринский район
                  </p>
                  <p className="text-gray-600">СНТ ТИМЕР</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Icon name="Settings" size={24} />
                Инфраструктура
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <Icon name="Zap" size={16} className="text-green-600" />
                  <span className="text-sm">Электричество</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Droplet" size={16} className="text-blue-600" />
                  <span className="text-sm">Водоснабжение</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" size={16} className="text-gray-600" />
                  <span className="text-sm">Охрана</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Car" size={16} className="text-gray-600" />
                  <span className="text-sm">Парковка</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Icon name="Clock" size={24} />
                Режим работы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Понедельник - Пятница</span>
                  <span className="font-semibold">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Суббота</span>
                  <span className="font-semibold">9:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Воскресенье</span>
                  <span className="font-semibold">Выходной</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Документы для скачивания */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Документы для скачивания
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((doc, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Icon
                      name="FileText"
                      size={20}
                      className="text-green-600 mt-1"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-2">
                        {doc.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        <span className="bg-gray-100 px-2 py-1 rounded">
                          {doc.type}
                        </span>
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
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Leaf" size={24} className="text-green-600" />
            <span className="text-xl font-bold text-gray-800">СНТ ТИМЕР</span>
          </div>
          <p className="text-gray-600">
            © 2025 Садоводческое некоммерческое товарищество ТИМЕР
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
