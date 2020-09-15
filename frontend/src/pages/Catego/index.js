import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import{FiPower, FiTrash2} from 'react-icons/fi';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../Services/api';

import './styles.css';

export default function Catego(){
    const[categorys, setCategorys]= useState([]);
    const history = useHistory();

    const cliId = localStorage.getItem('cliId');
    const cliName = localStorage.getItem('cliName');
    

    useEffect(()=>{
        api.get('categorys',{
            headers:{
                Authorization:cliId,
            }

        }).then(response=> {
            setCategorys(response.data);

        })

    }, [cliId] );

    async function handleDeleteCategory(id){
        try{
            await api.delete(`categorys/${id}`,{
                headers:{
                    Authorization:cliId,
                }

            });
            setCategorys(categorys.filter(category=> categorys.id !== id));
        }catch(err){
            alert('Erro ao deletar categoria, existe um produto vinculado.');
        }
    }

         function handleLogout() {
             localStorage.clear();

            history.push('/');
           
        }

        if(localStorage.getItem('email')&& localStorage.getItem('name')){
            console.log('está logado');
          
          }
          else{
          
            history.push('/');
          }
        

    return (
    <div className="profile-container">
        <header>
        <img src={logoImg} alt="Consys"/>
        <Link className="back-link" to="/profile">
          <FiArrowLeft size={16} color="#6b8fc9"/>
          Voltar para home

        </Link>
    <span>Bem vindo{cliName}</span>

        
       <button onClick={handleLogout}type="button">
           <FiPower size={18} color="#6b8fc9"/>

          
       </button>
       
        </header>

        <h1>Categorias Cadastradas</h1>
        <ul>
            {categorys.map(category => (
                <li key={category.id}>
               

                <strong>DESCRIÇÃO:</strong>
                <p>{category.name} </p>

              
                

                <button onClick={()=> handleDeleteCategory(category.id)} type="button">
                    <FiTrash2 size={20} color="#a8a8b3"/>
                </button>
            </li>
            ))}
            </ul>
      
    </div>
  );
}