import React, { useState } from 'react';
import { FaCalendarCheck, FaTimes, FaEdit, FaFilePdf } from 'react-icons/fa';
import { jsPDF } from 'jspdf';
import './style.css';

const EventoDetalhes = () => {
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

  const handleChange = (e) => {
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Lógica para salvar os dados
    alert('Evento agendado com sucesso!');
  };

  const handleGenerateContract = () => {
    const doc = new jsPDF();
    doc.setFont("Helvetica", "normal");
    doc.setFontSize(16);
    doc.text("Contrato de Evento", 20, 20);

    // Adicionando detalhes do evento
    doc.setFontSize(12);
    const details = [
      `Cidade: ${eventData.cidade}`,
      `Local: ${eventData.local}`,
      `Data: ${eventData.data}`,
      `Hora de Início: ${eventData.horaInicio}`,
      `Hora de Fim: ${eventData.horaFim}`,
      `Nome do Contratante: ${eventData.contratante}`,
      `Valor do Sinal: R$ ${eventData.valorSinal}`,
      `Valor Total: R$ ${eventData.valorTotal}`,
      `Observação: ${eventData.observacao}`,
    ];
    
    details.forEach((line, index) => {
      doc.text(line, 20, 30 + (index * 10)); // espaçamento de 10 entre as linhas
    });

    doc.save(`contrato_evento_${eventData.contratante}.pdf`);
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
          type="number"
          name="valorSinal"
          value={eventData.valorSinal}
          onChange={handleChange}
        />

        <label>Valor Total:</label>
        <input
          type="number"
          name="valorTotal"
          value={eventData.valorTotal}
          onChange={handleChange}
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
        </div>
      </div>
    </div>
  );
};

export default EventoDetalhes;
