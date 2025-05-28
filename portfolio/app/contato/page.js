import { useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada!');
    // Aqui poderia enviar para um backend ou um email.
  };

  return (
    <main>
      <h1>Contato</h1>
      <p>
        Entre em contato comigo pelo GitHub:{" "}
        <a 
          href="https://github.com/Adriellyc" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: 'blue', textDecoration: 'underline' }}
        >
          Adriellyc
        </a>
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
        <label>
          Nome:
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Mensagem:
          <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} required />
        </label>

        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
