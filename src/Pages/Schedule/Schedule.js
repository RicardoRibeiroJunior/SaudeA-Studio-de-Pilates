import React from "react";

import ComponentsHeader from '../../Components/Header/Header';
import ComponentsSchedule from '../../Components/Schedule/Schedule';
import UiContainer from '../../Components/UI/Container/Container';

export default function Schedule(){
    return(
        <UiContainer>
            <ComponentsHeader/>
            <ComponentsSchedule/>
        </UiContainer>
    )
}