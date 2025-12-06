import React from "react";

export default function About() {
  return (
    <section id="sobre" className="sobre section">
      <div className="container" style={{display:"grid",gridTemplateColumns:"1fr 420px",gap:30,alignItems:"center"}}>
          <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--vinho)]">
            Sobre a Dra. Gabriela Campos
          </h2>

          <p className="text-lg md:text-xl font-serif text-gray-700 leading-relaxed mt-4">
            A Dra. Gabriela Campos é especialista em odontologia estética e harmonização
            facial, unindo precisão técnica, visão artística e cuidado humano em cada
            atendimento. Seu trabalho é pautado na individualidade de cada paciente,
            sempre buscando resultados naturais, equilibrados e personalizados.
          </p>
          <p className="text-lg md:text-xl font-serif text-gray-700 leading-relaxed mt-6">
            Cirurgiã-dentista formada pela Universidade de Fortaleza (UNIFOR), a Dra.
            Gabriela possui uma trajetória construída sobre rigor técnico, atualização
            constante e sensibilidade clínica. Sua atuação é guiada pela excelência, com
            foco em estética, saúde oral e bem-estar integral.
          </p>

          <p className="text-lg md:text-xl font-serif text-gray-700 leading-relaxed italic mt-6">
            “Meu propósito é transformar sorrisos e, com eles, transformar vidas —
            elevando a autoestima, promovendo saúde bucal e acolhendo cada paciente com
            carinho e profissionalismo.”
            <br />
            <span className="not-italic font-semibold text-[var(--vinho)]">
              — Dra. Gabriela Campos
            </span>
          </p>
        </div>


        <div style={{display:"flex",justifyContent:"center"}}>
          <div style={{width:480,borderRadius:12,overflow:"hidden",boxShadow:"0 18px 48px rgba(16,16,16,.06)",transform: "translateX(30px)" }}>
            <img src="/gabiAbout.jpg" alt="Dra Gabriela" style={{width:"100%",height:480,objectFit:"cover"}} />
          </div>
        </div>
      </div>
    </section>
  );
}


