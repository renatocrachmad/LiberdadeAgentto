import React, { useState } from 'react';
import './style.css';

const PrestadoresDeServico = () => {
  const [nome, setNome] = useState('');
  const [servico, setServico] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [prestadores, setPrestadores] = useState([]); // Lista de prestadores
  const [servicoBusca, setServicoBusca] = useState(''); // Serviço para busca
  const [resultadosBusca, setResultadosBusca] = useState([]); // Resultados da busca

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoPrestador = { nome, servico, endereco, email, telefone };
    setPrestadores([...prestadores, novoPrestador]);
    alert('Prestador de serviço cadastrado com sucesso!');
    
    setNome('');
    setServico('');
    setEndereco('');
    setEmail('');
    setTelefone('');
  };

  const handleFindService = () => {
    const resultados = prestadores.filter((p) => p.servico.toLowerCase() === servicoBusca.toLowerCase());
    setResultadosBusca(resultados);
  };

  return (
    <div className="prestadores-container">
      <h2>Cadastro de Prestadores de Serviço</h2>
      <form onSubmit={handleSubmit} className="prestadores-form">
        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </label>
        <label>
          Serviço:
          <input
            type="text"
            value={servico}
            onChange={(e) => setServico(e.target.value)}
            required
          />
        </label>
        <label>
          Endereço:
          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Telefone:
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="btn-submit">Cadastrar</button>
      </form>

      <h3>Localizar Serviço</h3>
      <div className="search-container">
        <input
          type="text"
          placeholder="Digite o serviço para buscar"
          value={servicoBusca}
          onChange={(e) => setServicoBusca(e.target.value)}
        />
        <button onClick={handleFindService} className="btn-search">Localizar Serviço</button>
      </div>

      {resultadosBusca.length > 0 && (
        <div className="results-container">
          <h4>Prestadores Encontrados:</h4>
          <ul>
            {resultadosBusca.map((prestador, index) => (
              <li key={index}>
                <input
                  type="radio"
                  name="prestadorSelecionado"
                  value={prestador.nome}
                  id={`prestador-${index}`}
                />
                <label htmlFor={`prestador-${index}`}>
                  {prestador.nome} - {prestador.servico} - {prestador.telefone}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PrestadoresDeServico;
