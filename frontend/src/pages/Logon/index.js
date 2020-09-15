import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../Services/api';

import './styles.css';

import cadast from '../../assets/Cadast.svg';
import logoImg from '../../assets/logo.svg';



export default function Logon(){
    const [email, setEmail] = useState("");
     
    const history = useHistory();


    async function handleLogin(e){
        e.preventDefault();
        try {
            const response = await  api.post('users/login', { email:email,password:password_hash}).then(function(response){
                const user = response.data;
                localStorage.setItem('id',user.id);
                localStorage.setItem('name',user.name);
                localStorage.setItem('email',user.email);


                history.push('/profile');

            }).catch(function(err){
                alert('Login ou senha invalidos');
            });
            
           
            
            
            
        }
            
            catch (err) {
                alert('Falha no login, tenta novamente.');

            }
        }
        const [password_hash, setPassword_hash] = useState("");

    
    return (
       
        <div className="logon-container">
            <section className="form">
            <img src={logoImg} alt="Consys" />

            <form onSubmit={handleLogin}>
                <h1>Faça seu logon</h1>

                <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="password"
            value={password_hash}
            type="password"
            onChange={e => setPassword_hash(e.target.value)}
          />


                <button className="button" type="submit">Entrar</button>
                <Link className="back-link" to ="register">
                    <FiLogIn size={16} color="#6b8fc9"/>
                    Crie uma conta
                </Link>
                
            </form>
            
            </section>
            
            <img src={cadast} alt="Cadast" />
            
            
        </div>
        
    );
    }