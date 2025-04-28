'use client'

import Link from 'next/link'

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#9F7AEA] via-[#805AD5] to-[#6B46C1] p-6">
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-6 text-center">
        Sobre a Desenvolvedora 👩‍💻
      </h1>

      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-xl space-y-6">
        <p className="text-lg text-gray-800">
          Olá! Meu nome é <strong>Adrielly</strong>, e eu sou a desenvolvedora responsável por este projeto. Sempre fui
          apaixonada por tecnologia e, com dedicação, venho me aprimorando na área de desenvolvimento e criação de
          aplicações úteis para o cotidiano.
        </p>

        <p className="text-lg text-gray-800">
          Este site foi criado com o objetivo de oferecer uma ferramenta prática para conversões de unidades e moedas,
          facilitando a vida de quem precisa fazer esses cálculos de forma rápida e intuitiva. Estou sempre em busca de
          novos aprendizados para evoluir como desenvolvedora e criar soluções cada vez melhores.
        </p>
      </div>

      <Link
        href="/"
        className="mt-8 inline-block bg-[#4299E1] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#3182CE] transition"
      >
        Voltar à Home
      </Link>
    </div>
  )
}
