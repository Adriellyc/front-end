'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#00C9A7] via-[#008B8B] to-[#4B9CD3] text-white p-8">
      <h1 className="text-6xl font-extrabold mb-12 text-center drop-shadow-xl text-white">
        Transforme Valores em Simples Cliques 💡
      </h1>

      <p className="text-xl text-center max-w-2xl mb-10">
        O Conversor Universal** foi criado para facilitar o seu dia a dia. Com ele, você pode converter moedas, temperaturas, unidades de medida e muito mais de forma rápida, prática e intuitiva!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
        <Link
          href="/conversor-dolar"
          className="bg-gradient-to-r from-[#FF6F00] to-[#FF9800] hover:bg-gradient-to-r hover:from-[#FF9100] hover:to-[#FF5722] text-white text-center py-6 px-8 rounded-3xl shadow-lg font-semibold transition duration-300 ease-in-out text-lg"
        >
          💵 Converter Moeda (USD/BRL)
        </Link>

        <Link
          href="/conversor-temperatura"
          className="bg-gradient-to-r from-[#F44336] to-[#D32F2F] hover:bg-gradient-to-r hover:from-[#D32F2F] hover:to-[#C62828] text-white text-center py-6 px-8 rounded-3xl shadow-lg font-semibold transition duration-300 ease-in-out text-lg"
        >
          🌡️ Transforme Temperaturas em Segundos
        </Link>

        <Link
          href="/conversor-unidade"
          className="bg-gradient-to-r from-[#8BC34A] to-[#4CAF50] hover:bg-gradient-to-r hover:from-[#43A047] hover:to-[#388E3C] text-white text-center py-6 px-8 rounded-3xl shadow-lg font-semibold transition duration-300 ease-in-out text-lg"
        >
          📏 Converta Unidades e Medidas
        </Link>

        <Link
          href="/sobre"
          className="bg-gradient-to-r from-[#9C27B0] to-[#8E24AA] hover:bg-gradient-to-r hover:from-[#7B1FA2] hover:to-[#6A1B9A] text-white text-center py-6 px-8 rounded-3xl shadow-lg font-semibold transition duration-300 ease-in-out text-lg"
        >
          ℹ️ Saiba Mais sobre a Criadora
        </Link>
      </div>
    </div>
  )
}
