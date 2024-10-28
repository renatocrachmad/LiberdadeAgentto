import React from 'react';
import './style.css';

const Financeiro = () => {
  const financialData = [
    { mes: 'Janeiro', custos: 500, recebido: 1000, lucro: 500, projecao: 1500 },
    { mes: 'Fevereiro', custos: 600, recebido: 1200, lucro: 600, projecao: 1600 },
    { mes: 'Março', custos: 700, recebido: 1400, lucro: 700, projecao: 1700 },
    
  ];

  return (
    <div className="financeiro-container">
      <h2>Planilha de Contabilidade</h2>
      <table className="financial-table">
        <thead>
          <tr>
            <th>Mês</th>
            <th>Custos</th>
            <th>Valores Recebidos</th>
            <th>Lucros Reais</th>
            <th>Projeção de Lucros</th>
          </tr>
        </thead>
        <tbody>
          {financialData.map((data, index) => (
            <tr key={index}>
              <td>{data.mes}</td>
              <td>R${data.custos.toFixed(2)}</td>
              <td>R${data.recebido.toFixed(2)}</td>
              <td>R${data.lucro.toFixed(2)}</td>
              <td>R${data.projecao.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Financeiro;
