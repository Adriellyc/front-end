import React, { useState } from "react";

// Função para gerar um número aleatório entre 1 e 6
function gerarNumAleat() {
  return Math.floor(Math.random() * 6) + 1;
}

// Componente Dado que recebe o valor e exibe a imagem correspondente
function Dado({ valor }) {
  // Mapeamento entre o número do dado e a imagem correspondente
  const dadosImagens = {
    1: "/imagens/dado1.png",
    2: "/imagens/dado2.png",
    3: "/images/dado3.png",
    4: "/images/dado4.png",
    5: "/images/dado5.png",
    6: "/images/dado6.png",
  };

  return (
    <div>
      <img
        src={dadosImagens[valor]}
        alt={`Dado com o valor ${valor}`}
        style={{ width: "100px", height: "100px" }} // Ajustando o tamanho da imagem
      />
    </div>
  );
}

// Componente principal da aplicação
export default function App() {
  const [valorDado, setValorDado] = useState(1); // Estado para o valor do dado

  // Função para alterar o valor do dado e gerar um novo número aleatório
  const jogarDado = () => {
    const novoValor = gerarNumAleat();
    setValorDado(novoValor); // Atualiza o valor do dado com o número aleatório
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Jogo de Dados</h1>
      <button
        onClick={jogarDado}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Jogar Dado
      </button>
      <div>
        <h2>Valor do Dado: {valorDado}</h2>
        {/* Exibe o componente Dado com o valor gerado */}
        <Dado valor={valorDado} />
      </div>
    </div>
  );
}
