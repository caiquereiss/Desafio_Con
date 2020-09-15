import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import{FiPower, FiTrash2, FiEdit} from 'react-icons/fi';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import api from '../../Services/api';

import './styles.css';

export default function Profile(){

    //const[categorys, setCategorys]= useState([]);
    const[products, setProducts]= useState([]);
    const history = useHistory();
    const [name, setName]= useState("");
    const [catego_name, setCatego_name]= useState("");
    

    const cliId = localStorage.getItem('id');
    const cliName = localStorage.getItem('name');
    
    
    if(localStorage.getItem('email')&& localStorage.getItem('name')){
            console.log('está logado');

    }
    else{
        history.push('/');
    }

    useEffect(()=>{
        api.get('products',{
            headers:{
                Authorization:cliId,
            }

        }).then(response=> {
            setProducts(response.data);

        })

    }, [cliId] );

    async function handleDeleteProducts(id){
        try{
            await api.delete(`products/${id}`,{
                headers:{
                    Authorization:cliId,
                }

            });
            setProducts(products.filter(product=> product.id !== id));
        }catch(err){
            alert('Erro ao deletar caso, tente novamente.');
        }
    }

    if(localStorage.getItem('email')&& localStorage.getItem('name')){
        console.log('está logado');
      
      }
      else{
      
        history.push('/');
      }
      
      

    
async function handleEdit(e,id){
  e.preventDefault();

  const data = {
    "id":id,
   "name":name,
   "catego_name":catego_name
    
  };

  try{
    await api.put('products', data,{
      headers:{
        Authorization:cliId,

      }
    })
    history.push('/profile');
  }catch(err){
    alert('Erro ao cadastrar produto, categoria não existe.');


  }

}

         function handleLogout() {
             localStorage.clear();

            history.push('/');
           
        }

    return (
    <div className="profile-container">
        <header>
        <img src={logoImg} alt="Consys"/>
    <span>Bem vindo <strong>{cliName}</strong></span>

        <Link className="button bt" to="/products/new">Cadastrar novo produto </Link>
        <Link className="button" to="/categorys/new">Cadastrar nova categoria </Link>
        
       <button onClick={handleLogout}type="button">
           <FiPower size={18} color="#6b8fc9"/>
       </button>
       
        </header>
        <Link className="button" to="/catego">Categoria </Link>
        <h1>Produtos Cadastrados</h1>
        <ul>
        {products.map(product => (
            <form>
                <li key={product.id}>
               
               


                <strong>DESCRIÇÃO:</strong>
                <input
            placeholder="Descrição"
            value={product.name}
            onChange={e => setName(e.target.value)}
          />
                

                <strong>CATEGORIA:</strong>
                <input
            placeholder="Categoria"
            value={product.catego_name}
            onChange={e => setCatego_name(e.target.value)}
          />
               
               

              
                

                <button onClick={()=> handleDeleteProducts(product.id)} type="button">
                    <FiTrash2 size={20} color="#a8a8b3"/>
                </button>

                <button  onClick={()=>handleEdit(product.id)} className="Edit" type="submit"> 
                <FiEdit size={20} color="#a8a8b3" />
                 </button>

                

                
            </li>
            </form>
            ))}
            </ul>
      
    </div>
  );
}