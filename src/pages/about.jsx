import React, { useRef } from "react";
import Footer from "../components/footer";



function About (){
  
  return (
    <>
     {/* <!-- Hero Section --> */}
  <section className="about-hero">
    <div className="hero-content">
      <h1>Desenvolvedoras Frontend com um Propósito</h1>
      <p className="hero-subtitle">Acreditamos que código bem escrito é a base para experiências digitais memoráveis.</p>
      <a href="portfolio.html" className="btn-primary">Conheça nosso portfólio →</a>
    </div>
    <div className="hero-image">
      <img src="assets/images/about-hero.svg" alt="Ilustração de desenvolvedoras trabalhando" />
    </div>
  </section>

  {/* <!-- Quem Somos --> */}
  <section className="about-section">
    <div className="about-content">
      <h2>Quem Somos</h2>
      <div className="team-grid">
        <div className="team-member">
          <img src="src/assets/images/team-fer.jpeg" alt="Fernanda Dornelles" className="team-photo" />
          <h3>Fernanda Dornelles</h3>
          <p>Desenvolvedora Frontend</p>
          <div className="social-links">
            <a href="#"><i data-feather="github"></i></a>
            <a href="#"><i data-feather="linkedin"></i></a>
          </div>
        </div>
        <div className="team-member">
          <img src="src/assets/images/team-gabs.png" alt="Gabriel Silva" className="team-photo" />
          <h3>Gabriel Silva</h3>
          <p>CEO e Desenvolvedor</p>
          <div className="social-links">
            <a href="#"><i data-feather="github"></i></a>
            <a href="#"><i data-feather="linkedin"></i></a>
          </div>
        </div>
      </div>
      <p className="team-description">Somos Gabriel e Fernanda, o time Fronto. Combinamos design + código para resolver problemas reais com soluções escaláveis.</p>
    </div>
  </section>

  {/* <!-- O Que Fazemos --> */}
  <section className="services-section">
    <div className="section-header">
      <h2>O Que Entregamos</h2>
      <p>Nossos serviços vão além do código - criamos experiências que encantam usuários e negócios.</p>
    </div>
    <div className="services-grid">
      <div className="service-card">
        <i data-feather="code"></i>
        <h3>Interfaces que convertem</h3>
        <p>Do Figma ao código sem perder a essência do design.</p>
      </div>
      <div className="service-card">
        <i data-feather="zap"></i>
        <h3>Performance de alto nível</h3>
        <p>Sites que carregam em menos de 2s.</p>
      </div>
      <div className="service-card">
        <i data-feather="search"></i>
        <h3>SEO integrado</h3>
        <p>Seu produto encontrado no Google.</p>
      </div>
    </div>
  </section>

  {/* <!-- Nosso Diferencial --> */}
  <section className="diferenciais-section">
    <div className="section-header">
      <h2>Nosso Compromisso</h2>
      <p>O que nos diferencia no mercado de desenvolvimento frontend.</p>
    </div>
    <div className="diferenciais-grid">
      <div className="diferencial-card">
        <i data-feather="message-square"></i>
        <h3>Comunicação Transparente</h3>
        <p>Atualizações semanais e zero burocracia.</p>
      </div>
      <div className="diferencial-card">
        <i data-feather="git-merge"></i>
        <h3>Código Futuro-Proof</h3>
        <p>Arquitetura modular para escalar sem dor.</p>
      </div>
      <div className="diferencial-card">
        <i data-feather="clock"></i>
        <h3>Compromisso com Prazo</h3>
        <p>90% dos projetos entregues no prazo ou antes.</p>
      </div>
      <div className="diferencial-card">
        <i data-feather="life-buoy"></i>
        <h3>Suporte Pós-Entrega</h3>
        <p>30 dias de suporte gratuito após entrega.</p>
      </div>
    </div>
  </section>

  {/* <!-- Como Trabalhamos --> */}
  <section className="process-section">
    <div className="section-header">
      <h2>Nosso Processo</h2>
      <p>Um fluxo de trabalho claro e eficiente para garantir os melhores resultados.</p>
    </div>
    <div className="process-steps">
      <div className="process-step">
        <div className="step-number">1</div>
        <div className="step-content">
          <h3>Briefing</h3>
          <p>Entendemos seus objetivos e métricas de sucesso.</p>
        </div>
      </div>
      <div className="process-step">
        <div className="step-number">2</div>
        <div className="step-content">
          <h3>Protótipo</h3>
          <p>Validação visual antes de começar a codar.</p>
        </div>
      </div>
      <div className="process-step">
        <div className="step-number">3</div>
        <div className="step-content">
          <h3>Desenvolvimento</h3>
          <p>Sprint reviews a cada 5 dias para acompanhamento.</p>
        </div>
      </div>
      <div className="process-step">
        <div className="step-number">4</div>
        <div className="step-content">
          <h3>Testes</h3>
          <p>Garantia de qualidade em todos os dispositivos.</p>
        </div>
      </div>
      <div className="process-step">
        <div className="step-number">5</div>
        <div className="step-content">
          <h3>Entrega</h3>
          <p>Documentação completa e treinamento opcional.</p>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- CTA Final --> */}
  <section className="about-cta">
    <div className="cta-content">
      <h2>Pronto para trabalhar juntos?</h2>
      <p>90% dos projetos começam com uma conversa. Vamos tomar um café virtual?</p>
      <div className="cta-buttons">
        <a href="contato.html" className="btn-primary">Agendar Chamada</a>
        <a href="portfolio.html" className="btn-secondary">Ver Portfólio →</a>
      </div>
    </div>
  </section>


      
      <Footer />
      
    </>
  );

};
export default About;
