'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function ConversorMoeda() {
  const [valorUsd, setValorUsd] = useState('')
  const [valorBrl, setValorBrl] = useState('')
  const [erro, setErro] = useState('')

  const taxaCambio = 5.65 // Valor fixo do dólar

  const converter = (valor, origem) => {
    const numero = parseFloat(valor)
    if (isNaN(numero) || valor === '') {
      setErro('Por favor, insira um número válido.')
      setValorUsd('')
      setValorBrl('')
      return
    }

    setErro('')  // Limpa o erro se o valor for válido

    if (origem === 'usd') {
      setValorUsd(valor)
      setValorBrl((numero * taxaCambio).toFixed(2))
    } else {
      setValorBrl(valor)
      setValorUsd((numero / taxaCambio).toFixed(2))
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-[#0F4C75] via-[#1A8D8E] to-[#1AAB8B] px-6 py-10">
      <h1 className="text-4xl font-bold text-white mb-8 drop-shadow text-center">
        Conversor de Dólar 💰
      </h1>

      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 space-y-5">
        <input
          type="number"
          placeholder="Digite o valor em USD"
          className="w-full bg-gray-100 text-gray-800 border border-gray-300 rounded-md p-3 shadow focus:outline-none focus:ring-2 focus:ring-[#68D391]"
          value={valorUsd}
          onChange={(e) => converter(e.target.value, 'usd')}
        />
        <input
          type="number"
          placeholder="Digite o valor em BRL"
          className="w-full bg-gray-100 text-gray-800 border border-gray-300 rounded-md p-3 shadow focus:outline-none focus:ring-2 focus:ring-[#68D391]"
          value={valorBrl}
          onChange={(e) => converter(e.target.value, 'brl')}
        />

        {erro && <p className="text-red-500 text-sm text-center">{erro}</p>}
      </div>

      <Link
        href="/"
        className="mt-6 inline-block bg-[#4299E1] text-white py-3 px-6 rounded-full text-base font-medium hover:bg-[#3182CE] transition"
      >
        Voltar
      </Link>
    </div>
  )
}
