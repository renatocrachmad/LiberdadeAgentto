import React, { useState } from 'react';
import './style.css';

const PrestadoresDeServico = () => {
  const [nome, setNome] = useState('');
  const [servico, setServico] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({ nome, servico, endereco, email, telefone });
    alert('Prestador de serviço cadastrado com sucesso!');
    
    setNome('');
    setServico('');
    setEndereco('');
    setEmail('');
    setTelefone('');
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
    </div>
  );
};

export default PrestadoresDeServico;
