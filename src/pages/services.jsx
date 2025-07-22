import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Slider from "../components/slider";
import db from "../assets/database";



function Services()
{
  return (
    <>
    <section class="hero-services">
    <div class="hero-content">
      <h1>Serviços Frontend</h1>
      <p>Construímos interfaces que não apenas funcionam, mas encantam e convertem.</p>
      <a href="/contact" class="btn-primary">Fale com nosso time →</a>
    </div>
  </section>

  {/* <!-- Serviços em Cards --> */}
  <section id="services" class="services-grid">
    <div class="service-card">
      <i data-feather="code"></i>
      <h3>Landing Pages</h3>
      <p>Design focado em conversão e alta performance.</p>
      <a href="/about">Saiba mais ›</a>
    </div>
    <div class="service-card">
      <i data-feather="zap"></i>
      <h3>Performance & SEO</h3>
      <p>Sites rápidos e bem rankeados no Google.</p>
      <a href="/about">Saiba mais ›</a>
    </div>
    <div class="service-card">
      <i data-feather="cpu"></i>
      <h3>React/Vue</h3>
      <p>Aplicações dinâmicas e escaláveis.</p>
      <a href="/about">Saiba mais ›</a>
    </div>
    <div class="service-card">
      <i data-feather="database"></i>
      <h3>Integração CMS</h3>
      <p>WordPress, Sanity, Shopify e outros.</p>
      <a href="/about">Saiba mais ›</a>
    </div>
  </section>

  {/* <!-- Diferenciais --> */}
  <section class="diferenciais">
    <h2>Por que a Fronto?</h2>
    <ul>
      <li><i data-feather="check"></i> Código <strong>documentado</strong> e fácil de manter</li>
      <li><i data-feather="check"></i> Suporte <strong>24/7</strong> para emergências</li>
      <li><i data-feather="check"></i> Performance garantida (Lighthouse 90+)</li>
    </ul>
  </section>

  {/* <!-- Processo --> */}
  <section class="processo">
    <h2>Nosso Processo</h2>
    <div class="processo-step">
      <div class="step-number">1</div>
      <div class="step-content">
        <h3>Briefing</h3>
        <p>Entrevista + análise de requisitos.</p>
      </div>
    </div>
    <div class="processo-step">
      <div class="step-number">2</div>
      <div class="step-content">
        <h3>Protótipo</h3>
        <p>Wireframes + validação com você.</p>
      </div>
    </div>
    <div class="processo-step">
      <div class="step-number">3</div>
      <div class="step-content">
        <h3>Desenvolvimento</h3>
        <p>Sprint updates a cada 5 dias.</p>
      </div>
    </div>
  </section>

  {/* <!-- CTA Final --> */}
  <section class="cta-final">
    <h2>Pronto para começar?</h2>
    <p>Orçamento gratuito em 24h. Sem compromisso.</p>
    <div class="cta-buttons">
      <a href="#contact" class="btn-primary">Solicitar Proposta</a>
      <a href="#" class="btn-secondary">Falar por WhatsApp →</a>
    </div>
  </section>

  {/* <!-- Footer --> */}
 <Footer />

  {/* <!-- Script para ícones --> */}
  <script>
    feather.replace();
  </script>
</>
  );
}

export default Services;
