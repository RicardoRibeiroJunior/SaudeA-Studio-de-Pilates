import React from "react";
import { Navbar, Button } from "rbx";
import Logo from './imgs/logo.png'

export default function Header(){
    return(
        <header className="header">
            <Navbar>
                <Navbar.Brand>
                    <Navbar.Item href="#">
                    <img
                        src={Logo}
                        alt=""
                        role="presentation"
                        width="162"
                        height="162"
                    />
                    </Navbar.Item>
                    <Navbar.Burger />
                </Navbar.Brand>
                <Navbar.Menu>
                    <Navbar.Segment align="start">
                        <Navbar.Item>Inicio</Navbar.Item>
                        <Navbar.Item>Agende Sua Aula</Navbar.Item>
                        <Navbar.Item>Modalidades</Navbar.Item>
                        <Navbar.Item>Horários</Navbar.Item>             
                    </Navbar.Segment>

                    <Navbar.Segment align="end">
                    <Navbar.Item>
                        <Button.Group>
                        <Button color="info">
                            <strong>Cadastre-se</strong>
                        </Button>
                        <Button color="light">Entrar</Button>
                        </Button.Group>
                    </Navbar.Item>
                    </Navbar.Segment>
                </Navbar.Menu>
            </Navbar>
        </header>
    )
}