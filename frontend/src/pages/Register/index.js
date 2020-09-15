import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";


import "./styles.css";

import api from '../../Services/api';

import logoImg from "../../assets/logo.svg";

export default function Register() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  
  

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      
    };

    try {
      const response = await api.post("/users", data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push("/");
    } catch (err) {
      console.log(err);
      alert("Erro no cadastro, tente novamente.");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Consys" />
          <h1>Cadastro</h1>
          <p>
          Preencha seus dados para a criação da conta.
          </p>

          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#6b8fc9" />
            Já tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
        <input
            placeholder="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
         
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="password"
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
          
          
            
          

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}