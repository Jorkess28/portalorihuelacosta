import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Star, Clock, Phone, Globe, Crown, Search, Filter } from 'lucide-react';
import { IMAGES } from '@/assets/images';

const Businesses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const businesses = [
    {
      id: 1,
      name: "Restaurante Mar Azul",
      category: "Restaurante",
      location: "Playa Flamenca",
      rating: 4.8,
      reviews: 156,
      image: IMAGES.RESTAURANT_NEON_2,
      premium: true,
      description: "Cocina mediterránea con vistas al mar. Especialidad en pescados frescos y arroces.",
      phone: "+34 965 123 456",
      website: "www.marazul.com",
      hours: "12:00 - 00:00",
      price: "€€€"
    },
    {
      id: 2,
      name: "Club Nocturno Neon",
      category: "Vida Nocturna",
      location: "La Zenia",
      rating: 4.6,
      reviews: 89,
      image: IMAGES.NIGHTLIFE_NEON_3,
      premium: true,
      description: "El mejor ambiente nocturno con DJs internacionales y cócteles únicos.",
      phone: "+34 965 789 012",
      website: "www.clubneon.com",
      hours: "22:00 - 06:00",
      price: "€€"
    },
    {
      id: 3,
      name: "Golf Las Colinas",
      category: "Golf",
      location: "Las Colinas",
      rating: 4.9,
      reviews: 234,
      image: IMAGES.GOLF_COURSE_2,
      premium: false,
      description: "Campo de golf de 18 hoyos diseñado por profesionales. Vistas espectaculares.",
      phone: "+34 965 345 678",
      website: "www.golflascolinas.com",
      hours: "07:00 - 19:00",
      price: "€€€€"
    },
    {
      id: 4,
      name: "Clínica Dental Costa",
      category: "Servicios",
      location: "Torrevieja",
      rating: 4.7,
      reviews: 67,
      image: IMAGES.PROFESSIONAL_OFFICE_2,
      premium: true,
      description: "Servicios dentales completos con tecnología de vanguardia.",
      phone: "+34 965 456 789",
      website: "www.dentalcosta.com",
      hours: "09:00 - 18:00",
      price: "€€"
    },
    {
      id: 5,
      name: "Tapas El Rincón",
      category: "Restaurante",
      location: "Cabo Roig",
      rating: 4.5,
      reviews: 198,
      image: IMAGES.RESTAURANT_NEON_4,
      premium: false,
      description: "Auténticas tapas españolas en ambiente familiar y acogedor.",
      phone: "+34 965 567 890",
      website: "www.tapasrincon.com",
      hours: "18:00 - 01:00",
      price: "€€"
    },
    {
      id: 6,
      name: "Sunset Lounge Bar",
      category: "Vida Nocturna",
      location: "Playa Flamenca",
      rating: 4.4,
      reviews: 112,
      image: IMAGES.NIGHTLIFE_NEON_5,
      premium: false,
      description: "Bar con terraza y vistas al atardecer. Cócteles artesanales.",
      phone: "+34 965 678 901",
      website: "www.sunsetlounge.com",
      hours: "17:00 - 02:00",
      price: "€€"
    }
  ];

  const categories = [
    { value: 'all', label: 'Todas las categorías' },
    { value: 'Restaurante', label: 'Restaurantes' },
    { value: 'Vida Nocturna', label: 'Vida Nocturna' },
    { value: 'Golf', label: 'Golf & Deportes' },
    { value: 'Servicios', label: 'Servicios Profesionales' }
  ];

  const locations = [
    { value: 'all', label: 'Todas las ubicaciones' },
    { value: 'Playa Flamenca', label: 'Playa Flamenca' },
    { value: 'La Zenia', label: 'La Zenia' },
    { value: 'Las Colinas', label: 'Las Colinas' },
    { value: 'Torrevieja', label: 'Torrevieja' },
    { value: 'Cabo Roig', label: 'Cabo Roig' }
  ];

  const filteredBusinesses = businesses.filter(business => {
    const matchesSearch = business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         business.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || business.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || business.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  // Sort premium businesses first
  const sortedBusinesses = [...filteredBusinesses].sort((a, b) => {
    if (a.premium && !b.premium) return -1;
    if (!a.premium && b.premium) return 1;
    return b.rating - a.rating;
  });

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-border/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-neon-cyan to-neon-magenta rounded-lg neon-glow"></div>
              <h1 className="text-xl font-bold neon-text">Portal Orihuela Costa</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-foreground hover:text-neon-cyan transition-colors">Inicio</a>
              <a href="/businesses" className="text-neon-cyan font-semibold">Negocios</a>
              <a href="#restaurantes" className="text-foreground hover:text-neon-cyan transition-colors">Restaurantes</a>
              <a href="#vida-nocturna" className="text-foreground hover:text-neon-cyan transition-colors">Vida Nocturna</a>
              <Button variant="outline" className="neon-border hover-neon">
                <Crown className="w-4 h-4 mr-2" />
                Premium
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-20 px-4 gradient-neon">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 neon-text">
            Directorio de Negocios
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Descubre los mejores establecimientos de Orihuela Costa. Desde restaurantes gourmet hasta servicios profesionales.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 border-b border-border/30">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Buscar negocios..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 neon-border"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48 neon-border">
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-full md:w-48 neon-border">
                <SelectValue placeholder="Ubicación" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    {location.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" className="neon-border hover-neon">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Mostrando {sortedBusinesses.length} de {businesses.length} negocios
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sortedBusinesses.map((business) => (
              <Card key={business.id} className="glass-card hover-neon cursor-pointer group">
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
                  
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="neon-border">
                      {business.category}
                    </Badge>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{business.rating}</span>
                      <span className="text-white/70 text-sm">({business.reviews})</span>
                    </div>
                    <Badge variant="outline" className="text-white border-white/30">
                      {business.price}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl flex items-center justify-between">
                    {business.name}
                  </CardTitle>
                  <CardDescription className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{business.location}</span>
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {business.description}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{business.hours}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span>{business.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Globe className="w-4 h-4" />
                      <span>{business.website}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button size="sm" className="flex-1 neon-glow hover-neon">
                      Ver Detalles
                    </Button>
                    <Button size="sm" variant="outline" className="neon-border hover-neon">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="neon-border hover-neon">
                      <MapPin className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedBusinesses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">
                No se encontraron negocios con los filtros seleccionados
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedLocation('all');
                }}
                variant="outline" 
                className="neon-border hover-neon"
              >
                Limpiar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-neon">
        <div className="container mx-auto text-center">
          <Card className="glass-card neon-border max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold mb-4 neon-text">
                ¿No encuentras tu negocio?
              </CardTitle>
              <CardDescription className="text-lg">
                Únete a nuestra plataforma y aumenta tu visibilidad
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="neon-glow hover-neon">
                  <Crown className="w-5 h-5 mr-2" />
                  Registrar Negocio
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
                Tu guía premium del paraíso mediterráneo.
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

export default Businesses;