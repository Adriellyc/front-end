'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#FF6A00] via-[#FF3D00] to-[#F44034] text-white p-8">
      <h1 className="text-6xl font-bold mb-12 text-center drop-shadow-xl">
        Descubra o Poder das Conversões 💡
      </h1>

      <p className="text-xl text-center max-w-2xl mb-10">
        O **Conversor Universal** é a sua ferramenta ideal para transformar valores de moeda, temperatura, medidas e muito mais! 
        Simples, rápido e prático: converta tudo o que você precisa com apenas alguns cliques.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
        <Link
          href="/conversor-dolar"
          className="bg-[#F4A300] hover:bg-[#D87C00] text-white text-center py-6 px-8 rounded-3xl shadow-2xl font-bold transition duration-300 ease-in-out text-lg"
        >
          💵 **Converter Moeda (USD/BRL)**
        </Link>

        <Link
          href="/conversor-temperatura"
          className="bg-[#F46C75] hover:bg-[#F0345C] text-white text-center py-6 px-8 rounded-3xl shadow-2xl font-bold transition duration-300 ease-in-out text-lg"
        >
          🌡️ **Transforme Temperaturas em Segundos**
        </Link>

        <Link
          href="/conversor-unidade"
          className="bg-[#A8D63E] hover:bg-[#7BBD2D] text-white text-center py-6 px-8 rounded-3xl shadow-2xl font-bold transition duration-300 ease-in-out text-lg"
        >
          📏 **Converta Unidades e Medidas**
        </Link>

        <Link
          href="/sobre"
          className="bg-[#8A4DFF] hover:bg-[#6A3CDA] text-white text-center py-6 px-8 rounded-3xl shadow-2xl font-bold transition duration-300 ease-in-out text-lg"
        >
          ℹ️ **Saiba Mais sobre a Criadora**
        </Link>
      </div>
    </div>
  )
}
