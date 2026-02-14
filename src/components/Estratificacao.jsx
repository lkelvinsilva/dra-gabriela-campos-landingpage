import "./Estratificacao.css";
import { useEffect, useRef, useState } from "react";


export default function Estratificacao() {
  const cardsRef = useRef([]);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section className="estratificacao-section section-fade" id="estratificacao">
      <div className="container">
        <h2 className="section-title">
          Estratificação: estética natural com preservação do seu sorriso
        </h2>

        <p className="section-subtitle">
          Uma técnica moderna que valoriza a beleza do sorriso respeitando a
          estrutura natural dos dentes.
        </p>

        <div className="estratificacao-cards">
          {[
            {
              title: "O que é Estratificação",
              content: (
                <>
                  <p>
                    Técnica estética realizada com resina composta aplicada em
                    camadas para reproduzir cor, forma e translucidez naturais.
                  </p>
                  <p>
                    Indicada para quem busca harmonia sem desgastes excessivos.
                  </p>
                </>
              ),
            },
            {
              title: "Faceta com Estratificação x Faceta Convencional",
              destaque: true,
              content: (
                <>
                  <ul>
                    <li>
                      <strong>Estratificação:</strong> preserva o dente natural.
                    </li>
                    <li>
                      <strong>Faceta:</strong> exige maior desgaste dental.
                    </li>
                  </ul>
                  <p className="conclusao">
                    A opção mais conservadora sempre que possível.
                  </p>
                </>
              ),
            },
            {
              title: "Por que escolher Estratificação?",
              content: (
                <ul>
                  <li>Preserva a estrutura do dente</li>
                  <li>Resultado natural e personalizado</li>
                  <li>Menor risco a longo prazo</li>
                  <li>Resultados imediatos</li>
                </ul>
              ),
            },
          ].map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`
                estratificacao-card
                ${card.destaque ? "destaque" : ""}
                ${activeCard === index ? "active" : ""}
                ${activeCard !== null && activeCard !== index ? "dim" : ""}
              `}
              onClick={() => handleCardClick(index)}
            >
              <h3>{card.title}</h3>
              {card.content}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
