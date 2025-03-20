"use client";

import { useState } from "react";

// Componente para exibir a imagem do dado
function Dado({ valor }) {
  const imagens = {
    1: "/dado1.png",
    2: "/dado2.png",
    3: "/dado3.png",
    4: "/dado4.png",
    5: "/dado5.png",
    6: "/dado6.png",
  };

  return <img src={imagens[valor]} alt={`Dado ${valor}`} width={80} />;
}

// Função para gerar um número aleatório entre 1 e 6
function gerarNumeroDado() {
  return Math.floor(Math.random() * 6) + 1;
}

export default function Home() {
  const [rodada, setRodada] = useState(1);
  const [pontosJogador1, setPontosJogador1] = useState(0);
  const [pontosJogador2, setPontosJogador2] = useState(0);
  const [dadoJogador1, setDadoJogador1] = useState(1);
  const [dadoJogador2, setDadoJogador2] = useState(1);
  const [vencedor, setVencedor] = useState("");

  function jogarRodada() {
    const dado1 = gerarNumeroDado();
    const dado2 = gerarNumeroDado();

    setDadoJogador1(dado1);
    setDadoJogador2(dado2);

    if (dado1 > dado2) {
      setPontosJogador1((prev) => prev + 1);
    } else if (dado2 > dado1) {
      setPontosJogador2((prev) => prev + 1);
    }

    if (rodada < 5) {
      setRodada((prev) => prev + 1);
    } else {
      if (pontosJogador1 > pontosJogador2) {
        setVencedor("Jogador 1 venceu!");
      } else if (pontosJogador2 > pontosJogador1) {
        setVencedor("Jogador 2 venceu!");
      } else {
        setVencedor("Empate!");
      }
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", height: "100vh", justifyContent: "center" }}>
      <h1>Jogo de Dados 🎲</h1>
      <p>Rodada: {rodada}/5</p>

      <div style={{ display: "flex", gap: "50px", marginBottom: "20px" }}>
        <div>
          <h2>Jogador 1</h2>
          <Dado valor={dadoJogador1} />
          <p>Pontos: {pontosJogador1}</p>
        </div>
        <div>
          <h2>Jogador 2</h2>
          <Dado valor={dadoJogador2} />
          <p>Pontos: {pontosJogador2}</p>
        </div>
      </div>

      <button style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer", borderRadius: "5px", border: "none", backgroundColor: "#007bff", color: "white" }} onClick={jogarRodada}>
        🎲 Jogar Rodada 🎲
      </button>

      {vencedor && <h2 style={{ marginTop: "20px" }}>{vencedor}</h2>}
    </div>
  );
}
