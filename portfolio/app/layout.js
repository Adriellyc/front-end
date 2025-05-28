import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Portfólio Adrielly Campos',
  description: 'Desenvolvedora Front End',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
