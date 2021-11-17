import React from "react";
import { Content} from "rbx"; 
import 'rbx/index.css';

export default function Footer(){                             

    return(
        <footer class="hero is-info footer">
            <div class="hero-body">
                <footer>
                    <Content textAlign="centered">
                        <p>
                        <strong>Saúde A+</strong>.
                        © Copyright 2016. Studio de Pilates - Todos os direitos reservados.
                        </p>
                    </Content>
                </footer>
            </div>
        </footer>
    )
}