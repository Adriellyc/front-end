import Layout from '../components/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Projetos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/SEU_USUARIO/repos')
      .then(res => setRepos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Projetos do GitHub</h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.id} className="mb-2">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {repo.name}
            </a>: {repo.description}
          </li>
        ))}
      </ul>
    </Layout>
  );
}