import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);

      // Active section detection
      const sections = ['home', 'about', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      category: "Popularne usługi",
      items: [
        { name: "Manicure Hybrydowy (1 kolor)", price: "120,00 zł", time: "1g 10min" },
        { name: "Manicure Hybrydowy 1 Kolor Z Opiłowaniem Hybrydy Po Innym Salonie", price: "130,00 zł", time: "1g 15min" },
        { name: "Korekta Żel (zdobienie)", price: "od 140,00 zł do 170,00 zł", time: "1g 40min" },
      ]
    },
    {
      category: "Paznokcie",
      items: [
        { name: "Żel na naturalnej płytce (zdobienie)", price: "od 150,00 zł do 180,00 zł", time: "1g 30min" },
        { name: "Żel na naturalnej płytce (1 kolor)", price: "140,00 zł", time: "1g 15min" },
        { name: "Przedłużanie Paznokci na Formie (1 kolor)", price: "175,00 zł", time: "1g 50min" },
        { name: "Manicure Hybrydowy (zdobienie)", price: "od 130,00 zł do 160,00 zł", time: "1g 20min" },
        { name: "Ściągnięcie Hybrydy; Żelu + Odżywka Stopy", price: "75,00 zł", time: "40min" },
      ]
    },
    {
      category: "Pedicure",
      items: [
        { name: "Pedicure Frezarkowy + Hybryda (1 kolor)", price: "150,00 zł", time: "1g 5min" },
        { name: "Pedicure Hybrydowy Z Opracowaniem Stopy Frezarką", price: "150,00 zł", time: "1g 5min" },
        { name: "Pedicure Frezarkowy + Hybryda (French/Zdobienie)", price: "160,00 zł", time: "1g 5min" },
        { name: "Pedicure Hybrydowy (1 kolor)", price: "120,00 zł", time: "50min" },
        { name: "Pedicure Hybrydowy (French/Zdobienie)", price: "130,00 zł", time: "50min" },
      ]
    },
    {
      category: "Przedłużanie paznokci",
      items: [
        { name: "Przedłużanie paznokci obgryzionych – forma (1 kolor)", price: "180,00 zł", time: "1g 40min" },
        { name: "Przedłużanie paznokci obgryzionych – forma (zdobienie)", price: "od 190,00 zł do 220,00 zł", time: "1g 50min" },
        { name: "Przedłużanie Paznokci Na Formie (Zdobienie)", price: "180,00 zł", time: "1g 50min" },
      ]
    },
    {
      category: "Korekta żelu",
      items: [
        { name: "Korekta Żel (1 kolor)", price: "140,00 zł", time: "1g 30min" },
        { name: "Korekta Żel (zdobienie)", price: "od 140,00 zł do 170,00 zł", time: "1g 40min" },
      ]
    },
    {
      category: "Inne usługi",
      items: [
        { name: "Naprawa 1 paznokcia", price: "15,00 zł", time: "15min" },
      ]
    }
  ];

  const openingHours = [
    { day: "Poniedziałek", hours: "10:00 - 19:00" },
    { day: "Wtorek", hours: "10:00 - 19:00" },
    { day: "Środa", hours: "10:00 - 19:00" },
    { day: "Czwartek", hours: "10:00 - 19:00" },
    { day: "Piątek", hours: "10:00 - 19:00" },
    { day: "Sobota", hours: "10:00 - 15:00" },
    { day: "Niedziela", hours: "Zamknięte" }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__container">
          <div className="nav__logo" onClick={() => scrollToSection('home')}>
            <img src="/logo.png" alt="#Nails Karolina Nowaczyńska" />
            <span>#Nails Karolina Nowaczyńska</span>
          </div>
          
          <div className={`nav__menu ${isMenuOpen ? 'nav__menu--open' : ''}`}>
            <a 
              href="#home" 
              className={`nav__link ${activeSection === 'home' ? 'nav__link--active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              Strona główna
            </a>
            <a 
              href="#about" 
              className={`nav__link ${activeSection === 'about' ? 'nav__link--active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              O nas
            </a>
            <a 
              href="#services" 
              className={`nav__link ${activeSection === 'services' ? 'nav__link--active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
            >
              Usługi
            </a>
            <a 
              href="#contact" 
              className={`nav__link ${activeSection === 'contact' ? 'nav__link--active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Kontakt
            </a>
          </div>

          <button 
            className={`nav__burger ${isMenuOpen ? 'nav__burger--active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero__bg">
          <div><img src="/img/image_8.png" alt="Nails Karolina Nowaczynska" style={width: "100%", height: "100%", objectFit: "cover"} /></div>
        </div>
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__title-line">Profesjonalny</span>
            <span className="hero__title-line hero__title-line--accent">Manicure & Pedicure</span>
          </h1>
          <p className="hero__subtitle">
            Zadbaj o swoje paznokcie w profesjonalnym salonie w Katowicach
          </p>
          <div className="hero__buttons">
            <a 
              href="https://booksy.com/pl-pl/71317_nails-karolina-nowaczynska_paznokcie_11597_katowice" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Umów wizytę
            </a>
            <button 
              className="btn btn--secondary"
              onClick={() => scrollToSection('services')}
            >
              Zobacz usługi
            </button>
          </div>
        </div>
        <div className="hero__scroll">
          <span>Przewiń w dół</span>
          <div className="hero__scroll-line"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about__grid">
            <div className="about__content">
              <h2 className="section__title">O nas</h2>
              <div className="about__text">
                <p>
                  Witamy w salonie #Nails Karolina Nowaczyńska – miejscu, gdzie Twoje paznokcie 
                  zyskają profesjonalną opiekę i niepowtarzalny wygląd.
                </p>
                <p>
                  Specjalizujemy się w manicure hybrydowym, przedłużaniu paznokci oraz pedicure. 
                  Każda usługa wykonywana jest z najwyższą starannością, przy użyciu wysokiej 
                  jakości produktów i profesjonalnego sprzętu.
                </p>
                <p>
                  Nasz salon znajduje się w Katowicach i zapewniamy komfortowe warunki 
                  oraz indywidualne podejście do każdego klienta.
                </p>
              </div>
              <div className="about__features">
                <div className="feature">
                  <div className="feature__icon">💅</div>
                  <div className="feature__text">
                    <h3>Profesjonalizm</h3>
                    <p>Wieloletnie doświadczenie i ciągłe podnoszenie kwalifikacji</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature__icon">✨</div>
                  <div className="feature__text">
                    <h3>Jakość</h3>
                    <p>Używamy tylko najlepszych produktów i materiałów</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature__icon">🎨</div>
                  <div className="feature__text">
                    <h3>Kreatywność</h3>
                    <p>Indywidualne podejście i niepowtarzalne wzory</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about__image">
              <div>{/* TODO: Prompt: [Professional nail technician working on client's nails in modern salon, focused hands applying nail polish, clean minimalist workspace with professional tools], Proporcje: [4:5, 3:4] */}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section__title">Nasze usługi</h2>
          <p className="section__subtitle">
            Poznaj pełną ofertę naszego salonu
          </p>
          
          <div className="services__grid">
            {services.map((category, index) => (
              <div key={index} className="service-category" style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="service-category__title">{category.category}</h3>
                <div className="service-category__items">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="service-item">
                      <div className="service-item__header">
                        <h4 className="service-item__name">{item.name}</h4>
                        <span className="service-item__price">{item.price}</span>
                      </div>
                      <span className="service-item__time">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="services__cta">
            <a 
              href="https://booksy.com/pl-pl/71317_nails-karolina-nowaczynska_paznokcie_11597_katowice" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn--primary btn--large"
            >
              Zarezerwuj termin online
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <div className="container">
          <h2 className="section__title">Nasze prace</h2>
          <div className="gallery__grid">
            <div className="gallery__item"><img src="/img/image_7.png" alt="Nails Karolina Nowaczynska" style={width: "100%", height: "100%", objectFit: "cover"} /></div>
            <div className="gallery__item"><img src="/img/image_6.png" alt="Nails Karolina Nowaczynska" style={width: "100%", height: "100%", objectFit: "cover"} /></div>
            <div className="gallery__item"><img src="/img/image_5.png" alt="Nails Karolina Nowaczynska" style={width: "100%", height: "100%", objectFit: "cover"} /></div>
            <div className="gallery__item"><img src="/img/image_4.png" alt="Nails Karolina Nowaczynska" style={width: "100%", height: "100%", objectFit: "cover"} /></div>
            <div className="gallery__item"><img src="/img/image_3.png" alt="Nails Karolina Nowaczynska" style={width: "100%", height: "100%", objectFit: "cover"} /></div>
            <div className="gallery__item"><img src="/img/image_2.png" alt="Nails Karolina Nowaczynska" style={width: "100%", height: "100%", objectFit: "cover"} /></div>
          </div>
          <div className="gallery__cta">
            <a 
              href="https://www.instagram.com/nails_karolina_nowaczynska/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              Zobacz więcej na Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__grid">
            <div className="contact__info">
              <h2 className="section__title">Kontakt</h2>
              
              <div className="contact__item">
                <h3>Adres</h3>
                <p>Rolna 18<br />40-555 Katowice</p>
              </div>

              <div className="contact__item">
                <h3>Telefon</h3>
                <a href="tel:660665702">660 665 702</a>
              </div>

              <div className="contact__item">
                <h3>Godziny otwarcia</h3>
                <div className="opening-hours">
                  {openingHours.map((day, index) => (
                    <div key={index} className="opening-hours__item">
                      <span className="opening-hours__day">{day.day}</span>
                      <span className="opening-hours__hours">{day.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact__social">
                <h3>Znajdź nas</h3>
                <div className="social-links">
                  <a 
                    href="https://www.instagram.com/nails_karolina_nowaczynska/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://booksy.com/pl-pl/71317_nails-karolina-nowaczynska_paznokcie_11597_katowice" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    Booksy
                  </a>
                </div>
              </div>
            </div>

            <div className="contact__map">
              <div><img src="/img/image_1.png" alt="Nails Karolina Nowaczynska" style={width: "100%", height: "100%", objectFit: "cover"} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__logo">
              <img src="/logo.png" alt="#Nails Karolina Nowaczyńska" />
              <span>#Nails Karolina Nowaczyńska</span>
            </div>
            <p className="footer__text">
              Profesjonalny salon manicure i pedicure w Katowicach
            </p>
          </div>
          <div className="footer__bottom">
            <p>&copy; 2024 #Nails Karolina Nowaczyńska. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;