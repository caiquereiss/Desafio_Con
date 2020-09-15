import React, {useState} from 'react';
import{Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../Services/api';
import './styles.css';
import logoImg from "../../assets/logo.svg";



export default function NewCategory(){

const [name, setName]= useState("");

 
 
const history=useHistory();

const cliId = localStorage.getItem('cliId');
async function handleNewCategory(e){
  e.preventDefault();

  const data = {
    name,
    
    
  };

  try{
    await api.post('categorys', data,{
      headers:{
        Authorization:cliId,

      }
    })
    history.push('/catego');
  }catch(err){
    alert('Erro ao cadastrar caso, tenta novamente.');


  }

}
if(localStorage.getItem('email')&& localStorage.getItem('name')){
  console.log('está logado');

}
else{

  history.push('/');
}

    return ( 
    <div className="new-incident-container">
    <div className="content">
      <section>
        <img src={logoImg} alt="Consys" />
        <h1>Cadastrar nova categoria</h1>
        <p>
         Por favor, preencha  o campo. 
        </p>

        <Link className="back-link" to="/profile">
          <FiArrowLeft size={16} color="#6b8fc9"/>
          Voltar para home

        </Link>
      </section>

      <form onSubmit={handleNewCategory}>
          <input
            placeholder="Descrição"
            value={name}
            onChange={e => setName(e.target.value)}
          />
      
          

        <button className="button" type="submit">Cadastrar </button>
      </form>
    </div>
  </div> 
  );
}