import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      category: "Popularne usługi",
      items: [
        { name: "Manicure Hybrydowy (1 kolor)", price: "120,00 zł", time: "1g 10min" },
        { name: "Manicure Hybrydowy z opiłowaniem po innym salonie", price: "130,00 zł", time: "1g 15min" },
        { name: "Korekta Żel (1 kolor)", price: "140,00 zł", time: "1g 30min" },
        { name: "Korekta Żel (zdobienie)", price: "od 140,00 zł", time: "1g 40min" }
      ]
    },
    {
      category: "Paznokcie",
      items: [
        { name: "Żel na naturalnej płytce (1 kolor)", price: "140,00 zł", time: "1g 15min" },
        { name: "Żel na naturalnej płytce (zdobienie)", price: "od 150,00 zł", time: "1g 30min" },
        { name: "Przedłużanie paznokci na formie (1 kolor)", price: "175,00 zł", time: "1g 50min" },
        { name: "Ściągnięcie hybrydy/żelu + odżywka", price: "75,00 zł", time: "40min" }
      ]
    },
    {
      category: "Pedicure",
      items: [
        { name: "Pedicure frezarkowy + hybryda (1 kolor)", price: "150,00 zł", time: "1g 5min" },
        { name: "Pedicure hybrydowy (1 kolor)", price: "120,00 zł", time: "50min" },
        { name: "Pedicure hybrydowy (French/zdobienie)", price: "130,00 zł", time: "50min" },
        { name: "Pedicure z opiłowaniem po innym salonie", price: "160,00 zł", time: "1g 5min" }
      ]
    },
    {
      category: "Przedłużanie paznokci",
      items: [
        { name: "Przedłużanie paznokci obgryzionych (1 kolor)", price: "180,00 zł", time: "1g 40min" },
        { name: "Przedłużanie paznokci obgryzionych (zdobienie)", price: "od 190,00 zł", time: "1g 50min" },
        { name: "Przedłużanie na formie (zdobienie)", price: "180,00 zł", time: "1g 50min" }
      ]
    },
    {
      category: "Inne usługi",
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

  if (isLoading) {
    return (
      <div className="loader">
        <div className="loader__content">
          <div className="loader__logo">#Nails</div>
          <div className="loader__bar">
            <div className="loader__progress"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar__container">
          <div className="navbar__logo">
            <img src="/logo.png" alt="#Nails Karolina Nowaczyńska" className="navbar__logo-img" />
            <span className="navbar__logo-text">#Nails</span>
          </div>
          <ul className="navbar__menu">
            <li><button onClick={() => scrollToSection('hero')} className="navbar__link">Start</button></li>
            <li><button onClick={() => scrollToSection('about')} className="navbar__link">O nas</button></li>
            <li><button onClick={() => scrollToSection('services')} className="navbar__link">Usługi</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="navbar__link">Kontakt</button></li>
          </ul>
        </div>
      </nav>

      <section id="hero" className="hero">
        <div className="hero__background" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <div className="hero__shape hero__shape--1"></div>
          <div className="hero__shape hero__shape--2"></div>
          <div className="hero__shape hero__shape--3"></div>
        </div>
        <div className="hero__container">
          <div className="hero__content">
            <h1 className="hero__title">
              <span className="hero__title-line">Profesjonalny</span>
              <span className="hero__title-line hero__title-line--accent">manicure</span>
              <span className="hero__title-line">& pedicure</span>
            </h1>
            <p className="hero__subtitle">
              Odkryj piękno swoich paznokci w salonie Karoliny Nowaczyńskiej. 
              Profesjonalne usługi, najwyższa jakość i indywidualne podejście.
            </p>
            <div className="hero__buttons">
              <a href="https://booksy.com/pl-pl/71317_nails-karolina-nowaczynska_paznokcie_11597_katowice" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="btn btn--primary">
                Umów wizytę
              </a>
              <button onClick={() => scrollToSection('services')} className="btn btn--secondary">
                Zobacz usługi
              </button>
            </div>
          </div>
          <div className="hero__visual">
            <div>{/* TODO: Prompt: Professional nail salon interior with modern equipment, elegant pink and black color scheme, clean and minimalist design, natural lighting, Proporcje: 9:16 */}</div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about__container">
          <div className="about__content">
            <div className="about__text">
              <h2 className="section__title">O salonie</h2>
              <p className="about__description">
                Salon #Nails Karolina Nowaczyńska to miejsce, gdzie pasja do piękna spotyka się z profesjonalizmem. 
                Oferujemy kompleksowe usługi manicure i pedicure, używając najwyższej jakości produktów i nowoczesnych technik.
              </p>
              <div className="about__features">
                <div className="feature">
                  <div className="feature__icon">✨</div>
                  <div className="feature__content">
                    <h3 className="feature__title">Profesjonalne produkty</h3>
                    <p className="feature__description">Używamy tylko sprawdzonych, wysokiej jakości produktów</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature__icon">💅</div>
                  <div className="feature__content">
                    <h3 className="feature__title">Indywidualne podejście</h3>
                    <p className="feature__description">Każda stylizacja dopasowana do Twoich potrzeb</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature__icon">⭐</div>
                  <div className="feature__content">
                    <h3 className="feature__title">Doświadczenie</h3>
                    <p className="feature__description">Lata praktyki i stałe podnoszenie kwalifikacji</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about__visual">
              <div>{/* TODO: Prompt: Professional female nail technician working on client's nails, modern salon setting, pink and black interior, focused and professional atmosphere, Proporcje: 1:1 */}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="services__container">
          <h2 className="section__title">Nasze usługi</h2>
          <div className="services__grid">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex} className="service-category" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                <h3 className="service-category__title">{category.category}</h3>
                <div className="service-category__items">
                  {category.items.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="service-item" style={{ animationDelay: `${(categoryIndex * 0.1) + (serviceIndex * 0.05)}s` }}>
                      <div className="service-item__content">
                        <h4 className="service-item__name">{service.name}</h4>
                        <span className="service-item__time">{service.time}</span>
                      </div>
                      <div className="service-item__price">{service.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="services__cta">
            <a href="https://booksy.com/pl-pl/71317_nails-karolina-nowaczynska_paznokcie_11597_katowice" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="btn btn--primary btn--large">
              Zarezerwuj termin online
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact__container">
          <div className="contact__content">
            <div className="contact__info">
              <h2 className="section__title">Kontakt</h2>
              <div className="contact__details">
                <div className="contact__item">
                  <div className="contact__icon">📍</div>
                  <div className="contact__text">
                    <h3>Adres</h3>
                    <p>Rolna 18, 40-555 Katowice</p>
                  </div>
                </div>
                <div className="contact__item">
                  <div className="contact__icon">📞</div>
                  <div className="contact__text">
                    <h3>Telefon</h3>
                    <a href="tel:660665702">660 665 702</a>
                  </div>
                </div>
                <div className="contact__item">
                  <div className="contact__icon">📷</div>
                  <div className="contact__text">
                    <h3>Instagram</h3>
                    <a href="https://www.instagram.com/nails_karolina_nowaczynska/" target="_blank" rel="noopener noreferrer">
                      @nails_karolina_nowaczynska
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact__hours">
              <h3 className="contact__hours-title">Godziny otwarcia</h3>
              <div className="opening-hours">
                {openingHours.map((day, index) => (
                  <div key={index} className={`opening-hours__day ${day.hours === 'Zamknięte' ? 'opening-hours__day--closed' : ''}`}>
                    <span className="opening-hours__name">{day.day}</span>
                    <span className="opening-hours__time">{day.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__container">
          <div className="footer__content">
            <div className="footer__logo">
              <img src="/logo.png" alt="#Nails Karolina Nowaczyńska" className="footer__logo-img" />
              <span className="footer__logo-text">#Nails Karolina Nowaczyńska</span>
            </div>
            <div className="footer__links">
              <a href="https://booksy.com/pl-pl/71317_nails-karolina-nowaczynska_paznokcie_11597_katowice" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="footer__link">
                Booksy
              </a>
              <a href="https://www.instagram.com/nails_karolina_nowaczynska/" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="footer__link">
                Instagram
              </a>
              <a href="tel:660665702" className="footer__link">660 665 702</a>
            </div>
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