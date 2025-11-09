import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const games = [
    {
      id: 1,
      title: 'Vice City Chronicles',
      genre: 'Action',
      image: 'https://cdn.poehali.dev/projects/dc15edd9-3f8f-4860-a3e0-f913ab409909/files/a089b38a-0cc5-43f6-bfda-d485310c5ec5.jpg',
      description: 'Погрузитесь в мир неона и преступности',
      year: '2024'
    },
    {
      id: 2,
      title: 'DESTRUCTION',
      genre: 'Immersive Action RPG',
      image: 'https://cdn.poehali.dev/files/903e0578-adb9-480b-a812-c222906ec333.jpg',
      description: 'Эпическая RPG в угасающем мире. Cannot be avoided.',
      fullDescription: 'Эпическая иммерсивная ролевая игра, где в угасающем мире разворачивается история людей, из последних сил сражающихся за жизнь и все, что им дорого. Несколько параллельно развивающихся сюжетных линий, связанных в одну историю. Массовые сражения и развивающиеся поселения в авторской вселенной темной фантастики с фэнтези элементами.',
      tagline: 'Cannot be avoided | Разрушения не избежать',
      platforms: 'PC, PS5',
      rating: 'ESRB – AO, PEGI – 18+',
      year: '2024'
    },
    {
      id: 3,
      title: 'Neon Racer',
      genre: 'Racing',
      image: 'https://cdn.poehali.dev/projects/dc15edd9-3f8f-4860-a3e0-f913ab409909/files/0e003a4e-1963-4a70-8041-16c53c316c11.jpg',
      description: 'Футуристические гонки на пределе возможностей',
      year: '2025'
    }
  ];

  const news = [
    {
      id: 1,
      date: '15 октября 2024',
      title: 'Vice City Chronicles получила награду Best Action Game',
      excerpt: 'Наша игра признана лучшей экшен-игрой года на церемонии Game Awards 2024'
    },
    {
      id: 2,
      date: '8 октября 2024',
      title: 'Анонс: Neon Racer выходит в 2025',
      excerpt: 'Готовьтесь к самым быстрым гонкам в истории игровой индустрии'
    },
    {
      id: 3,
      date: '1 октября 2024',
      title: 'Студия расширяется: новый офис в Москве',
      excerpt: 'Chudov Production открывает современный офис для команды из 50+ разработчиков'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold text-primary">
              CHUDOV PRODUCTION
            </h1>
            <div className="flex gap-8">
              {['home', 'games', 'studio', 'news'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`font-heading font-semibold uppercase text-sm transition-colors ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'games' && 'Игры'}
                  {section === 'studio' && 'Студия'}
                  {section === 'news' && 'Новости'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <>
          <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/dc15edd9-3f8f-4860-a3e0-f913ab409909/files/a089b38a-0cc5-43f6-bfda-d485310c5ec5.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="relative z-10 text-center animate-fade-in">
              <h2 className="text-7xl font-heading font-black mb-6 text-foreground">
                СОЗДАЕМ МИРЫ
              </h2>
              <p className="text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Игровая студия полного цикла, создающая незабываемые игровые впечатления
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg px-8 py-6"
              >
                НАШИ ИГРЫ
              </Button>
            </div>
          </section>

          <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
              <h3 className="text-4xl font-heading font-bold mb-12 text-center">НАШИ ИГРЫ</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {games.map((game, index) => (
                  <Card 
                    key={game.id} 
                    className="group relative overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-[3/4] overflow-hidden">
                      <img 
                        src={game.image} 
                        alt={game.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-secondary font-heading font-bold text-sm mb-2">{game.genre} • {game.year}</span>
                      <h4 className="text-2xl font-heading font-bold mb-2">{game.title}</h4>
                      <p className="text-muted-foreground mb-4">{game.description}</p>
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        Подробнее
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === 'games' && (
        <section className="pt-32 pb-24">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-heading font-black mb-16 text-center">НАШИ ИГРЫ</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {games.map((game) => (
                <Card key={game.id} className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img 
                        src={game.image} 
                        alt={game.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <span className="text-secondary font-heading font-bold text-sm mb-3">{game.genre} • {game.year}</span>
                      <h3 className="text-3xl font-heading font-bold mb-4">{game.title}</h3>
                      {'tagline' in game && (
                        <p className="text-primary/80 italic mb-3 text-sm font-semibold">{game.tagline}</p>
                      )}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {'fullDescription' in game ? game.fullDescription : game.description}
                      </p>
                      {'platforms' in game && (
                        <div className="mb-2">
                          <span className="text-xs text-muted-foreground">Платформы: </span>
                          <span className="text-xs text-foreground font-semibold">{game.platforms}</span>
                        </div>
                      )}
                      {'rating' in game && (
                        <div className="mb-6">
                          <span className="text-xs text-muted-foreground">Возраст: </span>
                          <span className="text-xs text-foreground font-semibold">{game.rating}</span>
                        </div>
                      )}
                      <div className="space-y-3 mt-auto">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold">
                          Купить игру
                        </Button>
                        <Button variant="outline" className="w-full border-border hover:bg-muted">
                          Трейлер
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'studio' && (
        <section className="pt-32 pb-24">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-5xl font-heading font-black mb-8 text-center">О СТУДИИ</h2>
            <div className="space-y-8 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                <span className="text-foreground font-semibold">Chudov Production</span> — независимая игровая студия полного цикла, основанная в 2018 году. 
                Мы создаем игры, которые запоминаются на годы.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 py-12">
                <div className="text-center">
                  <div className="text-5xl font-heading font-black text-primary mb-3">50+</div>
                  <div className="text-muted-foreground">Сотрудников</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-heading font-black text-primary mb-3">3</div>
                  <div className="text-muted-foreground">Выпущенных игры</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-heading font-black text-primary mb-3">15+</div>
                  <div className="text-muted-foreground">Наград</div>
                </div>
              </div>

              <p className="leading-relaxed">
                Наша команда состоит из опытных разработчиков, художников, дизайнеров и сценаристов, 
                объединенных страстью к созданию качественных игр. Мы работаем на собственном движке 
                и используем передовые технологии игровой индустрии.
              </p>

              <Card className="bg-muted/50 border-border p-8">
                <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">Наши ценности</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Инновации в геймплее и повествовании</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Высочайшее качество визуальной составляющей</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Уважение к игрокам и их времени</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Check" className="text-primary mt-1" size={20} />
                    <span>Творческая свобода для команды</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'news' && (
        <section className="pt-32 pb-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-5xl font-heading font-black mb-16 text-center">НОВОСТИ</h2>
            <div className="space-y-8">
              {news.map((item) => (
                <Card key={item.id} className="bg-card border-border hover:border-primary transition-colors p-8 group cursor-pointer">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name="Newspaper" className="text-primary" size={28} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-secondary font-heading font-semibold mb-2">{item.date}</div>
                      <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{item.excerpt}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="bg-muted/30 border-t border-border py-12 mt-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-heading font-bold mb-4">CHUDOV PRODUCTION</h3>
              <p className="text-muted-foreground text-sm">
                Создаем игры мирового уровня с 2018 года
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>info@chudov.games</p>
                <p>+7 (495) 123-45-67</p>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Icon name="Youtube" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={24} />
                <Icon name="Twitter" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={24} />
                <Icon name="Instagram" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" size={24} />
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 Chudov Production. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;