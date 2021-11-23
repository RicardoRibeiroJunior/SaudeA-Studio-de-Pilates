import React from "react";
import 'rbx/index.css';

import ComponentsHeader from '../../Components/Header/Header';
import ComponentsFooter from '../../Components/Footer/Footer';
import UiContainer from '../../Components/UI/Container/Container';

import "./Register.css";
import { Button } from "rbx";

export default function Register(){
    return(
        <div>
            <ComponentsHeader/>

            <UiContainer>
                <div>
                    <h1 className="title">Cadastre-se</h1>

                    <form onSubmit="">
                        <div className="promotion-form__group">
                            <label htmlFor="title">Nome</label>
                            <input id="title" name="title" type="text" />
                        </div>
                        <div className="promotion-form__group">
                            <label htmlFor="url">CPF</label>
                            <input id="url" name="url" type="text" />
                        </div>
                        <div className="promotion-form__group">
                            <label htmlFor="imageUrl">Endereço</label>
                            <input id="imageUrl" name="imageUrl" type="text" />
                        </div>
                        <div className="promotion-form__group">
                            <label htmlFor="imageUrl">Data de Nascimento</label>
                            <input id="imageUrl" name="imageUrl" type="text" />
                        </div>
                        <div className="promotion-form__group">
                            <label htmlFor="imageUrl">E-mail</label>
                            <input id="imageUrl" name="imageUrl" type="text" />
                        </div>
                        <div className="promotion-form__group">
                            <label htmlFor="imageUrl">Senha</label>
                            <input id="imageUrl" name="imageUrl" type="text" />
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