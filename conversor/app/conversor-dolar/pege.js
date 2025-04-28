'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ConversorMoeda() {
  const [dolarInput, setDolarInput] = useState('')
  const [taxaCambio, setTaxaCambio] = useState('')
  const [conversao, setConversao] = useState('')

  useEffect(() => {
    const dolar = Number(dolarInput)
    const taxa = Number(taxaCambio)

    if (!isNaN(dolar) && !isNaN(taxa)) {
      const total = dolar * taxa
      setConversao(total.toFixed(2))
    } else {
      setConversao('')
    }
  }, [dolarInput, taxaCambio])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-[#0F4C75] via-[#1A8D8E] to-[#1AAB8B] px-6 py-10">
      <h1 className="text-4xl font-bold text-white mb-8 drop-shadow text-center">
        Conversor de Dólar 💰
      </h1>

      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 space-y-5">
        <input
          type="number"
          placeholder="Digite o valor em USD"
          className="w-full border border-gray-300 rounded-md p-3 shadow focus:outline-none focus:ring-2 focus:ring-[#68D391]"
          value={dolarInput}
          onChange={(e) => setDolarInput(e.target.value)}
        />
        <input
          type="number"
          placeholder="Digite a cotação atual"
          className="w-full border border-gray-300 rounded-md p-3 shadow focus:outline-none focus:ring-2 focus:ring-[#68D391]"
          value={taxaCambio}
          onChange={(e) => setTaxaCambio(e.target.value)}
        />

        {conversao && (
          <div className="text-center text-xl font-medium text-[#1A8D8E]">
            Valor convertido: <span className="font-bold text-[#3B82F6]">R$ {conversao}</span>
          </div>
        )}
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
