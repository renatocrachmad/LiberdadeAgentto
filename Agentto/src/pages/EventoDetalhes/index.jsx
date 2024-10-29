import React, { useState, useEffect } from 'react';
import { FaCalendarCheck, FaTimes, FaEdit, FaFilePdf, FaSearch } from 'react-icons/fa';
import { jsPDF } from 'jspdf';
import './style.css';

const EventoDetalhes = ({ atualizarContabilidade }) => {
  const [eventData, setEventData] = useState({
    cidade: '',
    local: '',
    data: '', 
    horaInicio: '',
    horaFim: '',
    contratante: '',
    valorSinal: '',
    valorTotal: '',
    observacao: '',
  });

  const [valorRestante, setValorRestante] = useState('');

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: 
        name === 'valorSinal' || name === 'valorTotal' 
          ? formatCurrency(value.replace(/[^0-9]/g, '') / 100) 
          : value,
    });
  };

  
  useEffect(() => {
    const sinal = parseFloat(eventData.valorSinal.replace(/[^0-9,-]+/g,"").replace(',', '.')) || 0;
    const total = parseFloat(eventData.valorTotal.replace(/[^0-9,-]+/g,"").replace(',', '.')) || 0;
    const restante = total - sinal;

    setValorRestante(formatCurrency(restante));
  }, [eventData.valorSinal, eventData.valorTotal]);

  const handleSave = () => {
    
    atualizarContabilidade({
      mes: new Date(eventData.data).toLocaleString('pt-BR', { month: 'long' }),
      custos: parseFloat(eventData.valorSinal.replace(/[^0-9,-]+/g,"").replace(',', '.')),
      recebido: parseFloat(eventData.valorTotal.replace(/[^0-9,-]+/g,"").replace(',', '.')),
      lucro: parseFloat(valorRestante.replace(/[^0-9,-]+/g,"").replace(',', '.')),
      projecao: parseFloat(eventData.valorTotal.replace(/[^0-9,-]+/g,"").replace(',', '.')) * 1.1, // Exemplo de projeção
    });
    alert('Evento agendado com sucesso!');
  };

  const handleGenerateContract = () => {
    const doc = new jsPDF();
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(16);
    doc.text("Contrato de Evento", 20, 20);

    const details = [
      `Cidade: ${eventData.cidade}`,
      `Local: ${eventData.local}`,
      `Data: ${eventData.data}`,
      `Hora de Início: ${eventData.horaInicio}`,
      `Hora de Fim: ${eventData.horaFim}`,
      `Nome do Contratante: ${eventData.contratante}`,
      `Valor do Sinal: ${eventData.valorSinal}`,
      `Valor Total: ${eventData.valorTotal}`,
      `Valor Restante: ${valorRestante}`,
      `Observação: ${eventData.observacao}`,
    ];
    
    details.forEach((line, index) => {
      doc.text(line, 20, 30 + (index * 10));
    });

    doc.save(`contrato_evento_${eventData.contratante}.pdf`);
  };

  const handleFindEvent = async () => {
    try {
      const response = await fetch('https://671fe606e7a5792f052fe989.mockapi.io/:endpoint'); 
      const data = await response.json();

      const event = data[eventData.contratante];
      if (event) {
        setEventData(event);
        alert("Evento localizado com sucesso!");
      } else {
        alert("Evento não encontrado!");
      }
    } catch (error) {
      console.error("Erro ao buscar evento:", error);
      alert("Ocorreu um erro ao localizar o evento.");
    }
  };

  return (
    <div className="page-container">
      <div className="event-details-container">
        <h2>Detalhes do Evento</h2>

        <label>Cidade:</label>
        <input
          type="text"
          name="cidade"
          value={eventData.cidade}
          onChange={handleChange}
        />

        <label>Local:</label>
        <input
          type="text"
          name="local"
          value={eventData.local}
          onChange={handleChange}
        />

        <label>Data:</label>
        <input
          type="date" 
          name="data"
          value={eventData.data}
          onChange={handleChange}
        />

        <label>Hora de Início:</label>
        <input
          type="time"
          name="horaInicio"
          value={eventData.horaInicio}
          onChange={handleChange}
        />

        <label>Hora de Fim:</label>
        <input
          type="time"
          name="horaFim"
          value={eventData.horaFim}
          onChange={handleChange}
        />

        <label>Nome do Contratante:</label>
        <input
          type="text"
          name="contratante"
          value={eventData.contratante}
          onChange={handleChange}
        />

        <label>Valor do Sinal:</label>
        <input
          type="text"
          name="valorSinal"
          value={eventData.valorSinal}
          onChange={handleChange}
        />

        <label>Valor Total:</label>
        <input
          type="text"
          name="valorTotal"
          value={eventData.valorTotal}
          onChange={handleChange}
        />

        <label>Valor Restante:</label>
        <input
          type="text"
          name="valorRestante"
          value={valorRestante}
          readOnly
        />

        <label>Observação:</label>
        <textarea
          name="observacao"
          value={eventData.observacao}
          onChange={handleChange}
        ></textarea>

        <div className="button-group">
          <button onClick={handleSave} className="save-btn">
            <FaCalendarCheck /> Agendar
          </button>
          <button className="cancel-btn">
            <FaTimes /> Cancelar
          </button>
          <button className="edit-btn">
            <FaEdit /> Editar
          </button>
          <button onClick={handleGenerateContract} className="pdf-btn">
            <FaFilePdf /> Gerar Contrato
          </button>
          <button onClick={handleFindEvent} className="find-btn">
            <FaSearch /> Localizar Evento
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventoDetalhes;
