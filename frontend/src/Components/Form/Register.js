import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import 'rbx/index.css';

import ComponentsHeader from '../../Components/Header/Header';
import ComponentsFooter from '../../Components/Footer/Footer';
import UiContainer from '../../Components/UI/Container/Container';

import "./Register.css";
import { Button } from "rbx";

export default function Register(){

    const initialValue = {
        name:'',
        cpf:'',
        address:'',
        birthDate:'',
        email:'',
        password:'',
    }

    const [values, setValues] = useState(initialValue);
    const navigate = useNavigate();
    
    function onChange(ev) {
        const { name, value } = ev.target;
    
        setValues({ ...values, [name]: value });
    }
    
    function onSubmit(ev) {
        ev.preventDefault();
        
        axios.post('http://localhost:5000/user', values)
            .then((response) => {
                navigate('/')
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
                                <input id="name" name="name" type="text" label="Digite seu nome" onChange={onChange} value={values.name}/>
                            </div>

                            <div className="form__group">
                                <label htmlFor="cpf">CPF</label>
                                <input id="cpf" name="cpf" type="text" label="Digite seu cpf" onChange={onChange} value={values.cpf}/>
                            </div>

                            <div className="form__group">
                                <label htmlFor="address">Endereço</label>
                                <input id="address" name="address" type="text" label="Digite seu endereço" onChange={onChange} value={values.address}/>
                            </div>

                            <div className="form__group">
                                <label htmlFor="birthDate">Data de Nascimento</label>
                                <input id="birthDate" name="birthDate" type="text" label="Digite sua data de nascimento" onChange={onChange} value={values.birthDate}/>
                            </div>

                            <div className="form__group">
                                <label htmlFor="email">E-mail</label>
                                <input id="email" name="email" type="text" label="Digite seu e-mail" onChange={onChange} value={values.email}/>
                            </div>

                            <div className="form__group">
                                <label htmlFor="password">Senha</label>
                                <input id="password" name="password" type="text" label="Digite sua senha" onChange={onChange} value={values.password}/>
                            </div>

                            <div>
                                <Button color="success" type="submit">Salvar</Button>
                            </div>
                        </form>                            
                </div>
            </UiContainer>

            <ComponentsFooter/>
        </div>
    )
}