import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
 } from 'reactstrap'

export default function Header(props){

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    
    return(
            <div>
                <Navbar
                    color="warning"
                    expand="md"
                    fixed="top"
                    light
                >
                    <NavbarBrand href="/">
                    <p className="Font">Saúde A+</p>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="Modalidade.jsx">
                                Modalidades
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="Horario.jsx">
                                Horários
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="Professor.jsx">
                                Professores
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="Perfil.jsx">
                                Perfil
                            </NavLink>
                        </NavItem>                    
                    </Nav>
                    <NavbarText>
                        Login
                    </NavbarText>
                    </Collapse>
                </Navbar>
            </div>
    )
}