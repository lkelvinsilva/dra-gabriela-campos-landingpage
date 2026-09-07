import "./Estratificacao.css";
import { useEffect, useRef } from "react";

/* =========================
   ÍCONES (traço fino, consistentes com a paleta)
   ========================= */

function IconEscudo() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M16 4 L27 8 V15 C27 22 22 27 16 29 C10 27 5 22 5 15 V8 Z" strokeLinejoin="round" />
      <path d="M11 16 L14.5 19.5 L21.5 12.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconGota() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M16 4 C21 12 25 17 25 21.5 C25 26.2 20.97 30 16 30 C11.03 30 7 26.2 7 21.5 C7 17 11 12 16 4 Z" strokeLinejoin="round" />
      <path d="M12 22 C12 24.5 13.8 26 16 26" strokeLinecap="round" />
    </svg>
  );
}

function IconRelogio() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="16" cy="17" r="11" />
      <path d="M16 10.5 V17 L21 20" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 4 H20" strokeLinecap="round" />
    </svg>
  );
}

function IconBrilho() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M16 4 L18.2 13.2 L27 16 L18.2 18.8 L16 28 L13.8 18.8 L5 16 L13.8 13.2 Z" strokeLinejoin="round" />
    </svg>
  );
}

/* Ícones das camadas (usados nos novos cards da etapa) */
function IconCamadaBase() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="6" y="20" width="20" height="6" rx="2" />
      <path d="M9 20 C9 14 13 9 16 9 C19 9 23 14 23 20" strokeLinecap="round" />
    </svg>
  );
}

function IconCamadaVolume() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M9 22 C9 13 13 6 16 6 C19 6 23 13 23 22" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 22 H26" strokeLinecap="round" />
    </svg>
  );
}

function IconCamadaBrilho() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M8 23 C8 12 12 4 16 4 C20 4 24 12 24 23" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8 L14 6" strokeLinecap="round" />
      <path d="M20 8 L18 6" strokeLinecap="round" />
    </svg>
  );
}

/* =========================
   CONTEÚDO
   ========================= */

const CAMADAS = [
  {
    numero: "01",
    titulo: "Dentina — a base da cor",
    descricao: "É o tom mais forte, que fica por dentro. Dá a cor de fundo do dente.",
    Icon: IconCamadaBase,
  },
  {
    numero: "02",
    titulo: "Corpo — o volume",
    descricao: "Preenche e ajusta o formato, deixando o dente com o tamanho ideal.",
    Icon: IconCamadaVolume,
  },
  {
    numero: "03",
    titulo: "Esmalte — o brilho",
    descricao: "A camada final, que reflete a luz e dá aquele aspecto de dente de verdade.",
    Icon: IconCamadaBrilho,
  },
];

const COMPARATIVO = [
  {
    criterio: "Vou perder parte do meu dente?",
    estratificacao: "Quase nada é desgastado",
    faceta: "Precisa desgastar o dente",
  },
  {
    criterio: "Em quantas consultas fica pronto?",
    estratificacao: "1 consulta",
    faceta: "2 a 3 consultas",
  },
  {
    criterio: "Dá pra voltar atrás se eu não gostar?",
    estratificacao: "Sim, é reversível",
    faceta: "Não, é definitivo",
  },
  {
    criterio: "Vai parecer meu dente de verdade?",
    estratificacao: "Sim, camada a camada, do jeito natural",
    faceta: "Fica mais uniforme e artificial",
  },
];

const BENEFICIOS = [
  {
    titulo: "Preserva seu dente",
    descricao: "Você sai da consulta com o mesmo dente que entrou, só que mais bonito.",
    Icon: IconEscudo,
  },
  {
    titulo: "Pronto na hora",
    descricao: "Resolvido numa única sessão, sem espera.",
    Icon: IconRelogio,
  },
  {
    titulo: "Parece de verdade",
    descricao: "Ninguém percebe que foi feito — imita exatamente como o dente é por dentro.",
    Icon: IconBrilho,
  },
  {
    titulo: "Sem cortes, sem desgaste",
    descricao: "Um procedimento tranquilo, que dá pra desfazer se precisar.",
    Icon: IconGota,
  },
];

/* =========================
   COMPONENTE
   ========================= */

export default function Estratificacao() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("show");
          observer.unobserve(el);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="estratificacao-section" id="estratificacao" ref={sectionRef}>
      <div className="container">
        <header className="estratificacao-header">
          <h2 className="section-title">Estratificação dentária</h2>
          <p className="section-subtitle">
            Como pintar um quadro, só que com o seu sorriso: camada por
            camada, até chegar na cor e no brilho que parecem 100% naturais —
            sem tocar no que já é seu.
          </p>
        </header>

        {/* ETAPAS: cards numerados, sem ilustração */}
        <div className="camadas-grid">
          {CAMADAS.map((c, i) => (
            <div className="camada-card" key={c.numero}>
              <span className="camada-card-numero">{c.numero}</span>
              <span className="camada-card-icone">
                <c.Icon />
              </span>
              <h3>{c.titulo}</h3>
              <p>{c.descricao}</p>
              {i < CAMADAS.length - 1 && (
                <span className="camada-card-seta" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        {/* COMPARATIVO */}
        <div className="estratificacao-tabela-wrap">
          <h3 className="tabela-titulo">Estratificação ou faceta convencional?</h3>
          <table className="estratificacao-tabela">
            <thead>
              <tr>
                <th scope="col">O que você quer saber</th>
                <th scope="col" className="coluna-destaque">Estratificação</th>
                <th scope="col">Faceta convencional</th>
              </tr>
            </thead>
            <tbody>
              {COMPARATIVO.map((linha) => (
                <tr key={linha.criterio}>
                  <th scope="row">{linha.criterio}</th>
                  <td className="coluna-destaque">{linha.estratificacao}</td>
                  <td>{linha.faceta}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="tabela-nota">
            A estratificação é a opção mais conservadora sempre que a
            estrutura do dente permite.
          </p>
        </div>

        {/* BENEFÍCIOS */}
        <div className="estratificacao-beneficios">
          {BENEFICIOS.map(({ titulo, descricao, Icon }) => (
            <div className="beneficio-item" key={titulo}>
              <span className="beneficio-icone">
                <Icon />
              </span>
              <h4>{titulo}</h4>
              <p>{descricao}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="estratificacao-cta">
          <p>Quer saber se esse é o caminho certo pro seu sorriso?</p>
          <a href="#contato" className="cta-botao !text-white">
            AGENDAR AVALIAÇÃO
          </a>
        </div>
      </div>
    </section>
  );
}
