import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Login = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (login === "admin" && senha === "password") {
      if (rememberMe) {
        localStorage.setItem("login", login);
        localStorage.setItem("senha", senha);
      } else {
        localStorage.removeItem("login");
        localStorage.removeItem("senha");
      }
      navigate("/home");
    } else {
      alert("Login ou senha incorretos");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        className="inputGeral"
        type="text"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        placeholder="Login"
      />
      <input
        className="inputGeral"
        type={showPassword ? "text" : "password"}
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        placeholder="Senha"
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Esconder Senha" : "Mostrar Senha"}
      </button>
      <div>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        <label>Gravar Senha</label>
      </div>
      <button onClick={handleLogin} className="btnEntrar">
        Entrar
      </button>
      <button onClick={() => navigate("/register")} className="btnRegister">
        Cadastrar-se
      </button>
    </div>
  );
};

export default Login;
