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

/* =========================
   CONTEÚDO
   ========================= */

const CAMADAS = [
  {
    numero: "01",
    titulo: "Dentina",
    descricao: "Camada de base, mais opaca, que sustenta a cor natural do dente.",
  },
  {
    numero: "02",
    titulo: "Corpo",
    descricao: "Camada intermediária, que ajusta volume e intensidade de cor.",
  },
  {
    numero: "03",
    titulo: "Esmalte",
    descricao: "Camada final, translúcida, que devolve o brilho do esmalte real.",
  },
];

const COMPARATIVO = [
  { criterio: "Desgaste do dente", estratificacao: "Mínimo ou nenhum", faceta: "Desgaste necessário" },
  { criterio: "Sessões", estratificacao: "1 sessão", faceta: "2 a 3 sessões" },
  { criterio: "Reversibilidade", estratificacao: "Reversível", faceta: "Irreversível" },
  { criterio: "Resultado", estratificacao: "Natural, camada a camada", faceta: "Uniforme e padronizado" },
];

const BENEFICIOS = [
  { titulo: "Preserva o dente", descricao: "Sem desgaste da estrutura saudável.", Icon: IconEscudo },
  { titulo: "Resultado imediato", descricao: "Pronto em uma única sessão.", Icon: IconRelogio },
  { titulo: "Efeito natural", descricao: "Cor e brilho reproduzidos camada por camada.", Icon: IconBrilho },
  { titulo: "Menos invasivo", descricao: "Procedimento reversível, sem cortes.", Icon: IconGota },
];

const TOOTH_PATH =
  "M120 8 C72 8 42 52 42 118 C42 186 56 246 76 288 C87 310 101 318 120 318 " +
  "C139 318 153 310 164 288 C184 246 198 186 198 118 C198 52 168 8 120 8 Z";

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
            A técnica que reconstrói o dente camada por camada — cor, corpo e
            brilho — sem desgastar o que já é seu.
          </p>
        </header>

        {/* INTRO: ilustração + explicação prática */}
        <div className="estratificacao-intro">
          <div className="estratificacao-ilustracao" aria-hidden="true">
            <svg viewBox="0 0 240 330" className="dente-svg">
              <g className="camada camada-1">
                <path d={TOOTH_PATH} transform="translate(120 163) scale(0.62) translate(-120 -163)" />
              </g>
              <g className="camada camada-2">
                <path d={TOOTH_PATH} transform="translate(120 163) scale(0.82) translate(-120 -163)" />
              </g>
              <g className="camada camada-3">
                <path d={TOOTH_PATH} />
              </g>
            </svg>
          </div>

          <div className="estratificacao-explicacao">
            <p className="explicacao-lead">
              Na prática, a dentista aplica resina composta em pequenas
              camadas sobrepostas — assim como o próprio dente é formado —
              até reconstruir a cor, o volume e a translucidez naturais.
            </p>

            <ol className="camadas-lista">
              {CAMADAS.map((c) => (
                <li key={c.numero} className="camada-item">
                  <span className="camada-numero">{c.numero}</span>
                  <div>
                    <h3>{c.titulo}</h3>
                    <p>{c.descricao}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* COMPARATIVO */}
        <div className="estratificacao-tabela-wrap">
          <h3 className="tabela-titulo">Estratificação ou faceta convencional?</h3>
          <table className="estratificacao-tabela">
            <thead>
              <tr>
                <th scope="col">Critério</th>
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
          <p>Quer saber se a estratificação é indicada para o seu caso?</p>
          <a href="#contato" className="cta-botao !text-white">
            AGENDAR AVALIAÇÃO
          </a>
        </div>
      </div>
    </section>
  );
}
