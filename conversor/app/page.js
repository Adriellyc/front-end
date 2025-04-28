import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#00C9A7] via-[#008B8B] to-[#4B9CD3] text-white p-8">
      <h1 className="text-6xl font-extrabold mb-12 text-center text-white drop-shadow-xl">
        Transforme Valores em Simples Cliques 💡
      </h1>

      <p className="text-xl text-center max-w-3xl mb-12">
        O Conversor Universal é a sua solução rápida e prática para transformar moedas, temperaturas, unidades de medida e muito mais, com apenas alguns cliques.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-4xl">
        <Link
          href="/conversor-dolar"
          className="bg-[#FFB74D] hover:bg-[#FFA726] text-[#212121] text-center py-6 px-8 rounded-lg shadow-md font-semibold transition duration-300 ease-in-out text-lg border-2 border-[#FF9800]"
        >
          💵 Converter Moeda (USD/BRL)
        </Link>

        <Link
          href="/conversor-temperatura"
          className="bg-[#FF7043] hover:bg-[#FF5722] text-[#212121] text-center py-6 px-8 rounded-lg shadow-md font-semibold transition duration-300 ease-in-out text-lg border-2 border-[#FF5722]"
        >
          🌡️ Transforme Temperaturas em Segundos
        </Link>

        <Link
          href="/conversor-unidade"
          className="bg-[#81C784] hover:bg-[#66BB6A] text-[#212121] text-center py-6 px-8 rounded-lg shadow-md font-semibold transition duration-300 ease-in-out text-lg border-2 border-[#66BB6A]"
        >
          📏 Converta Unidades e Medidas
        </Link>

        <Link
          href="/sobre"
          className="bg-[#9575CD] hover:bg-[#7E57C2] text-[#212121] text-center py-6 px-8 rounded-lg shadow-md font-semibold transition duration-300 ease-in-out text-lg border-2 border-[#7E57C2]"
        >
          ℹ️ Saiba Mais sobre a Criadora
        </Link>

       <link href='/sobre'></link>

      </div>
    </div>
  )
}
