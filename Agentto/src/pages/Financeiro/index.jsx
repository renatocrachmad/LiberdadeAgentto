import React from 'react';
import './style.css';

const Financeiro = ({ eventData }) => {
  
  const financialData = [
    { mes: 'Janeiro', custos: 500, recebido: 1000 },
    { mes: 'Fevereiro', custos: 600, recebido: 1200 },
    { mes: 'Março', custos: 700, recebido: 1400 },
  ];

  
  const calculoProjecao = (lucro) => lucro * 1.5;

  
  const addEventDataToFinancialData = () => {
   
    if (!eventData || !eventData.data) {
      console.error("eventData não está definido ou não possui a propriedade 'data'.");
      return [];
    }

    const newData = {
      mes: new Date(eventData.data).toLocaleString('pt-BR', { month: 'long' }),
      custos: parseFloat(eventData.valorSinal.replace(/[^0-9,-]+/g, "").replace(',', '.')) || 0,
      recebido: parseFloat(eventData.valorTotal.replace(/[^0-9,-]+/g, "").replace(',', '.')) || 0,
    };

   
    return [...financialData, newData];
  };

  const updatedFinancialData = addEventDataToFinancialData();

  return (
    <div className="financeiro-container">
      <h2>Contabilidade</h2>
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
          {updatedFinancialData.map((data, index) => {
            const lucro = data.recebido - data.custos;
            const projecao = calculoProjecao(lucro);

            return (
              <tr key={index}>
                <td>{data.mes}</td>
                <td>R${data.custos.toFixed(2)}</td>
                <td>R${data.recebido.toFixed(2)}</td>
                <td>R${lucro.toFixed(2)}</td>
                <td>R${projecao.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Financeiro;
