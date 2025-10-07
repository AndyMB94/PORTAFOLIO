import React, { useState, useEffect } from 'react';
import { Code, Briefcase, Award, Mail, Phone, Linkedin, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Andy Mallcco
            </h1>
            <div className="flex gap-6">
              {['Inicio', 'Sobre Mí', 'Experiencia', 'Proyectos', 'Contacto'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <Code className="w-16 h-16 text-purple-400" />
              </div>
            </div>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Desarrollador de Software
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Estudiante de 6to ciclo en TECSUP | Especializado en Desarrollo Web Full Stack
            </p>
            <div className="flex gap-4 justify-center">
              <a href="mailto:andy.mallcco@tecsup.edu.pe" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contáctame
              </a>
              <button onClick={() => scrollToSection('proyectos')} className="border border-purple-400 hover:bg-purple-400/10 px-6 py-3 rounded-lg transition-all duration-300">
                Ver Proyectos
              </button>
            </div>
          </div>
          <button onClick={() => scrollToSection('sobre-mí')} className="animate-bounce mt-12">
            <ChevronDown className="w-8 h-8 text-purple-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mí" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Sobre Mí</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Perfil Profesional</h3>
              <p className="text-gray-300 leading-relaxed">
                Estudiante de 6to ciclo de Diseño y Desarrollo de Software en TECSUP con capacidad de trabajo en equipo, resolución de problemas bajo presión y comunicación efectiva. Cuento con nivel avanzado de inglés, conocimientos sólidos en programación orientada a objetos y experiencia en desarrollo web.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Habilidades Técnicas</h3>
              <div className="flex flex-wrap gap-2">
                {['Java EE', 'Python', 'Django', 'React JS', 'PHP', 'Linux', 'Machine Learning', 'Scrum', 'Ciberseguridad'].map((skill, idx) => (
                  <span key={idx} className="bg-purple-600/30 px-3 py-1 rounded-full text-sm border border-purple-400/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="min-h-screen flex items-center py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Experiencia</h2>
          
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-purple-400">Practicante - Innovación y Tecnología</h3>
                  <p className="text-gray-400 mb-2">Fiberlux Tech S.A.C | Enero 2025 - Actualidad</p>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside">
                    <li>Diseño y desarrollo de base de datos y back-end para sistema inteligente de gestión de clientes</li>
                    <li>Automatización de procesos y consultas en el sistema</li>
                    <li>Integración de servicios para front-end</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-purple-400">Asesor de Ventas</h3>
                  <p className="text-gray-400 mb-2">Covisian España S.L | Abril 2018 - Junio 2018</p>
                  <ul className="text-gray-300 space-y-2 list-disc list-inside">
                    <li>90% de conversión de llamadas en ventas</li>
                    <li>Superación de metas mensuales en 15%</li>
                    <li>Gestión de alto volumen de llamadas con prioridad en satisfacción del cliente</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Proyectos Académicos</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-semibold">Veterinaria FOX</h3>
              </div>
              <p className="text-gray-400 mb-4">E-commerce B2C | 2024-1</p>
              <p className="text-gray-300 mb-4">
                Plataforma de venta de productos para mascotas con carrito de compras, pasarela de pagos y emisión de boletas.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-600/30 px-3 py-1 rounded-full text-sm border border-green-400/30">
                  E-commerce
                </span>
                <span className="bg-blue-600/30 px-3 py-1 rounded-full text-sm border border-blue-400/30">
                  Pasarela de Pagos
                </span>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-semibold">FruitCommerce</h3>
              </div>
              <p className="text-gray-400 mb-4">E-commerce B2B | 2024-2</p>
              <p className="text-gray-300 mb-4">
                Centralización de compra y venta de frutas para mayoristas y minoristas con sistema de recomendaciones basado en Machine Learning.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-orange-600/30 px-3 py-1 rounded-full text-sm border border-orange-400/30">
                  B2B
                </span>
                <span className="bg-pink-600/30 px-3 py-1 rounded-full text-sm border border-pink-400/30">
                  Machine Learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Certificaciones</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Nivel Avanzado de Inglés - Instituto Británico',
              'Scrum Fundamentals Certified',
              'Maratón LATAM Python - Cisco',
              'DataCamp LATAM Ciencia de Datos - Cisco',
              'Bootcamp ICPC - UTEC',
              'CyberGames LATAM Ciberseguridad - Cisco'
            ].map((cert, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 flex items-start gap-3">
                <Award className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="min-h-screen flex items-center py-20 px-6">
        <div className="max-w-4xl mx-auto text-center w-full">
          <h2 className="text-4xl font-bold mb-12">Contáctame</h2>
          <p className="text-xl text-gray-300 mb-12">
            Estoy disponible para oportunidades laborales y colaboraciones en proyectos
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:andy.mallcco@tecsup.edu.pe" className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <p className="text-gray-300">andy.mallcco@tecsup.edu.pe</p>
            </a>
            
            <a href="tel:927939655" className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <p className="text-gray-300">927 939 655</p>
            </a>
            
            <a href="https://pe.linkedin.com/in/andy-ayrton-mallcco-bohorquez" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
              <Linkedin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <p className="text-gray-300">LinkedIn</p>
            </a>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-4">¿Tienes un proyecto en mente?</h3>
            <p className="mb-6">Estoy comprometido con aportar soluciones tecnológicas que impulsen la eficiencia y el crecimiento</p>
            <a href="mailto:andy.mallcco@tecsup.edu.pe" className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Enviar Mensaje
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-6 text-center text-gray-400 border-t border-purple-500/20">
        <p>© 2025 Andy Ayrton Mallcco Bohorquez. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}