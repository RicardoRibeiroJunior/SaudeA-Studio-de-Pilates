import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import { Link } from 'react-router-dom';


import 'rbx/index.css';

import ComponentsHeader from '../../Components/Header/Header';
import ComponentsFooter from '../../Components/Footer/Footer';
import UiContainer from '../../Components/UI/Container/Container';

import "./Register.css";
import { Button } from "rbx";

const initialValue = {
    nome:'',
    cpf:'',
    endereco:'',
    data_nasc:'',
    email:'',
    senha:'',
}

export default function Register({id}){

    const [values, setValues] = useState(id ? null : initialValue);
    const navigate = useNavigate();

    useEffect(() => {
        if(id){
            axios.get(`http://localhost:5000/user/${id}`)
                .then((response) =>{
                    setValues(response.data);
                })
        }
    }, []);

    console.log(values)
    
    function onChange(ev) {
        const { name, value } = ev.target;
    
        setValues({ ...values, [name]: value });
    }
    
    function onSubmit(ev) {
        ev.preventDefault();

        const method = id ? 'put' : 'post';

        const url = id ? `http://localhost:5000/user/${id}` : `http://localhost:5000/user`;
    
        axios[method](url, values)
            .then((response) => {
            navigate('/list');
        });
    }

    return(
        <div>
            <ComponentsHeader/>

            <UiContainer>
                <div>
                    <h1 className="title">Cadastre-se</h1>                    

                        <form onSubmit={onSubmit}>
                            <div className="form__group">
                                <label htmlFor="name">Nome</label>
                                <input id="name" name="name" type="text" label="Digite seu nome" onChange={onChange}/>
                            </div>

                            <div className="form__group">
                                <label htmlFor="cpf">CPF</label>
                                <input id="cpf" name="cpf" type="text" label="Digite seu cpf" onChange={onChange}/>
                            </div>

                            <div className="form__group">
                                <label htmlFor="address">Endereço</label>
                                <input id="address" name="address" type="text" label="Digite seu endereço" onChange={onChange}/>
                            </div>

                            <div className="form__group">
                                <label htmlFor="birthDate">Data de Nascimento</label>
                                <input id="birthDate" name="birthDate" type="text" label="Digite sua data de nascimento" onChange={onChange}/>
                            </div>

                            <div className="form__group">
                                <label htmlFor="email">E-mail</label>
                                <input id="email" name="email" type="text" label="Digite seu e-mail" onChange={onChange}/>
                            </div>

                            <div className="form__group">
                                <label htmlFor="password">Senha</label>
                                <input id="password" name="password" type="text" label="Digite sua senha" onChange={onChange}/>
                            </div>

                            <div className="form-button">
                                <div>
                                    <Button color="success" type="submit">Salvar</Button>
                                </div>
                                <form>
                                    <div>
                                        <Button color="ligth" type="submit">
                                            <Link to="/list" className="btn">Editar</Link>
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </form>                            
                </div>
            </UiContainer>

            <ComponentsFooter/>
        </div>
    )
}