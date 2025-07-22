import React from "react";
import loc from "../assets/localization";
import Footer from "../components/footer";
import Header from "../components/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import db, { work } from "../assets/database";
import WorkCard from "../components/work-card";


function Homepage(props) {
  return (
    <>
      <div className="page-home">
  <div className="home-main-box">
    <div className="home-text-main">
      <h1>Desenvolvimento Frontend que transforma ideias em experiências digitais</h1>
      <p>Criamos interfaces rápidas, acessíveis e visualmente impressionantes para sua marca.</p>
    </div>
    <div className="home-img-main">
      <img src="/src/assets/images/catplaceholder1.png" alt="Ilustração de desenvolvimento web" />
    </div>
    <div className="home-btn-main">
      <button class="button-56" role="button">Nossos Serviços</button>
    </div>
  </div>

  <div className="home-mid-box">
    <div className="home-text-mid">
      <h2>Soluções sob medida para seu negócio</h2>
      <p>Na Fronto, combinamos design intuitivo com código de alta performance para entregar produtos que encantam usuários e impulsionam resultados. Nosso time especializado garante a melhor experiência desde o primeiro pixel até a implementação final.</p>
      <a href="/contact" className="cta-link">Inicie seu projeto →</a>
    </div>
    <div className="home-img-mid">
      <img src="/src/assets/images/catworking.jpeg" alt="Time Fronto trabalhando" />
    </div>
  </div>

  <div className="home-end-box">
    <div className="home-text-end">
      <h2>Por que escolher a Fronto?</h2>
      <p>Somos mais que desenvolvedores - somos parceiros no seu sucesso digital. Com metodologias ágeis e foco em qualidade, garantimos entregas que superam expectativas.</p>
      <div className="home-img-end">
        <img src="/src/assets/images/catworking.jpeg" alt="Processo de desenvolvimento" />
      </div>
    </div>
    <div className="home-list-end">
      <ul>
        <li><strong>Código semântico</strong> e otimizado para SEO</li>
        <li><strong>Performance</strong> (90+ no Lighthouse)</li>
        <li><strong>Design responsivo</strong> para todos os dispositivos</li>
        <li><strong>Documentação clara</strong> para fácil manutenção</li>
        <li><strong>Suporte contínuo</strong> pós-entrega</li>
        <li><strong>Transparência</strong> em todos os processos</li>
      </ul>
    </div>
  </div>

  <div className="home-bottom-box">
    <h1>Pronto para elevar sua presença digital?</h1>
    <p>Seja um site institucional, aplicação web ou e-commerce, vamos cocriar a solução perfeita para suas necessidades. Conte com nosso expertise em React, Vue e tecnologias modernas.</p>
    <a href="/contact" className="cta-button">Fale com nossos especialistas</a>
  </div>
</div>



      <Footer />
    </>
  );
}



export default Homepage;
