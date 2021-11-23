import React from "react";

import ComponentsHeader from '../../Components/Header/Header';
import ComponentsFooter from '../../Components/Footer/Footer';
import { Button } from "rbx";

import "./Login.css";

export default function Login(){
    return(
        <div>
            <ComponentsHeader/>

            <section className="containerLogin">
                <form>
                    <div className="form__group">
                        <label htmlFor="user">Usuário</label>
                        <input id="user" name="user" type="text"/>
                    </div>
                    <div className="form__group">
                        <label htmlFor="password">Senha</label>
                        <input id="password" name="password" type="password"/>
                    </div>
                    <div>
                        <Button color="success" type="submit">Entrar</Button>
                    </div>
                </form>
            </section>

            <ComponentsFooter/>
        </div>
    )
}