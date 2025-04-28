'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function TrocaTemperatura() {
  const [entrada, setEntrada] = useState('')
  const [formato, setFormato] = useState('C')
  const [saida, setSaida] = useState(null)

  useEffect(() => {
    if (entrada !== '') {
      realizarConversao()
    }
  }, [entrada, formato])

  const realizarConversao = () => {
    const valorNumerico = parseFloat(entrada)
    if (isNaN(valorNumerico)) {
      setSaida('Entrada inválida')
      return
    }

    let resultado
    if (formato === 'C') {
      resultado = `${((valorNumerico * 9) / 5 + 32).toFixed(2)} °F`
    } else {
      resultado = `${(((valorNumerico - 32) * 5) / 9).toFixed(2)} °C`
    }

    setSaida(resultado)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-[#FFA500] via-[#FF7F50] to-[#FF6347] p-8">
      <h1 className="text-4xl font-bold text-white text-center drop-shadow mb-6">
        Conversão de Temperatura 🔥❄️
      </h1>

      <div className="bg-white p-7 rounded-xl shadow-md w-full max-w-md space-y-5">
        <input
          type="number"
          placeholder={`Informe em ${formato === 'C' ? 'Celsius' : 'Fahrenheit'}`}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7F50] transition"
          value={entrada}
          onChange={(e) => setEntrada(e.target.value)}
        />

        <select
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF7F50] transition"
          value={formato}
          onChange={(e) => setFormato(e.target.value)}
        >
          <option value="C">Celsius para Fahrenheit</option>
          <option value="F">Fahrenheit para Celsius</option>
        </select>

        {saida && (
          <div className="text-center text-xl font-medium text-[#FF4500]">
            Resultado: <span className="font-bold text-[#FFA500]">{saida}</span>
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
