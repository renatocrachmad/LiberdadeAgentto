import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Register = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem");
      return;
    }

    alert("Cadastro realizado com sucesso");
    navigate("/login");
  };

  return (
    <div className="register-container">
      <h2>Cadastrar-se</h2>
      <input
        type="text"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        placeholder="Login"
      />
      <input
        type={showPassword ? "text" : "password"}
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Senha"
      />
      <input
        type={showPassword ? "text" : "password"}
        value={confirmarSenha}
        onChange={(e) => setConfirmarSenha(e.target.value)}
        placeholder="Confirmar Senha"
      />
      <div>
        <input
          type="checkbox"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        <label>Mostrar Senhas</label>
      </div>
      <button onClick={handleRegister}>Salvar</button>
      <button onClick={() => navigate("/login")}>Voltar para Login</button>
    </div>
  );
};

export default Register;
