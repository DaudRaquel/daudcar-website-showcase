import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Olá! Sou o assistente virtual da Daud Car Detail. Como posso ajudá-lo hoje?",
      sender: "bot",
      options: [
        "Quero saber sobre os serviços",
        "Agendar um horário",
        "Informações de contato",
        "Ver endereço e horários"
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleContactClick = (service = null) => {
    // Em produção, redirecionar para WhatsApp ou formulário de contato
    alert('Entre em contato para agendar seu atendimento!');
  };

  const handleMapsClick = () => {
    // Em produção, redirecionar para Google Maps
    alert('Nossa localização será exibida no mapa!');
  };

  const getServiceResponse = (message) => {
    const services = [
      {
        name: "PPF - Paint Protection Film",
        description: "Filme protetor de pintura que preserva a lataria do seu veículo contra arranhões, pedras e outros danos.",
        price: "Consulte valores",
        whatsappKeyword: "PPF"
      },
      {
        name: "Polimento e Vitrificação",
        description: "Tratamento completo que remove microarranhões e protege a pintura com durabilidade de até 12 meses.",
        price: "Consulte valores",
        whatsappKeyword: "Polimento e Vitrificação"
      },
      {
        name: "Limpeza Detalhada e Higienização",
        description: "Limpeza completa interna e externa, com higienização do ar-condicionado e tratamento de estofados.",
        price: "Consulte valores",
        whatsappKeyword: "Limpeza Detalhada"
      }
    ];

    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes('ppf') || lowerMessage.includes('filme protetor')) {
      return {
        text: `Nosso serviço de PPF (Paint Protection Film) oferece proteção completa para a pintura do seu veículo.\n\n✅ Proteção contra arranhões e pedras\n✅ Mantém o valor do veículo\n✅ Garantia de 5 anos\n\n${services[0].price}\n\nDeseja agendar uma avaliação gratuita?`,
        service: services[0].whatsappKeyword,
        hasButtons: true
      };
    }

    if (lowerMessage.includes('polimento') || lowerMessage.includes('vitrificação')) {
      return {
        text: `O polimento e vitrificação devolvem o brilho original do seu veículo.\n\n✅ Remove microarranhões\n✅ Proteção UV\n✅ Repelência à água\n✅ Durabilidade de 12 meses\n\n${services[1].price}\n\nDeseja conhecer os pacotes disponíveis?`,
        service: services[1].whatsappKeyword,
        hasButtons: true
      };
    }

    if (lowerMessage.includes('limpeza') || lowerMessage.includes('higienização')) {
      return {
        text: `Nossa limpeza detalhada é completa e revitaliza seu veículo por dentro e fora.\n\n✅ Limpeza interna completa\n✅ Higienização do ar-condicionado\n✅ Limpeza de estofados\n✅ Recondicionamento de plásticos\n\n${services[2].price}\n\nQuer agendar sua limpeza?`,
        service: services[2].whatsappKeyword,
        hasButtons: true
      };
    }

    return null;
  };

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    // Check for service responses
    const serviceResponse = getServiceResponse(userMessage);
    if (serviceResponse) {
      return {
        text: serviceResponse.text,
        service: serviceResponse.service,
        hasButtons: serviceResponse.hasButtons
      };
    }

    // General responses
    if (lowerMessage.includes('serviço') || lowerMessage.includes('o que faz')) {
      return {
        text: `Oferecemos os seguintes serviços:\n\n🚗 **PPF - Paint Protection Film**\nProteção completa para pintura\n\n🌟 **Polimento e Vitrificação**\nRestauração e proteção do brilho\n\n🧼 **Limpeza Detalhada**\nHigienização completa interna e externa\n\nQual serviço tem interesse em conhecer melhor?`,
        hasButtons: false
      };
    }

    if (lowerMessage.includes('agendar') || lowerMessage.includes('horário') || lowerMessage.includes('marcação')) {
      return {
        text: `Perfeito! Para agendar seu atendimento rapidamente:\n\n📱 **WhatsApp:** Clique no botão abaixo e já iniciaremos o atendimento!\n\n🕐 **Nossos Horários:**\nSegunda a Sexta: 8h às 18h\nSábado: 8h às 12h\n\n📍 **Localização:** Centro de São José do Rio Preto - SP`,
        hasButtons: true,
        buttons: ['Agendar no WhatsApp', 'Ver no Maps']
      };
    }

    if (lowerMessage.includes('contato') || lowerMessage.includes('telefone') || lowerMessage.includes('whatsapp')) {
      return {
        text: `Fale conosco diretamente pelo WhatsApp:\n\n📞 **WhatsApp disponível**\n\nAtendimento imediato para agendamentos e orçamentos!\n\nClique no botão para iniciar conversa.`,
        hasButtons: true,
        buttons: ['Falar no WhatsApp']
      };
    }

    if (lowerMessage.includes('endereço') || lowerMessage.includes('onde') || lowerMessage.includes('localização')) {
      return {
        text: `📍 **Nossa Localização:**\nCentro de São José do Rio Preto - SP\n\n🕐 **Horários:**\nSegunda a Sexta: 8h às 18h\nSábado: 8h às 12h\n\nEstamos no centro da cidade, com fácil acesso e estacionamento disponível!\n\nClique nos botões para nos localizar ou agendar!`,
        hasButtons: true,
        buttons: ['Agendar no WhatsApp', 'Ver no Maps']
      };
    }

    if (lowerMessage.includes('preço') || lowerMessage.includes('valor') || lowerMessage.includes('custo')) {
      return {
        text: `Nossos preços variam conforme o serviço e tamanho do veículo:\n\n🚗 **PPF:** Consulte valores\n🌟 **Polimento:** Consulte valores\n🧼 **Limpeza:** Consulte valores\n\nPara orçamento personalizado e rápido, fale conosco pelo WhatsApp!\n\nQual serviço te interessa?`,
        hasButtons: false
      };
    }

    return {
      text: `Posso te ajudar com informações sobre:\n\n✅ Nossos serviços (PPF, polimento, vitrificação, limpeza)\n✅ Agendamentos e horários\n✅ Contato e endereço\n✅ Valores e pacotes\n\nQual dessas opções você prefere?`,
      hasButtons: false
    };
  };

  const handleOptionClick = (option) => {
    const userMessage = { text: option, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(option);
      const botMessage = {
        text: botResponse.text,
        sender: 'bot',
        options: botResponse.hasButtons ?
          (botResponse.buttons || ['Agendar no WhatsApp', 'Ver mais serviços', 'Falar com atendente']) :
          (botResponse.text.includes('qual') || botResponse.text.includes('deseja') ?
            ['Sim, quero agendar', 'Ver mais serviços', 'Falar com atendente'] : []),
        service: botResponse.service
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleContactClickFromChat = (service = null) => {
    handleContactClick(service);
    setIsOpen(false); // Fecha o chat após clicar
  };

  const handleMapsClickFromChat = () => {
    handleMapsClick();
    setIsOpen(false); // Fecha o chat após clicar
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage = { text: inputValue, sender: 'user' };
      setMessages(prev => [...prev, userMessage]);
      setInputValue('');
      setIsTyping(true);

      setTimeout(() => {
        const botResponse = getBotResponse(inputValue);
        const botMessage = {
          text: botResponse.text,
          sender: 'bot',
          options: botResponse.hasButtons ?
            (botResponse.buttons || ['Agendar no WhatsApp', 'Ver mais serviços', 'Falar com atendente']) :
            (botResponse.text.includes('qual') || botResponse.text.includes('deseja') ?
              ['Sim, quero agendar', 'Ver mais serviços', 'Falar com atendente'] : []),
          service: botResponse.service
        };
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-container">
      {isOpen ? (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-info">
              <div className="chatbot-avatar">
                <i className="fas fa-car"></i>
              </div>
              <div>
                <h3>Daud Car Detail</h3>
                <span className="status-dot"></span>
                <span className="status-text">Online</span>
              </div>
            </div>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                <div className="message-content">
                  {message.text}
                  {message.options && (
                    <div className="message-options">
                      {message.options.includes('Agendar no WhatsApp') && (
                        <button
                          className="action-button whatsapp-button"
                          onClick={() => handleContactClickFromChat(message.service)}
                        >
                          <i className="fab fa-whatsapp"></i>
                          Agendar no WhatsApp
                        </button>
                      )}
                      {message.options.includes('Ver no Maps') && (
                        <button
                          className="action-button maps-button"
                          onClick={handleMapsClickFromChat}
                        >
                          <i className="fas fa-map-marker-alt"></i>
                          Ver no Maps
                        </button>
                      )}
                      {message.options.includes('Falar com atendente') && (
                        <button
                          className="action-button contact-button"
                          onClick={() => handleContactClickFromChat(message.service)}
                        >
                          <i className="fas fa-headset"></i>
                          Falar com atendente
                        </button>
                      )}
                      {message.options.includes('Sim, quero agendar') && (
                        <button
                          className="action-button whatsapp-button"
                          onClick={() => handleContactClickFromChat(message.service)}
                        >
                          <i className="fab fa-whatsapp"></i>
                          Sim, quero agendar
                        </button>
                      )}
                      {message.options.includes('Ver mais serviços') && (
                        <button
                          className="option-button"
                          onClick={() => handleOptionClick('Quero saber sobre os serviços')}
                        >
                          Ver mais serviços
                        </button>
                      )}
                      {message.options.includes('Quero saber sobre os serviços') && (
                        <button
                          className="option-button"
                          onClick={() => handleOptionClick('Quero saber sobre os serviços')}
                        >
                          Quero saber sobre os serviços
                        </button>
                      )}
                      {message.options.includes('Agendar um horário') && (
                        <button
                          className="option-button"
                          onClick={() => handleOptionClick('Agendar um horário')}
                        >
                          Agendar um horário
                        </button>
                      )}
                      {message.options.includes('Informações de contato') && (
                        <button
                          className="option-button"
                          onClick={() => handleOptionClick('Informações de contato')}
                        >
                          Informações de contato
                        </button>
                      )}
                      {message.options.includes('Ver endereço e horários') && (
                        <button
                          className="option-button"
                          onClick={() => handleOptionClick('Ver endereço e horários')}
                        >
                          Ver endereço e horários
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message bot">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua mensagem..."
            />
            <button onClick={handleSendMessage} className="send-button">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      ) : (
        <button className="chatbot-button" onClick={() => setIsOpen(true)}>
          <i className="fas fa-comment-dots"></i>
          <span>Chat</span>
        </button>
      )}
    </div>
  );
};

export default Chatbot;