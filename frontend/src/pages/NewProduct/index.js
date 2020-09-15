import React, {useState} from 'react';
import{Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../Services/api';
import './styles.css';
import logoImg from "../../assets/logo.svg";


export default function NewProduct() {

const [catego_name, setCatego_name]= useState("");
const [catego_id, setCatego_id]= useState("");
const [params, setParams]= useState("");
const [name, setName]= useState("");

const history=useHistory();

const cliId = localStorage.getItem('id');
async function handleNewProduct(e){
  e.preventDefault();
  const data = {
   name,
   catego_name
    
  };
  
  try{
    await api.post(`categorys/${catego_name}/products`, data,{
      headers:{
        Authorization:cliId,

      }
    })
    history.push('/profile');
  }catch(err){
    alert('Erro ao cadastrar produto, categoria não existe.');


  }

}
if(localStorage.getItem('email')&& localStorage.getItem('name')){
  console.log('está logado');

}
else{

  history.push('/');
}







    return ( 
    <div className="new-product-container">
    <div className="content">
      <section>
        <img src={logoImg} alt="Consys" />
        <h1>Cadastrar novo produto</h1>
        <p>
         Por favor, preencha todos os campos. 
        </p>

        <Link className="back-link" to="/profile">
          <FiArrowLeft size={16} color="#6b8fc9"/>
          Voltar para home

        </Link>

      </section>
      

      <form onSubmit={handleNewProduct}>
          <input
            placeholder="Descrição"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            placeholder="Categoria"
            value={catego_name}
            onChange={e => setCatego_name(e.target.value)}
          />
          

        <button className="button" type="submit">Cadastrar </button>

      </form>
    </div>
  </div> 
  );
}