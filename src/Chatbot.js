import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Olá! Sou o assistente virtual da Daud Car Detail. Como posso ajudá-lo hoje?",
      sender: "bot",
      options: [
        "Quero saber sobre PPF",
        "Quero saber sobre Polimento",
        "Quero saber sobre Limpeza",
        "Falar com atendente"
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
    const message = service
      ? `Olá! Tenho interesse no serviço de ${service}. Poderia me passar mais informações e valores?`
      : 'Olá! Gostaria de agendar um serviço de detalhamento automotivo.';
    window.open(`https://wa.me/5517991965884?text=${encodeURIComponent(message)}`, '_blank');
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
        text: `🛡️ PPF - Paint Protection Film\n\nO PPF é um filme protetor transparente que aplicamos sobre a pintura do seu veículo para proteger contra:\n\n• Arranhões e riscos\n• Pedras de rodagem\n• Respingos de asfalto\n• Raios UV\n• Intempéries\n\nVantagens:\n✅ Proteção total da lataria\n✅ Mantém o valor do veículo\n✅ Invisível - não altera a aparência\n✅ Durabilidade de até 5 anos\n✅ Pode ser aplicado no carro inteiro ou em partes específicas\n\nIdeal para: Carros novos, esportivos, ou quem quer preservar a pintura original.\n\nQuer um orçamento personalizado para seu veículo?`,
        service: services[0].whatsappKeyword,
        hasButtons: true,
        buttons: ['Falar com atendente']
      };
    }

    if (lowerMessage.includes('polimento') || lowerMessage.includes('vitrificação')) {
      return {
        text: `✨ Polimento e Vitrificação\n\nServiço completo para restaurar e proteger o brilho do seu veículo:\n\nPolimento:\n• Remove microarranhões\n• Elimina marcas de lavagem\n• Restaura o brilho original\n• Corrige imperfeições da pintura\n\nVitrificação:\n• Cama protetora de cerâmica\n• Proteção contra raios UV\n• Repelência à água (efeito lótus)\n• Durabilidade de 12 meses\n\nResultados:\n✅ Brilho espelhado\n✅ Paint macia ao toque\n✅ Proteção contra sujeira\n✅ Facilita a limpeza\n\nPerfeito para: Carros com pintura opaca, riscados, ou quem quer intensificar o brilho.\n\nQuer saber pacotes e valores?`,
        service: services[1].whatsappKeyword,
        hasButtons: true,
        buttons: ['Falar com atendente']
      };
    }

    if (lowerMessage.includes('limpeza') || lowerMessage.includes('higienização')) {
      return {
        text: `🧼 Limpeza Detalhada Completa\n\nHigienização profunda interna e externa do seu veículo:\n\nExterna:\n• Lavagem técnica detalhada\n• Descontaminação de pintura\n• Limpeza de rodas e pneus\n• Tratamento de pneus (brilho)\n\nInterna:\n• Limpeza de bancos (couro ou tecido)\n• Higienização do teto\n• Limpeza de painel e console\n• Higienização do ar-condicionado\n• Limpeza de porta-malas\n\nBenefícios:\n✅ Veículo novo de novo\n✅ Remove odores e bactérias\n✅ Ambiente mais saudável\n✅ Recondiciona plásticos\n\nIndicado para: Higienização mensal, pós-viagem, ou antes de vender o veículo.\n\nQuer agendar sua limpeza?`,
        service: services[2].whatsappKeyword,
        hasButtons: true,
        buttons: ['Falar com atendente']
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
        hasButtons: serviceResponse.hasButtons,
        buttons: serviceResponse.buttons
      };
    }

    // Greetings
    if (lowerMessage.includes('olá') || lowerMessage.includes('oi') || lowerMessage.includes('ola') || lowerMessage.includes('bom dia') || lowerMessage.includes('boa tarde') || lowerMessage.includes('boa noite') || lowerMessage.includes('hey')) {
      return {
        text: `Olá! 😊 Bem-vindo à Daud Car Detail!\n\nSou seu assistente virtual e estou aqui para te ajudar com tudo sobre detalhamento automotivo.\n\nComo posso te ajudar hoje?`,
        hasButtons: true,
        buttons: ['Quero saber sobre PPF', 'Quero saber sobre Polimento', 'Quero saber sobre Limpeza', 'Falar com atendente']
      };
    }

    // Thanks
    if (lowerMessage.includes('obrigado') || lowerMessage.includes('obrigada') || lowerMessage.includes('valeu') || lowerMessage.includes('thanks')) {
      return {
        text: `Por nada! 😊 Foi um prazer ajudar!\n\nSe precisar de mais alguma coisa, estou por aqui! Ou se preferir, pode falar diretamente com nosso atendente.`,
        hasButtons: true,
        buttons: ['Falar com atendente']
      };
    }

    // Goodbye
    if (lowerMessage.includes('tchau') || lowerMessage.includes('até logo') || lowerMessage.includes('adeus') || lowerMessage.includes('bye')) {
      return {
        text: `Até logo! 👋 Espero te ver em breve!\n\nNão esqueça de seguir nosso Instagram @daudmasterfilm para ver nossos trabalhos!`,
        hasButtons: true,
        buttons: ['Falar com atendente']
      };
    }

    // General services inquiry
    if (lowerMessage.includes('serviço') || lowerMessage.includes('o que faz') || lowerMessage.includes('o que vocês fazem') || lowerMessage.includes('quais serviços') || lowerMessage.includes('vocês fazem')) {
      return {
        text: `Oferecemos serviços especializados de detalhamento automotivo:\n\n🛡️ PPF - Proteção completa da pintura\n✨ Polimento e Vitrificação - Restauração do brilho\n🧼 Limpeza Detalhada - Higienização completa\n\nQual serviço você gostaria de conhecer melhor?`,
        hasButtons: true,
        buttons: ['Quero saber sobre PPF', 'Quero saber sobre Polimento', 'Quero saber sobre Limpeza', 'Falar com atendente']
      };
    }

    // Scheduling
    if (lowerMessage.includes('agendar') || lowerMessage.includes('horário') || lowerMessage.includes('marcação') || lowerMessage.includes('marcar') || lowerMessage.includes('quero agendar') || lowerMessage.includes('dia') || lowerMessage.includes('hora')) {
      return {
        text: `Perfeito! Vou te encaminhar para nosso atendente que pode agendar seu horário.\n\n🕐 Nossos Horários:\nSegunda a Sexta: 8h às 18h\nSábado: 8h às 12h`,
        hasButtons: true,
        buttons: ['Falar com atendente']
      };
    }

    // Contact
    if (lowerMessage.includes('contato') || lowerMessage.includes('telefone') || lowerMessage.includes('whatsapp') || lowerMessage.includes('zap') || lowerMessage.includes('como falar') || lowerMessage.includes('falar com vocês')) {
      return {
        text: `Para falar diretamente conosco, basta clicar no botão abaixo! 👇\n\nNosso WhatsApp está disponível para atendimento imediato!`,
        hasButtons: true,
        buttons: ['Falar com atendente']
      };
    }

    // Location
    if (lowerMessage.includes('endereço') || lowerMessage.includes('onde') || lowerMessage.includes('localização') || lowerMessage.includes('local') || lowerMessage.includes('fica') || lowerMessage.includes('onde fica')) {
      return {
        text: `📍 Estamos no Centro de São José do Rio Preto - SP\n\n🕐 Horários de funcionamento:\nSegunda a Sexta: 8h às 18h\nSábado: 8h às 12h\n\nLocal de fácil acesso com estacionamento disponível!\n\nQuer saber mais ou agendar uma visita?`,
        hasButtons: true,
        buttons: ['Falar com atendente']
      };
    }

    // Price/Value
    if (lowerMessage.includes('preço') || lowerMessage.includes('valor') || lowerMessage.includes('custo') || lowerMessage.includes('quanto custa') || lowerMessage.includes('quanto') || lowerMessage.includes('orçamento')) {
      return {
        text: `Nossos valores variam conforme o serviço e o tipo de veículo.\n\nPara te passar um orçamento preciso, preciso saber:\n\n1. Qual serviço você procura?\n2. Qual o modelo do seu veículo?\n\nVocê pode me contar aqui ou pode falar diretamente com nosso atendente no WhatsApp!`,
        hasButtons: true,
        buttons: ['Falar com atendente']
      };
    }

    // Car protection/film
    if (lowerMessage.includes('proteção') || lowerMessage.includes('proteger') || lowerMessage.includes('filme') || lowerMessage.includes('capa') || lowerMessage.includes('envolver')) {
      return {
        text: `Para proteção do seu veículo, temos o PPF (Paint Protection Film)! 🛡️\n\nÉ um filme transparente que protege a pintura contra:\n• Arranhões\n• Pedras\n• Respingos\n• Raios UV\n\nQuer saber mais detalhes sobre o PPF?`,
        hasButtons: true,
        buttons: ['Quero saber sobre PPF', 'Falar com atendente']
      };
    }

    // Car shine/polish
    if (lowerMessage.includes('brilho') || lowerMessage.includes('riscos') || lowerMessage.includes('arranhões') || lowerMessage.includes('pintura opaca') || lowerMessage.includes('restaurar')) {
      return {
        text: `Para devolver o brilho do seu carro, temos Polimento e Vitrificação! ✨\n\nO polimento remove riscos e a vitrificação protege por meses!\n\nPerfeito para carros com:\n• Microarranhões\n• Pintura opaca\n• Marcas de lavagem\n\nQuer conhecer melhor?`,
        hasButtons: true,
        buttons: ['Quero saber sobre Polimento', 'Falar com atendente']
      };
    }

    // Cleaning
    if (lowerMessage.includes('limpar') || lowerMessage.includes('sujeira') || lowerMessage.includes('higienizar') || lowerMessage.includes('lavar') || lowerMessage.includes('por dentro') || lowerMessage.includes('por fora')) {
      return {
        text: `Para limpeza completa, temos a Limpeza Detalhada! 🧼\n\nÉ uma higienização profunda:\n• Interna completa\n• Externa detalhada\n• Ar-condicionado\n• Estofados\n\nDeixa o carro novo de novo!\n\nQuer saber mais?`,
        hasButtons: true,
        buttons: ['Quero saber sobre Limpeza', 'Falar com atendente']
      };
    }

    // Yes/Positive
    if (lowerMessage.includes('sim') || lowerMessage.includes('quero') || lowerMessage.includes('com certeza') || lowerMessage.includes('ok') || lowerMessage.includes('pode')) {
      return {
        text: `Ótimo! Vou te encaminhar para nosso atendente que pode te ajudar melhor! 😊`,
        hasButtons: true,
        buttons: ['Falar com atendente']
      };
    }

    // No/Negative
    if (lowerMessage.includes('não') || lowerMessage.includes('nope') || lowerMessage.includes('negativo')) {
      return {
        text: `Sem problemas! Se mudar de ideia ou precisar de algo mais, estou aqui! 😊\n\nPosso te ajudar com mais alguma coisa?`,
        hasButtons: true,
        buttons: ['Quero saber sobre PPF', 'Quero saber sobre Polimento', 'Quero saber sobre Limpeza', 'Falar com atendente']
      };
    }

    // Don't understand
    return {
      text: `Desculpe, não entendi bem. 😅\n\nPosso te ajudar com informações sobre:\n• PPF - Proteção da pintura\n• Polimento e Vitrificação - Brilho e proteção\n• Limpeza Detalhada - Higienização completa\n\nOu se preferir, posso te passar para nosso atendente!`,
      hasButtons: true,
      buttons: ['Quero saber sobre PPF', 'Quero saber sobre Polimento', 'Quero saber sobre Limpeza', 'Falar com atendente']
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
          (botResponse.buttons || ['Falar com atendente']) :
          [],
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
            (botResponse.buttons || ['Falar com atendente']) :
            [],
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
                      {message.options.includes('Quero saber sobre PPF') && (
                        <button
                          className="option-button"
                          onClick={() => handleOptionClick('Quero saber sobre PPF')}
                        >
                          Quero saber sobre PPF
                        </button>
                      )}
                      {message.options.includes('Quero saber sobre Polimento') && (
                        <button
                          className="option-button"
                          onClick={() => handleOptionClick('Quero saber sobre Polimento')}
                        >
                          Quero saber sobre Polimento
                        </button>
                      )}
                      {message.options.includes('Quero saber sobre Limpeza') && (
                        <button
                          className="option-button"
                          onClick={() => handleOptionClick('Quero saber sobre Limpeza')}
                        >
                          Quero saber sobre Limpeza
                        </button>
                      )}
                      {message.options.includes('Falar com atendente') && (
                        <button
                          className="action-button contact-button"
                          onClick={() => handleContactClickFromChat(message.service)}
                        >
                          Falar com atendente
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