'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ConversorUnidade() {
  const [tipo, setTipo] = useState('m-km')
  const [valor1, setValor1] = useState('')
  const [valor2, setValor2] = useState('')
  const [erro, setErro] = useState('')

  const converter = (valor, origem) => {
    const numero = parseFloat(valor)
    if (isNaN(numero) || valor === '') {
      setErro('Por favor, insira um número válido.')
      setValor1('')
      setValor2('')
      return
    }

    setErro('')  // Limpa o erro se o valor for válido

    let convertido

    switch (tipo) {
      case 'm-km':
        convertido = origem === 'valor1' ? (numero / 1000) : (numero * 1000)
        break
      case 'km-m':
        convertido = origem === 'valor1' ? (numero * 1000) : (numero / 1000)
        break
      case 'g-kg':
        convertido = origem === 'valor1' ? (numero / 1000) : (numero * 1000)
        break
      case 'kg-g':
        convertido = origem === 'valor1' ? (numero * 1000) : (numero / 1000)
        break
      default:
        convertido = ''
    }

    if (origem === 'valor1') {
      setValor1(valor)
      setValor2(convertido.toString())
    } else {
      setValor2(valor)
      setValor1(convertido.toString())
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8">
      <h1 className="text-5xl font-bold text-white drop-shadow-xl mb-6">
        Converta Suas Unidades
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md space-y-8">
        <select
          className="w-full p-4 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={tipo}
          onChange={(e) => {
            setTipo(e.target.value)
            setValor1('')
            setValor2('')
          }}
        >
          <option value="m-km">Metros ↔ Quilômetros</option>
          <option value="km-m">Quilômetros ↔ Metros</option>
          <option value="g-kg">Gramas ↔ Quilos</option>
          <option value="kg-g">Quilos ↔ Gramas</option>
        </select>

        <div className="space-y-4">
          <input
            type="number"
            placeholder="Digite o valor (Unidade 1)"
            className="w-full p-4 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={valor1}
            onChange={(e) => converter(e.target.value, 'valor1')}
          />

          <input
            type="number"
            placeholder="Digite o valor (Unidade 2)"
            className="w-full p-4 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={valor2}
            onChange={(e) => converter(e.target.value, 'valor2')}
          />
        </div>

        {erro && <p className="text-red-500 text-sm text-center">{erro}</p>}
      </div>

      <Link
        href="/"
        className="mt-8 inline-block bg-blue-600 text-white px-6 py-4 rounded-full text-lg font-semibold hover:bg-blue-500 transition duration-300"
      >
        Voltar à Home
      </Link>
    </div>
  )
}
