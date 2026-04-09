/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Menu, X, Star, MapPin, Phone, Instagram, Facebook, 
  Sparkles, Eye, Hand, Droplet, Wind, ChevronLeft, ChevronRight,
  Heart
} from 'lucide-react';

const NAV_LINKS = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Sobre Nosotras', href: '#nosotras' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Resultados', href: '#resultados' },
  { name: 'Reseñas', href: '#resenas' },
  { name: 'Visítanos', href: '#visitanos' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-2">
          <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1775754270/83107273_211529806637540_362261133999996928_n._tphrhq.jpg" alt="Estudio Mágico Logo" className="h-12 w-auto" referrerPolicy="no-referrer" />
          <div className="flex gap-1 font-bold">
            <span className="text-charcoal">Estudio</span>
            <span className="text-teal-primary">Mágico</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-charcoal hover:text-teal-primary transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#reserva" className="bg-teal-primary text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-teal-dark transition-colors shadow-md">
            Reservar Cita
          </a>
        </div>

        <button className="md:hidden text-charcoal z-50 relative" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div 
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col px-4 py-4 gap-4">
          {NAV_LINKS.map(link => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-charcoal font-medium py-2 border-b border-gray-50">
              {link.name}
            </a>
          ))}
          <a href="#reserva" onClick={() => setIsMobileMenuOpen(false)} className="bg-teal-primary text-white text-center px-6 py-3 rounded-full font-medium mt-2">
            Reservar Cita
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cream to-white z-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--color-gold) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      </div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-primary/5 rounded-full blur-3xl z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-5xl lg:text-7xl text-charcoal leading-tight mb-6">
              Tu belleza merece algo <span className="text-teal-primary italic">mágico</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Estudio de estética en Oviedo donde el detalle, el cuidado y la profesionalidad se convierten en arte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#reserva" className="bg-teal-primary text-white text-center px-8 py-4 rounded-full font-medium hover:bg-teal-dark transition-colors shadow-lg shadow-teal-primary/20">
                Reservar ahora
              </a>
              <a href="#servicios" className="border border-charcoal text-charcoal text-center px-8 py-4 rounded-full font-medium hover:bg-charcoal hover:text-white transition-colors">
                Ver servicios
              </a>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-md border border-gray-50"
            >
              <div className="flex text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="font-medium text-sm text-charcoal">4.6</span>
              <span className="text-sm text-gray-500">· +66 reseñas en Google</span>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-t-full rounded-b-3xl overflow-hidden relative shadow-2xl">
              <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1775755190/U%C3%B1itas_de_acrygel_Ombligo_de_semana_Agenda_tu_cita-_%EF%B8%8F_684634348_U%C3%B1as_esculpidas_Semiperma_lqyv3h.jpg" alt="Estudio Mágico" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold rounded-tl-3xl z-[-1]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="nosotras" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative">
              <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1775754270/83107273_211529806637540_362261133999996928_n._tphrhq.jpg" alt="Estudio Mágico" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-gold/10 rounded-full blur-2xl z-[-1]"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-6">Más que un estudio, <span className="text-teal-primary italic">una experiencia</span></h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              En Estudio Mágico creemos que cuidarte va más allá del resultado. Desde que abres la puerta, queremos que te sientas bienvenida, mimada y en manos de verdaderas profesionales.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              Yuri, Laura y todo el equipo llevan años convirtiendo cada visita en un momento especial.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { title: 'Profesionalidad', icon: <Sparkles size={20} /> },
                { title: 'Materiales de calidad', icon: <Star size={20} /> },
                { title: 'Trato personalizado', icon: <Heart size={20} /> }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="text-gold">{item.icon}</div>
                  <h3 className="font-medium text-charcoal">{item.title}</h3>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Microblading',
      desc: 'Cejas perfectas que duran. Definición natural con técnica de precisión.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Belleza de Pestañas',
      desc: 'Rizados, laminados y extensiones para una mirada que habla por ti.'
    },
    {
      icon: <Hand className="w-8 h-8" />,
      title: 'Uñas Acrílicas',
      desc: 'Dureza, forma y diseño a medida. Resultados que aguantan semanas.'
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: 'Esmaltado Permanente',
      desc: 'Color impecable que no se despega. Acabado profesional de larga duración.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Manos y Pies',
      desc: 'Manicura y pedicura con mimo. Sales nueva, de verdad.'
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'Maderoterapia',
      desc: 'Técnica natural para modelar y relajar. Tu cuerpo lo nota desde la primera sesión.'
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-4">Nuestros servicios</h2>
          <p className="text-gray-600 text-lg">Desde el detalle más fino hasta tu transformación completa</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="text-gold mb-6">{service.icon}</div>
              <h3 className="font-serif text-2xl text-charcoal mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-teal-primary group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a href="#reserva" className="inline-block bg-teal-primary text-white px-8 py-4 rounded-full font-medium hover:bg-teal-dark transition-colors shadow-lg shadow-teal-primary/20">
            Reserva tu servicio
          </a>
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  const works = [
    'https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1775754271/649219231_18098973973936106_6661628933964860429_n._rslzli.jpg',
    'https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1775754271/582738986_18088833193936106_7714136600989820260_n._grwulh.jpg',
    'https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1775754271/587968686_18090156781936106_8484332149119761246_n._by1n8n.jpg',
    'https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1775754271/531697380_18078414562936106_3991017888113551885_n._uelxfy.jpg',
    'https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1775754271/527985818_18077936461936106_2044255814189652132_n._jun6q6.jpg',
    'https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1775755069/Brow_Lamination_O_Laminado_de_CejasEs_un_tratamiento_semipermanente_no_invasivo_que_se_aplica_rweywy.jpg'
  ];

  return (
    <section id="resultados" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-4">El resultado habla por sí solo</h2>
          <p className="text-gray-600 text-lg">Cada clienta es una obra de arte</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {works.map((work, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="aspect-square relative group overflow-hidden rounded-xl"
            >
              <img src={work} alt={`Resultado ${i + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-teal-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif text-xl">Ver más</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center flex flex-col items-center gap-6">
          <p className="text-gray-600">Síguenos en Instagram para ver nuestros últimos trabajos</p>
          <a href="https://www.instagram.com/magico_estudio/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-2 border-charcoal text-charcoal px-6 py-3 rounded-full font-medium hover:bg-charcoal hover:text-white transition-colors">
            <Instagram size={20} />
            @magico_estudio
          </a>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    { text: "Llevo 4 años con Yuri, y cada mes es una experiencia nueva. Yo llego con una idea y ella siempre la supera.", author: "Marina A." },
    { text: "Viene desde Italia para hacerme las uñas aquí. Son muy buenas y muy gentiles.", author: "Stefania A." },
    { text: "Las elegí para el día de mi boda. Ha sido un total acierto.", author: "Angie R." },
    { text: "Nunca me habían hecho las uñas tan bien. Nivel de perfección y pulcritud increíble.", author: "M.F.C." },
    { text: "Después de tres años viniendo, sigo diciendo que son las mejores.", author: "Raquelina R." },
    { text: "Un entorno muy acogedor, las chicas una pasada y los resultados de 10.", author: "Aida S." },
    { text: "Siempre salgo con las uñas impecables. Trato súper amable y resultados de 10.", author: "epgandrade" },
    { text: "Sales nueva. 100% recomendables.", author: "Mariposa Curiosa" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="resenas" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-4">Lo que dicen nuestras clientas</h2>
          <div className="flex items-center justify-center gap-2 text-gold mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <p className="text-gray-600 font-medium">4.6 de media · +66 opiniones verificadas en Google</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden px-4 py-8">
            <motion.div 
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {reviews.map((review, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm text-center relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-cream rounded-full border-4 border-white flex items-center justify-center text-teal-primary font-serif text-2xl italic">
                      {review.author.charAt(0)}
                    </div>
                    <div className="flex justify-center text-gold mb-6 mt-4">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-xl md:text-2xl font-serif text-charcoal leading-relaxed mb-8">"{review.text}"</p>
                    <p className="text-gray-500 font-medium">— {review.author}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-charcoal hover:text-teal-primary transition-colors z-10">
            <ChevronLeft size={24} />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-charcoal hover:text-teal-primary transition-colors z-10">
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button 
                key={i} 
                onClick={() => { setIsAutoPlaying(false); setCurrentIndex(i); }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentIndex ? 'bg-teal-primary w-8' : 'bg-gray-300'}`}
                aria-label={`Ir a reseña ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a href="https://www.google.com/maps/place/Estudio+M%C3%A1gico/@43.3880853,-5.8187699,17z/data=!4m8!3m7!1s0xd368c7668b70951:0x868efa083d5e2086!8m2!3d43.3880814!4d-5.816195!9m1!1b1!16s%2Fg%2F11spp1l75s?" target="_blank" rel="noopener noreferrer" className="inline-block border-2 border-teal-primary text-teal-primary px-8 py-3 rounded-full font-medium hover:bg-teal-primary hover:text-white transition-colors">
            Deja tu reseña en Google
          </a>
        </div>
      </div>
    </section>
  );
};

const VisitUs = () => {
  return (
    <section id="visitanos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal mb-8">Encuéntranos en Oviedo</h2>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-teal-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-charcoal mb-1">Dirección</h3>
                  <p className="text-gray-600">C. Molin de Pachon, 6<br/>33011 Oviedo, Asturias</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-teal-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-charcoal mb-1">Teléfono</h3>
                  <a href="tel:684634348" className="text-gray-600 hover:text-teal-primary transition-colors">684 63 43 48</a>
                </div>
              </div>
            </div>

            <div className="bg-cream p-8 rounded-2xl mb-8">
              <h3 className="font-serif text-2xl text-charcoal mb-4">Horario</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex justify-between">
                  <span>Lunes a Viernes</span>
                  <span className="font-medium text-charcoal">9:15–14:00 · 16:00–20:00</span>
                </li>
                <li className="flex justify-between border-t border-gray-200 pt-3">
                  <span>Sábado</span>
                  <span className="font-medium text-charcoal">10:00–14:00</span>
                </li>
                <li className="flex justify-between border-t border-gray-200 pt-3">
                  <span>Domingo</span>
                  <span className="font-medium text-teal-primary">Cerrado</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4">
              <a href="https://www.instagram.com/magico_estudio/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-teal-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/Magicoestudio/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-teal-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[500px] rounded-3xl overflow-hidden shadow-lg"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.48161775796!2d-5.818769923383344!3d43.38808527111629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368c7668b70951%3A0x868efa083d5e2086!2sEstudio%20M%C3%A1gico!5e0!3m2!1ses!2ses!4v1712684523456!5m2!1ses!2ses" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación de Estudio Mágico"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  return (
    <section id="reserva" className="py-24 bg-teal-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-dark/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-serif text-4xl lg:text-6xl text-white mb-6">¿Lista para tu momento mágico?</h2>
        <p className="text-teal-50 text-xl mb-10 max-w-2xl mx-auto">
          Reserva tu cita online en segundos. Sin esperas, sin llamadas.
        </p>
        
        <a href="https://booksy.com/es-es/5325_estudio-magico_salon-de-unas_79758_oviedo#ba_s=seo" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-teal-primary px-10 py-5 rounded-full text-lg font-bold hover:bg-cream hover:scale-105 transition-all shadow-xl mb-6">
          Reservar ahora en Booksy
        </a>
        
        <p className="text-white/80">
          También puedes llamarnos al <a href="tel:684634348" className="text-white font-medium hover:underline">684 63 43 48</a>
        </p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-charcoal pt-16 pb-8 border-t-4 border-teal-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <img src="https://res.cloudinary.com/dfbsqy5ul/image/upload/q_auto/f_auto/v1775754270/83107273_211529806637540_362261133999996928_n._tphrhq.jpg" alt="Estudio Mágico Logo" className="h-16 w-auto" referrerPolicy="no-referrer" />
            </div>
            <p className="text-gray-400 max-w-xs">
              Estudio de belleza en Oviedo donde el detalle, el cuidado y la profesionalidad se convierten en arte.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif text-xl mb-6">Enlaces rápidos</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-teal-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-xl mb-6">Contacto</h4>
            <ul className="space-y-3 text-gray-400 mb-6">
              <li>C. Molin de Pachon, 6</li>
              <li>33011 Oviedo, Asturias</li>
              <li><a href="tel:684634348" className="hover:text-teal-primary transition-colors">684 63 43 48</a></li>
            </ul>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/magico_estudio/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/Magicoestudio/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Estudio Mágico · Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans antialiased selection:bg-teal-primary/30 selection:text-teal-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Results />
        <Reviews />
        <VisitUs />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
