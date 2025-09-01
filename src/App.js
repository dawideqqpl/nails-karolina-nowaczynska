import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  };

  const services = [
    {
      category: "Popularne Usługi",
      items: [
        { name: "Manicure Hybrydowy (1 kolor)", price: "120,00 zł", time: "1g 10min" },
        { name: "Manicure Hybrydowy 1 Kolor Z Opiłowaniem", price: "130,00 zł", time: "1g 15min" },
        { name: "Korekta Żel (zdobienie)", price: "140,00 - 170,00 zł", time: "1g 40min" },
        { name: "Korekta Żel (1 kolor)", price: "140,00 zł", time: "1g 30min" }
      ]
    },
    {
      category: "Paznokcie",
      items: [
        { name: "Żel na naturalnej płytce (zdobienie)", price: "150,00 - 180,00 zł", time: "1g 30min" },
        { name: "Przedłużanie Paznokci na Formie (1 kolor)", price: "175,00 zł", time: "1g 50min" },
        { name: "Manicure Hybrydowy (zdobienie)", price: "130,00 - 160,00 zł", time: "1g 20min" },
        { name: "Ściągnięcie Hybrydy + Odżywka", price: "75,00 zł", time: "40min" }
      ]
    },
    {
      category: "Pedicure",
      items: [
        { name: "Pedicure Frezarkowy + Hybryda (1 kolor)", price: "150,00 zł", time: "1g 5min" },
        { name: "Pedicure Frezarkowy + Hybryda (French/Zdobienie)", price: "160,00 zł", time: "1g 5min" },
        { name: "Pedicure Hybrydowy (1 kolor)", price: "120,00 zł", time: "50min" },
        { name: "Pedicure Hybrydowy (French/Zdobienie)", price: "130,00 zł", time: "50min" }
      ]
    },
    {
      category: "Przedłużanie Paznokci",
      items: [
        { name: "Przedłużanie paznokci obgryzionych – forma (1 kolor)", price: "180,00 zł", time: "1g 40min" },
        { name: "Przedłużanie paznokci obgryzionych – forma (zdobienie)", price: "190,00 - 220,00 zł", time: "1g 50min" },
        { name: "Przedłużanie Paznokci Na Formie (Zdobienie)", price: "180,00 zł", time: "1g 50min" }
      ]
    },
    {
      category: "Inne Usługi",
      items: [
        { name: "Naprawa 1 paznokcia", price: "15,00 zł", time: "15min" }
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
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__logo">
            <img src="/logo.png" alt="#Nails Karolina Nowaczyńska" className="nav__logo-img" />
          </div>
          <ul className="nav__menu">
            <li className={`nav__item ${activeSection === 'hero' ? 'nav__item--active' : ''}`}>
              <button className="nav__link" onClick={() => scrollToSection('hero')}>Start</button>
            </li>
            <li className={`nav__item ${activeSection === 'about' ? 'nav__item--active' : ''}`}>
              <button className="nav__link" onClick={() => scrollToSection('about')}>O nas</button>
            </li>
            <li className={`nav__item ${activeSection === 'services' ? 'nav__item--active' : ''}`}>
              <button className="nav__link" onClick={() => scrollToSection('services')}>Usługi</button>
            </li>
            <li className={`nav__item ${activeSection === 'contact' ? 'nav__item--active' : ''}`}>
              <button className="nav__link" onClick={() => scrollToSection('contact')}>Kontakt</button>
            </li>
          </ul>
        </div>
      </nav>

      <section id="hero" className="section hero">
        <div className="hero__container">
          <div className="hero__content">
            <div className={`hero__text ${isVisible.hero ? 'animate-in' : ''}`}>
              <h1 className="hero__title">
                <span className="hero__title-main">#Nails</span>
                <span className="hero__title-sub">Karolina Nowaczyńska</span>
              </h1>
              <p className="hero__description">
                Profesjonalny salon manicure i pedicure w Katowicach. 
                Tworzymy piękne paznokcie z pasją i precyzją.
              </p>
              <div className="hero__buttons">
                <a href="https://booksy.com/pl-pl/71317_nails-karolina-nowaczynska_paznokcie_11597_katowice" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="btn btn--primary">
                  Umów wizytę
                </a>
                <button className="btn btn--secondary" onClick={() => scrollToSection('services')}>
                  Nasze usługi
                </button>
              </div>
            </div>
            <div className={`hero__visual ${isVisible.hero ? 'animate-in' : ''}`}>
              <div className="hero__decoration">
                <div>{/* TODO: Prompt: Professional nail salon workspace with modern equipment, nail polish bottles, and tools arranged aesthetically, soft pink lighting, minimalist style, Proporcje: 16:9 */}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__background">
          <div className="floating-element floating-element--1"></div>
          <div className="floating-element floating-element--2"></div>
          <div className="floating-element floating-element--3"></div>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="about__container">
          <div className={`about__content ${isVisible.about ? 'animate-in' : ''}`}>
            <div className="about__text">
              <h2 className="section-title">O nas</h2>
              <p className="about__description">
                Witamy w salonie #Nails Karolina Nowaczyńska – miejscu, gdzie Twoje paznokcie 
                staną się prawdziwym dziełem sztuki. Z wieloletnim doświadczeniem i pasją do 
                perfekcji, oferujemy najwyższej jakości usługi manicure i pedicure.
              </p>
              <div className="about__features">
                <div className="feature">
                  <div className="feature__icon">✨</div>
                  <h3 className="feature__title">Profesjonalizm</h3>
                  <p className="feature__text">Doświadczenie i precyzja w każdym detalu</p>
                </div>
                <div className="feature">
                  <div className="feature__icon">💎</div>
                  <h3 className="feature__title">Jakość</h3>
                  <p className="feature__text">Używamy tylko najlepszych produktów</p>
                </div>
                <div className="feature">
                  <div className="feature__icon">🎨</div>
                  <h3 className="feature__title">Kreatywność</h3>
                  <p className="feature__text">Indywidualne podejście do każdego klienta</p>
                </div>
              </div>
            </div>
            <div className="about__visual">
              <div>{/* TODO: Prompt: Elegant nail art showcase with various decorative nail designs, modern nail salon interior background, soft pastel colors, professional photography, Proporcje: 1:1 */}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section services">
        <div className="services__container">
          <div className={`services__header ${isVisible.services ? 'animate-in' : ''}`}>
            <h2 className="section-title">Nasze Usługi</h2>
            <p className="services__subtitle">
              Oferujemy pełen zakres usług manicure i pedicure
            </p>
          </div>
          
          <div className="services__grid">
            {services.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className={`service-category ${isVisible.services ? 'animate-in' : ''}`}
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="service-category__title">{category.category}</h3>
                <div className="service-category__items">
                  {category.items.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="service-item">
                      <div className="service-item__header">
                        <h4 className="service-item__name">{service.name}</h4>
                        <span className="service-item__price">{service.price}</span>
                      </div>
                      <div className="service-item__time">{service.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="contact__container">
          <div className={`contact__content ${isVisible.contact ? 'animate-in' : ''}`}>
            <div className="contact__info">
              <h2 className="section-title">Kontakt</h2>
              <div className="contact__details">
                <div className="contact__item">
                  <div className="contact__icon">📍</div>
                  <div>
                    <h3>Adres</h3>
                    <p>Rolna 18<br />40-555 Katowice</p>
                  </div>
                </div>
                <div className="contact__item">
                  <div className="contact__icon">📞</div>
                  <div>
                    <h3>Telefon</h3>
                    <p>660 665 702</p>
                  </div>
                </div>
                <div className="contact__item">
                  <div className="contact__icon">📱</div>
                  <div>
                    <h3>Social Media</h3>
                    <a href="https://www.instagram.com/nails_karolina_nowaczynska/" 
                       target="_blank" 
                       rel="noopener noreferrer">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="opening-hours">
                <h3>Godziny otwarcia</h3>
                <div className="hours-list">
                  {openingHours.map((item, index) => (
                    <div key={index} className="hours-item">
                      <span className="hours-day">{item.day}</span>
                      <span className={`hours-time ${item.hours === 'Zamknięte' ? 'hours-time--closed' : ''}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact__cta">
                <a href="https://booksy.com/pl-pl/71317_nails-karolina-nowaczynska_paznokcie_11597_katowice" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="btn btn--primary btn--large">
                  Zarezerwuj wizytę przez Booksy
                </a>
              </div>
            </div>
            
            <div className="contact__map">
              <div>{/* TODO: Prompt: Modern nail salon storefront exterior view, elegant entrance with glass windows, pink and black color scheme, urban setting in Katowice Poland, Proporcje: 16:9 */}</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__container">
          <div className="footer__content">
            <div className="footer__logo">
              <img src="/logo.png" alt="#Nails Karolina Nowaczyńska" className="footer__logo-img" />
            </div>
            <p className="footer__text">
              © 2024 #Nails Karolina Nowaczyńska. Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;