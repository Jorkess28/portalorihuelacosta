import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Clock, Users, Utensils, Music, Briefcase, Trophy, Crown } from 'lucide-react';
import { IMAGES } from '@/assets/images';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      image: IMAGES.ORIHUELA_BEACH_1,
      title: "Descubre Orihuela Costa",
      subtitle: "Tu guía premium del paraíso mediterráneo"
    },
    {
      image: IMAGES.ORIHUELA_BEACH_2,
      title: "Experiencias Únicas",
      subtitle: "Conectamos negocios, residentes y turistas"
    },
    {
      image: IMAGES.ORIHUELA_BEACH_3,
      title: "Vive la Costa",
      subtitle: "Playas, gastronomía y vida nocturna"
    }
  ];

  const categories = [
    {
      icon: Utensils,
      title: "Restaurantes & Bares",
      description: "Los mejores sabores mediterráneos",
      count: "120+ locales",
      color: "neon-cyan",
      image: IMAGES.RESTAURANT_NEON_1
    },
    {
      icon: Music,
      title: "Vida Nocturna",
      description: "Diversión hasta el amanecer",
      count: "45+ venues",
      color: "neon-magenta",
      image: IMAGES.NIGHTLIFE_NEON_1
    },
    {
      icon: Briefcase,
      title: "Servicios Profesionales",
      description: "Expertos a tu servicio",
      count: "200+ profesionales",
      color: "neon-violet",
      image: IMAGES.PROFESSIONAL_OFFICE_1
    },
    {
      icon: Trophy,
      title: "Golf & Deportes",
      description: "Campos de clase mundial",
      count: "15+ campos",
      color: "neon-blue",
      image: IMAGES.GOLF_COURSE_1
    }
  ];

  const featuredBusinesses = [
    {
      name: "Restaurante Mar Azul",
      category: "Gastronomía",
      rating: 4.8,
      image: IMAGES.RESTAURANT_NEON_2,
      premium: true,
      location: "Playa Flamenca"
    },
    {
      name: "Club Nocturno Neon",
      category: "Vida Nocturna",
      rating: 4.6,
      image: IMAGES.NIGHTLIFE_NEON_3,
      premium: true,
      location: "La Zenia"
    },
    {
      name: "Golf Las Colinas",
      category: "Deportes",
      rating: 4.9,
      image: IMAGES.GOLF_COURSE_2,
      premium: false,
      location: "Las Colinas"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-border/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-lg neon-glow"></div>
              <h1 className="text-xl font-bold neon-text">Portal Orihuela Costa</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#inicio" className="text-foreground hover:text-neon-cyan transition-colors">Inicio</a>
              <a href="#restaurantes" className="text-foreground hover:text-neon-cyan transition-colors">Restaurantes</a>
              <a href="#vida-nocturna" className="text-foreground hover:text-neon-cyan transition-colors">Vida Nocturna</a>
              <a href="#servicios" className="text-foreground hover:text-neon-cyan transition-colors">Servicios</a>
              <a href="#golf" className="text-foreground hover:text-neon-cyan transition-colors">Golf</a>
              <Button variant="outline" className="neon-border hover-neon">
                <Crown className="w-4 h-4 mr-2" />
                Premium
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroSlides[currentSlide].image} 
            alt="Orihuela Costa" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-text">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="neon-glow hover-neon">
                <MapPin className="w-5 h-5 mr-2" />
                Explorar Mapa
              </Button>
              <Button size="lg" variant="outline" className="neon-border hover-neon">
                <Users className="w-5 h-5 mr-2" />
                Únete a la Comunidad
              </Button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-neon-cyan neon-glow' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">Explora por Categorías</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre los mejores lugares y servicios de Orihuela Costa organizados por categorías
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="glass-card hover-neon cursor-pointer group">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <IconComponent className={`w-8 h-8 text-${category.color}`} />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="neon-border">
                      {category.count}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Businesses */}
      <section className="py-20 px-4 gradient-neon">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 neon-text">Negocios Destacados</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Los mejores establecimientos recomendados por nuestra comunidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBusinesses.map((business, index) => (
              <Card key={index} className="glass-card hover-neon cursor-pointer group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={business.image} 
                    alt={business.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  {business.premium && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black neon-glow">
                        <Crown className="w-3 h-3 mr-1" />
                        Premium
                      </Badge>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-semibold">{business.rating}</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{business.name}</CardTitle>
                  <CardDescription className="flex items-center space-x-2">
                    <Badge variant="outline">{business.category}</Badge>
                    <span className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-1" />
                      {business.location}
                    </span>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="glass-card neon-border max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold mb-4 neon-text">
                ¿Tienes un Negocio?
              </CardTitle>
              <CardDescription className="text-xl">
                Únete a nuestra plataforma premium y destaca entre la competencia
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-lg neon-glow mx-auto md:mx-0"></div>
                  <h3 className="font-semibold">Visibilidad Premium</h3>
                  <p className="text-sm text-muted-foreground">Aparece en los primeros resultados</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-magenta to-neon-violet rounded-lg neon-glow mx-auto md:mx-0"></div>
                  <h3 className="font-semibold">Perfil Destacado</h3>
                  <p className="text-sm text-muted-foreground">Diseño personalizado y atractivo</p>
                </div>
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-violet to-neon-cyan rounded-lg neon-glow mx-auto md:mx-0"></div>
                  <h3 className="font-semibold">Estadísticas</h3>
                  <p className="text-sm text-muted-foreground">Analiza tu rendimiento</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="neon-glow hover-neon">
                  <Crown className="w-5 h-5 mr-2" />
                  Hazte Premium - 9,90€/mes
                </Button>
                <Button size="lg" variant="outline" className="neon-border hover-neon">
                  Más Información
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-lg neon-glow"></div>
                <h3 className="text-lg font-bold neon-text">Portal Orihuela Costa</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Tu guía premium del paraíso mediterráneo. Conectamos negocios, residentes y turistas.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Categorías</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-neon-cyan transition-colors">Restaurantes</a></li>
                <li><a href="#" className="hover:text-neon-cyan transition-colors">Vida Nocturna</a></li>
                <li><a href="#" className="hover:text-neon-cyan transition-colors">Servicios</a></li>
                <li><a href="#" className="hover:text-neon-cyan transition-colors">Golf & Deportes</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Para Negocios</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-neon-cyan transition-colors">Planes Premium</a></li>
                <li><a href="#" className="hover:text-neon-cyan transition-colors">Publicidad</a></li>
                <li><a href="#" className="hover:text-neon-cyan transition-colors">Estadísticas</a></li>
                <li><a href="#" className="hover:text-neon-cyan transition-colors">Soporte</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Contacto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@portalorihuelacosta.com</li>
                <li>+34 965 XXX XXX</li>
                <li>Orihuela Costa, Alicante</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Portal Orihuela Costa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
