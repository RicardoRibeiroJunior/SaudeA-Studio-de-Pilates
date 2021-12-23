import React from "react";
import { useParams } from "react-router";
import FormRegister from '../../Components/Form/Register';

export default function Register(){

    const {id} = useParams();

    return(
        <FormRegister id={id ? Number.parseInt(id, 10) : null}/>
    )
}