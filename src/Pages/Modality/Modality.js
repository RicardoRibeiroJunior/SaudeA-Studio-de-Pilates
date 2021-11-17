import React from "react";

import ComponentsModality from '../../Components/Modality/Modality';
import ComponentsHeader from '../../Components/Header/Header';
import UiContainer from '../../Components/UI/Container/Container';

export default function Modality(){
    return(
        <UiContainer>
            <ComponentsHeader/>
            <ComponentsModality/>
        </UiContainer>
    )
}