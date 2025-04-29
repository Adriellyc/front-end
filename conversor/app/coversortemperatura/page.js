'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function TrocaTemperatura() {
  const [celsius, setCelsius] = useState('')
  const [fahrenheit, setFahrenheit] = useState('')
  const [erro, setErro] = useState('')

  const converter = (valor, origem) => {
    const numero = parseFloat(valor)
    if (isNaN(numero) || valor === '') {
      setErro('Por favor, insira um número válido.')
      setCelsius('')
      setFahrenheit('')
      return
    }

    setErro('')

    if (origem === 'celsius') {
      setCelsius(valor)
      setFahrenheit(((numero * 9) / 5 + 32).toFixed(2))
    } else {
      setFahrenheit(valor)
      setCelsius((((numero - 32) * 5) / 9).toFixed(2))
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-[#FFA500] via-[#FF7F50] to-[#FF6347] p-8">
      <h1 className="text-4xl font-bold text-white text-center drop-shadow mb-6">
        Conversão de Temperatura 🔥❄️
      </h1>

      <div className="bg-white p-7 rounded-xl shadow-md w-full max-w-md space-y-5">
        <input
          type="number"
          placeholder="Informe em Celsius (°C)"
          className="w-full p-3 bg-gray-100 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7F50] transition"
          value={celsius}
          onChange={(e) => converter(e.target.value, 'celsius')}
        />
        <input
          type="number"
          placeholder="Informe em Fahrenheit (°F)"
          className="w-full p-3 bg-gray-100 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7F50] transition"
          value={fahrenheit}
          onChange={(e) => converter(e.target.value, 'fahrenheit')}
        />

        {erro && (
          <div className="text-center text-red-500 text-sm">
            {erro}
          </div>
        )}
      </div>

      <Link
        href="/"
        className="mt-6 bg-[#4299E1] text-white px-6 py-3 rounded-full text-base font-medium hover:bg-[#3182CE] transition"
      >
        Voltar
      </Link>
    </div>
  )
}
