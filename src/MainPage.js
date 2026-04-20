import './MainPage.css';

const MainPage = () => {
  const services = [
    {
      icon: 'fa-shield-alt',
      title: 'PPF - Paint Protection Film',
      description: 'Filme protetor de pintura que preserva a lataria do seu veículo contra arranhões, pedras e outros danos.'
    },
    {
      icon: 'fa-sparkles',
      title: 'Polimento e Vitrificação',
      description: 'Tratamento completo que remove microarranhões e protege a pintura com durabilidade de até 12 meses.'
    },
    {
      icon: 'fa-soap',
      title: 'Limpeza Detalhada',
      description: 'Limpeza completa interna e externa, com higienização do ar-condicionado e tratamento de estofados.'
    }
  ];

  const benefits = [
    {
      icon: 'fa-award',
      title: 'Qualidade Garantida',
      description: 'Profissionais certificados e produtos de primeira linha'
    },
    {
      icon: 'fa-clock',
      title: 'Agilidade',
      description: 'Serviços rápidos com entrega no mesmo dia quando possível'
    },
    {
      icon: 'fa-handshake',
      title: 'Atendimento Personalizado',
      description: 'Tratamos cada veículo como se fosse nosso'
    },
    {
      icon: 'fa-tools',
      title: 'Equipamentos Modernos',
      description: 'Tecnologia de ponta para os melhores resultados'
    }
  ];

  const galleryImages = [
    {
      image: '/gallery-1.jpg',
      title: 'BMW M2 & Audi TTS',
      description: 'Dupla alemã com PPF completo',
      link: 'https://www.instagram.com/p/DWPcPoumPZ1/'
    },
    {
      image: '/gallery-2.jpg',
      title: 'Porsche 911 Duo',
      description: 'Porsche 911 FULL PPF',
      link: 'https://www.instagram.com/p/DPfEJzjABXK/'
    },
    {
      image: '/gallery-3.jpg',
      title: 'Corolla Detailing',
      description: 'Lavagem detalhada para brilho insano',
      link: 'https://www.instagram.com/p/DGNxC_juKqm/'
    },
    {
      image: '/gallery-4.jpg',
      title: 'Corolla Renovado',
      description: 'Descontaminação e cristalização',
      link: 'https://www.instagram.com/p/DGeTZouOnlB/'
    },
    {
      image: '/gallery-5.jpg',
      title: 'BMW M5 Black Satin PPF',
      description: 'Transformação completa com PPF colorido',
      link: 'https://www.instagram.com/p/DVGxYXkgCMj/'
    }
  ];

  const handleContactClick = () => {
    window.open('https://wa.me/5517991965884?text=Olá! Gostaria de agendar um serviço de detalhamento automotivo.', '_blank');
  };

  return (
    <div className="main-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="logo-full-width">
            <img src="/logo.png" alt="Logo" className="company-logo" />
          </div>
          <div className="hero-text-content">
            <h1 className="hero-title">Detalhamento Automotivo Premium</h1>
            <p className="hero-description">
              Transforme seu veículo com nossos serviços especializados de PPF, polimento,
              vitrificação e limpeza detalhada. Qualidade e profissionalismo garantidos.
            </p>
            <div className="hero-buttons">
            <button className="cta-primary" onClick={handleContactClick}>
              <i className="fas fa-calendar-check"></i>
              Agendar Serviço
            </button>
            <button className="cta-secondary" onClick={handleContactClick}>
              <i className="fas fa-phone"></i>
              Fale Conosco
            </button>
            <a
              href="https://www.instagram.com/daudmasterfilm/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-instagram"
            >
              <i className="fab fa-instagram"></i>
              Instagram
            </a>
          </div>
        </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Soluções completas para proteger e embelezar seu veículo
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-cta">
                  <a
                    href={`https://wa.me/5517991965884?text=Olá! Tenho interesse no serviço de ${service.title}. Poderia me passar mais informações e valores?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="service-whatsapp-button"
                  >
                    Falar com atendente
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <h2 className="section-title">Por que escolher Daud Car Detail?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div className="benefit-card" key={index}>
                <div className="benefit-icon">
                  <i className={`fas ${benefit.icon}`}></i>
                </div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <div className="container">
          <h2 className="section-title">Nossa Galeria</h2>
          <p className="section-subtitle">
            Confira alguns dos nossos trabalhos mais recentes
          </p>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <a
                href={image.link}
                target="_blank"
                rel="noopener noreferrer"
                className="gallery-card"
                key={index}
              >
                <div className="gallery-image-wrapper">
                  <img src={image.image} alt={image.title} className="gallery-image" loading="lazy" />
                </div>
                <div className="gallery-info">
                  <h3 className="gallery-title">{image.title}</h3>
                  <p className="gallery-description">{image.description}</p>
                  <div className="gallery-link">
                    <i className="fab fa-instagram"></i>
                    Ver trabalho completo
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="section-title">Entre em Contato</h2>
              <p className="section-subtitle">
                Estamos prontos para transformar seu veículo
              </p>

              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Contato</h4>
                    <p>WhatsApp e telefone disponíveis</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Localização</h4>
                    <p className="contact-address">
                      Centro de São José do Rio Preto - SP<br />
                      Acesso fácil e estacionamento disponível
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-details">
                    <h4>Horários de Funcionamento</h4>
                    <div className="schedule">
                      <p><span>Segunda a Sexta:</span> 8h às 18h</p>
                      <p><span>Sábado:</span> 8h às 12h</p>
                      <p><span>Domingo:</span> Fechado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Daud Car Detail</h3>
              <p>Detalhamento Automotivo Premium</p>
            </div>
            <div className="footer-contact">
              <p>
                <i className="fas fa-map-marker-alt"></i> São José do Rio Preto - SP
              </p>
              <p>
                <a href="https://www.instagram.com/daudmasterfilm/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i> @daudmasterfilm
                </a>
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Daud Car Detail. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;