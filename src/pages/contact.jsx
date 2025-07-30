import React, { useRef } from "react";
import Footer from "../components/footer";
import emailjs from "@emailjs/browser";



export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_y110tpr", "template_xmrgjwu", form.current, {
        publicKey: emailJsKey,
      })
      .then(
        () => {
          console.log("Sent!");
          e.target.reset();
        },
        (error) => {
          console.log("Error, please try again.", error.text);
        }
      );
  };

  return (
    <>
     <section className="hero-contact">
    <div className="hero-content">
      <h1>Vamos construir algo incrível juntos?</h1>
      <p>Entre em contato para discutir seu projeto ou solicitar um orçamento sem compromisso.</p>
    </div>
  </section>

  {/* forms and contact */}
  <section className="contact-section">
    <div className="contact-form">
      <h2>Envie uma mensagem</h2>
      <form>
        <div className="form-group">
          <label for="name">Nome</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label for="email">E-mail</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label for="project-type">Tipo de Projeto</label>
          <select id="project-type">
            <option value="landing-page">Landing Page</option>
            <option value="react-app">Aplicação React/Vue</option>
            <option value="seo">Otimização SEO</option>
            <option value="other">Outro</option>
          </select>
        </div>
        <div className="form-group">
          <label for="message">Mensagem</label>
          <textarea id="message" rows="5" required></textarea>
        </div>
        <div className="form-checkbox">
          <input type="checkbox" id="newsletter" />
          <label for="newsletter">Aceito receber novidades e dicas frontend.</label>
        </div>
        <button type="submit" className="btn-primary">Enviar Mensagem →</button>
      </form>
    </div>

    <div className="contact-info">
      <h2>Outras formas de contato</h2>
      <div className="contact-method">
        <i data-feather="phone"></i>
        <a href="https://wa.me/5511999999999" target="_blank">(11) 99999-9999</a>
      </div>
      <div className="contact-method">
        <i data-feather="mail"></i>
        <a href="mailto:contato@fronto.dev">contato@fronto.dev</a>
      </div>
      <div className="contact-method">
        <i data-feather="linkedin"></i>
        <a href="https://linkedin.com/company/fronto" target="_blank">LinkedIn</a>
      </div>
      <div className="contact-method">
        <i data-feather="github"></i>
        <a href="https://github.com/fronto-dev" target="_blank">GitHub</a>
      </div>
    </div>
  </section>

  {/* faq */}
  <section className="faq-section">
    <h2>Perguntas Frequentes</h2>
    <div className="faq-item">
      <h3>❔ Quanto custa um projeto?</h3>
      <p>A partir de R$3.000, variável conforme escopo e complexidade.</p>
    </div>
    <div className="faq-item">
      <h3>❔ Tem suporte pós-entrega?</h3>
      <p>Sim, oferecemos 30 dias de suporte gratuito após a entrega.</p>
    </div>
  </section>
      <Footer />
      
    </>
  );
};
export default Contact;
