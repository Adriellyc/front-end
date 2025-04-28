'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-[#319795] to-[#1E3A8A] text-white p-8">
      <h1 className="text-4xl font-bold mb-10 text-center drop-shadow">
        Conversor Universal 🌍
      </h1>

      <p className="text-base text-center max-w-2xl mb-10 leading-relaxed">
        Um site prático e eficiente para realizar conversões de moedas, unidades de medida, temperatura e muito mais. 
        Escolha uma das opções abaixo e transforme valores com rapidez e precisão!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-3xl">
        <Link
          href="/conversor-dolar"
          className="bg-blue-500 hover:bg-blue-600 text-white py-5 px-6 rounded-xl shadow-lg text-center font-medium text-lg transition"
        >
          💰 Dólar para Real
        </Link>

        <Link
          href="/conversor-temperatura"
          className="bg-orange-400 hover:bg-orange-500 text-white py-5 px-6 rounded-xl shadow-lg text-center font-medium text-lg transition"
        >
          🌡️ Converter Temperatura
        </Link>

        <Link
          href="/conersor-unidade"
          className="bg-green-400 hover:bg-green-500 text-white py-5 px-6 rounded-xl shadow-lg text-center font-medium text-lg transition"
        >
          📐 Medidas e Unidades
        </Link>

        <Link
          href="/sobre"
          className="bg-purple-500 hover:bg-purple-700 text-white py-5 px-6 rounded-xl shadow-lg text-center font-medium text-lg transition"
        >
          👩‍💻 Sobre Adrielly
        </Link>
      </div>
    </div>
  )
}
