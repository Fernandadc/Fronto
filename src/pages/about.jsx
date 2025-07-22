import React, { useRef } from "react";
import Footer from "../components/footer";



function About (){
  
  return (
    <>
     {/* <!-- Hero Section --> */}
  <section class="about-hero">
    <div class="hero-content">
      <h1>Desenvolvedoras Frontend com um Propósito</h1>
      <p class="hero-subtitle">Acreditamos que código bem escrito é a base para experiências digitais memoráveis.</p>
      <a href="portfolio.html" class="btn-primary">Conheça nosso portfólio →</a>
    </div>
    <div class="hero-image">
      <img src="assets/images/about-hero.svg" alt="Ilustração de desenvolvedoras trabalhando" />
    </div>
  </section>

  {/* <!-- Quem Somos --> */}
  <section class="about-section">
    <div class="about-content">
      <h2>Quem Somos</h2>
      <div class="team-grid">
        <div class="team-member">
          <img src="src/assets/images/team-fer.jpeg" alt="Fernanda Dornelles" class="team-photo" />
          <h3>Fernanda Dornelles</h3>
          <p>Desenvolvedora Frontend</p>
          <div class="social-links">
            <a href="#"><i data-feather="github"></i></a>
            <a href="#"><i data-feather="linkedin"></i></a>
          </div>
        </div>
        <div class="team-member">
          <img src="src/assets/images/team-gabs.png" alt="Gabriel Silva" class="team-photo" />
          <h3>Gabriel Silva</h3>
          <p>CEO e Desenvolvedor</p>
          <div class="social-links">
            <a href="#"><i data-feather="github"></i></a>
            <a href="#"><i data-feather="linkedin"></i></a>
          </div>
        </div>
      </div>
      <p class="team-description">Somos Gabriel e Fernanda, o time Fronto. Combinamos design + código para resolver problemas reais com soluções escaláveis.</p>
    </div>
  </section>

  {/* <!-- O Que Fazemos --> */}
  <section class="services-section">
    <div class="section-header">
      <h2>O Que Entregamos</h2>
      <p>Nossos serviços vão além do código - criamos experiências que encantam usuários e negócios.</p>
    </div>
    <div class="services-grid">
      <div class="service-card">
        <i data-feather="code"></i>
        <h3>Interfaces que convertem</h3>
        <p>Do Figma ao código sem perder a essência do design.</p>
      </div>
      <div class="service-card">
        <i data-feather="zap"></i>
        <h3>Performance de alto nível</h3>
        <p>Sites que carregam em menos de 2s.</p>
      </div>
      <div class="service-card">
        <i data-feather="search"></i>
        <h3>SEO integrado</h3>
        <p>Seu produto encontrado no Google.</p>
      </div>
    </div>
  </section>

  {/* <!-- Nosso Diferencial --> */}
  <section class="diferenciais-section">
    <div class="section-header">
      <h2>Nosso Compromisso</h2>
      <p>O que nos diferencia no mercado de desenvolvimento frontend.</p>
    </div>
    <div class="diferenciais-grid">
      <div class="diferencial-card">
        <i data-feather="message-square"></i>
        <h3>Comunicação Transparente</h3>
        <p>Atualizações semanais e zero burocracia.</p>
      </div>
      <div class="diferencial-card">
        <i data-feather="git-merge"></i>
        <h3>Código Futuro-Proof</h3>
        <p>Arquitetura modular para escalar sem dor.</p>
      </div>
      <div class="diferencial-card">
        <i data-feather="clock"></i>
        <h3>Compromisso com Prazo</h3>
        <p>90% dos projetos entregues no prazo ou antes.</p>
      </div>
      <div class="diferencial-card">
        <i data-feather="life-buoy"></i>
        <h3>Suporte Pós-Entrega</h3>
        <p>30 dias de suporte gratuito após entrega.</p>
      </div>
    </div>
  </section>

  {/* <!-- Como Trabalhamos --> */}
  <section class="process-section">
    <div class="section-header">
      <h2>Nosso Processo</h2>
      <p>Um fluxo de trabalho claro e eficiente para garantir os melhores resultados.</p>
    </div>
    <div class="process-steps">
      <div class="process-step">
        <div class="step-number">1</div>
        <div class="step-content">
          <h3>Briefing</h3>
          <p>Entendemos seus objetivos e métricas de sucesso.</p>
        </div>
      </div>
      <div class="process-step">
        <div class="step-number">2</div>
        <div class="step-content">
          <h3>Protótipo</h3>
          <p>Validação visual antes de começar a codar.</p>
        </div>
      </div>
      <div class="process-step">
        <div class="step-number">3</div>
        <div class="step-content">
          <h3>Desenvolvimento</h3>
          <p>Sprint reviews a cada 5 dias para acompanhamento.</p>
        </div>
      </div>
      <div class="process-step">
        <div class="step-number">4</div>
        <div class="step-content">
          <h3>Testes</h3>
          <p>Garantia de qualidade em todos os dispositivos.</p>
        </div>
      </div>
      <div class="process-step">
        <div class="step-number">5</div>
        <div class="step-content">
          <h3>Entrega</h3>
          <p>Documentação completa e treinamento opcional.</p>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- CTA Final --> */}
  <section class="about-cta">
    <div class="cta-content">
      <h2>Pronto para trabalhar juntos?</h2>
      <p>90% dos projetos começam com uma conversa. Vamos tomar um café virtual?</p>
      <div class="cta-buttons">
        <a href="contato.html" class="btn-primary">Agendar Chamada</a>
        <a href="portfolio.html" class="btn-secondary">Ver Portfólio →</a>
      </div>
    </div>
  </section>


      
      <Footer />
      
    </>
  );

};
export default About;
