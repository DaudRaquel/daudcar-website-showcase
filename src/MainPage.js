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

  const galleryImages = [
    {
      url: 'https://scontent-mad2-1.cdninstagram.com/v/t51.82787-15/657759773_17874874338559323_240436636193447920_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=Mzg1OTQyNTkxMDUzNzkxMDc2Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkxOS5zZHIuQzMifQ%3D%3D&_nc_ohc=FEm9Opp9mDsQ7kNvwF-lnWg&_nc_oc=AdqOJGVLan_J90CWATPQcn10jYtDs-fhjq27SKIp35t4Dnzn54qtEunJn4PME2BUzSA&_nc_zt=23&_nc_ht=scontent-mad2-1.cdninstagram.com&_nc_gid=UMIU30IuxWBXQSNtYIG6EA&_nc_ss=7a289',
      title: 'BMW M2 & Audi TTS',
      description: 'Dupla alemã com PPF completo',
      likes: 0,
      link: 'https://www.instagram.com/p/DWPcPoumPZ1/'
    },
    {
      url: 'https://instagram.fkul8-2.fna.fbcdn.net/v/t51.71878-15/561625675_1123354256512229_6389561774811257027_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=108&ig_cache_key=MzczNzcyNDQ4MTc1MDE3NzIyNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjY0MHgxMTM2LnNkci5DMyJ9&_nc_ohc=JTFfqMiISqUQ7kNvwEp-Bpp&_nc_oc=AdpH_vUgEIn1u--EC0M4LJceBUsSWc8jguVpy_4BUrqF4dVCnx_bK0AiLLUmGMo0RUY&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fkul8-2.fna&_nc_gid=Txa_RvXagxvoWA0fdTrfJw&_nc_ss=7a32e',
      title: 'Porsche 911 Duo',
      description: 'Porsche 911 FULL PPF',
      likes: 0,
      link: 'https://www.instagram.com/p/DPfEJzjABXK/'
    },
    {
      url: 'https://instagram.fkul8-2.fna.fbcdn.net/v/t51.75761-15/480043502_17885345178229850_6958677598725871632_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzU3MDcyNTc4OTUzNzcwODcxMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTc5Ny5zZHIuQzMifQ%3D%3D&_nc_ohc=aJvyV9d68QUQ7kNvwEBiPYj&_nc_oc=Adp2yg4AT7yBv8HEvscsa3HOLrsrjO8Df1oYVOMGPOxNTMBvfuoPxWfl5pDTKXKGM6s&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&se=8&_nc_ht=instagram.fkul8-2.fna&_nc_gid=Txa_RvXagxvoWA0fdTrfJw&_nc_ss=7a32e',
      title: 'Corolla Detailing',
      description: 'Lavagem detalhada para brilho insano',
      likes: 0,
      link: 'https://www.instagram.com/p/DGNxC_juKqm/'
    },
    {
      url: 'https://instagram.flim1-2.fna.fbcdn.net/v/t51.75761-15/481574453_17886174870229850_3448367924345289828_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MzU3NTM4MDQ3MjUxNjU4Njg2MQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzl4MTQ3MC5zZHIuQzMifQ%3D%3D&_nc_ohc=UlhXTLSzh8gQ7kNvwGTUnhQ&_nc_oc=AdprqeLEYBVo6Fmab1TdCTa8pXNGDnu-RWQ3rIli_TKWsdlRft1t0E38V49OH35ASgA&_nc_zt=23&_nc_ht=instagram.flim1-2.fna&_nc_gid=wNewzTXaZkW0LxEIrB4uhQ&_nc_ss=7a289',
      title: 'Corolla Renovado',
      description: 'Descontaminação e cristalização',
      likes: 0,
      link: 'https://www.instagram.com/p/DGeTZouOnlB/'
    },
    {
      url: 'https://scontent.cdninstagram.com/v/t51.71878-15/640413924_3178580658981179_5092029188121122760_n.jpg?stp=cmp1_dst-jpg_e35_s640x640_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=e8RO7RndJw0Q7kNvwHuY5qP&_nc_oc=AdrKw_mtAe0nR1K4yQtCukI2ok6jWNXFr0nPJEu3Lr00-dwVdQHF42i_w8nG8aXulaM&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=eR8jGPYvUs3PhZ0U3UsE7g&_nc_ss=7a289&oh=00_Af3VOJkpPV2NeATAoLH1ytZ4rRm_ZLVNm2GSJb8oQeCU-w&oe=69EAF55E',
      title: 'BMW M5 Black Satin PPF',
      description: 'Transformação completa com PPF colorido',
      likes: 0,
      link: 'https://www.instagram.com/p/DVGxYXkgCMj/'
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
          <div className="logo-full-width">
            <img src="/logo.png" alt="Logo" className="company-logo" />
          </div>
          <div className="hero-text-content">
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
              <i className="fas fa-phone"></i>
              Fale Conosco
            </button>
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

      {/* Gallery Section */}
      <section className="gallery">
        <div className="container">
          <h2 className="section-title">Nossa Galeria</h2>
          <p className="section-subtitle">
            Confira alguns dos nossos trabalhos mais recentes
          </p>
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div className="gallery-card" key={index}>
                <div className="gallery-image-wrapper">
                  <img src={image.url} alt={image.title} className="gallery-image" />
                  <div className="gallery-overlay">
                    <div className="gallery-content">
                      <h3 className="gallery-title">{image.title}</h3>
                      <p className="gallery-description">{image.description}</p>
                      <a
                        href={image.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gallery-link"
                      >
                        <i className="fab fa-instagram"></i>
                        Ver no Instagram
                      </a>
                    </div>
                  </div>
                </div>
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