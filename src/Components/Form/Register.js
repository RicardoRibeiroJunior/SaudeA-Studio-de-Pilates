import React from "react";
import 'rbx/index.css';

import ComponentsHeader from '../../Components/Header/Header';
import ComponentsFooter from '../../Components/Footer/Footer';
import UiContainer from '../../Components/UI/Container/Container';

import "./Register.css";
import { Button } from "rbx";

import {useFormik} from 'formik';
import * as yup from 'yup';

export default function Register(){

    const formik = useFormik({
        initialValues:{
            name:'',
            address:'',
            birthDate:'',
            email:'',
            password:'',
        },

        validationSchema:yup.object({
            name:yup.string().required("O campo é obrigatório."),
            cpf:yup.string().required("O campo é obrigatório."),
            address:yup.string().required("O campo é obrigatório."),
            birthDate:yup.string().required("O campo é obrigatório."),
            email:yup.string().required("O campo é obrigatório."),
            password:yup.string().required("O campo é obrigatório."),
        }),
    
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return(
        <div>
            <ComponentsHeader/>

            <UiContainer>
                <div>
                    <h1 className="title">Cadastre-se</h1>

                    <form onSubmit={formik.handleSubmit}>
                        <div className="form__group">
                            <label htmlFor="name">Nome</label>
                            <input id="name" name="name" type="text" label="Digite seu nome" onChange={formik.handleChange} value={formik.values.name}/>
                        </div>

                        {formik.touched.name && formik.errors.name ? (
                        <   div className="mensagem">{formik.errors.name}</div>
                        ) : null}

                        <div className="form__group">
                            <label htmlFor="cpf">CPF</label>
                            <input id="cpf" name="cpf" type="text" label="Digite seu cpf" onChange={formik.handleChange} value={formik.values.cpf}/>
                        </div>

                        {formik.touched.cpf && formik.errors.cpf ? (
                            <div className="mensagem">{formik.errors.cpf}</div>
                         ) : null}

                        <div className="form__group">
                            <label htmlFor="address">Endereço</label>
                            <input id="address" name="address" type="text" label="Digite seu endereço" onChange={formik.handleChange} value={formik.values.address}/>
                        </div>

                        {formik.touched.address && formik.errors.address ? (
                            <div className="mensagem">{formik.errors.address}</div>
                        ) : null}

                        <div className="form__group">
                            <label htmlFor="birthDate">Data de Nascimento</label>
                            <input id="birthDate" name="birthDate" type="text" label="Digite sua data de nascimento" onChange={formik.handleChange} value={formik.values.birthDate}/>
                        </div>

                        {formik.touched.birthDate && formik.errors.birthDate ? (
                            <div className="mensagem">{formik.errors.birthDate}</div>
                        ) : null}

                        <div className="form__group">
                            <label htmlFor="email">E-mail</label>
                            <input id="email" name="email" type="text" label="Digite seu e-mail" onChange={formik.handleChange} value={formik.values.email}/>
                        </div>

                        {formik.touched.email && formik.errors.email ? (
                            <div className="mensagem">{formik.errors.email}</div>
                        ) : null}

                        <div className="form__group">
                            <label htmlFor="password">Senha</label>
                            <input id="password" name="password" type="text" label="Digite sua senha" onChange={formik.handleChange} value={formik.values.password}/>
                        </div>

                        {formik.touched.password && formik.errors.password ? (
                            <div className="mensagem">{formik.errors.password}</div>
                        ) : null}

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