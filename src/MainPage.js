import './MainPage.css';

const MainPage = () => {
  const services = [
    {
      icon: 'fa-shield-alt',
      title: 'PPF - Paint Protection Film',
      description: 'Filme protetor de pintura que preserva a lataria do seu veículo contra arranhões, pedras e outros danos.',
      features: ['Proteção total', 'Mantém o valor do veículo', 'Garantia de 5 anos', 'Invisível'],
      price: 'Consulte valores'
    },
    {
      icon: 'fa-sparkles',
      title: 'Polimento e Vitrificação',
      description: 'Tratamento completo que remove microarranhões e protege a pintura com durabilidade de até 12 meses.',
      features: ['Remove arranhões', 'Brilho espelhado', 'Proteção UV', 'Repelência à água'],
      price: 'Consulte valores'
    },
    {
      icon: 'fa-soap',
      title: 'Limpeza Detalhada',
      description: 'Limpeza completa interna e externa, com higienização do ar-condicionado e tratamento de estofados.',
      features: ['Limpeza completa', 'Higienização total', 'Recondicionamento', 'Perfumação ambiental'],
      price: 'Consulte valores'
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

  const handleContactClick = () => {
    // Em produção, redirecionar para WhatsApp ou formulário de contato
    alert('Entre em contato para agendar seu atendimento!');
  };

  return (
    <div className="main-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="logo-container">
            <img src="/logo.png" alt="Logo" className="company-logo" />
          </div>
          <h1 className="hero-title">Daud Car Detail</h1>
          <h2 className="hero-subtitle">Detalhamento Automotivo Premium</h2>
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
              <i className="fas fa-whatsapp"></i>
              Fale Conosco
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-icons">
            <i className="fas fa-car"></i>
            <i className="fas fa-shield-alt"></i>
            <i className="fas fa-sparkles"></i>
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
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="service-price">
                  <span className="price-amount">{service.price}</span>
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

            <div className="contact-form">
              <div className="form-card">
                <h3>Agende seu Orçamento</h3>
                <p>Deixe seu contato e retornaremos o mais rápido possível</p>
                <button onClick={handleContactClick} className="whatsapp-button">
                  <i className="fab fa-whatsapp"></i>
                  Agendar pelo WhatsApp
                </button>
                <button onClick={handleContactClick} className="call-button">
                  <i className="fas fa-phone"></i>
                  Solicitar Contato
                </button>
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