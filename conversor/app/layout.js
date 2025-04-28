import { Inter, Roboto_Mono } from 'next/font/google'; // Corrigido para importação do Google Fonts
import './globals.css';  // Corrigido para manter o nome original do arquivo CSS

// Definindo as fontes
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Variável da fonte Inter
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono', // Variável da fonte Roboto Mono
});

// Definindo metadados
export const metadata = {
  title: 'Minha Aplicação Next',
  description: 'Aplicação Next.js para conversões rápidas',
};

// Layout principal
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br"> {/* Ajuste para português */}
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`} // Aplicando as fontes
      >
        {children}
      </body>
    </html>
  );
}
