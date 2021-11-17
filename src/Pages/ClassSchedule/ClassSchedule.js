import React from "react";

import UiContainer from '../../Components/UI/Container/Container';
import ComponentsHeader from '../../Components/Header/Header';
import ComponentsClassSchedule from '../../Components/ClassSchedule/ClassSchedule';

export default function ClassSchedule(){
    return(
        <UiContainer>
            <ComponentsHeader/>
            <ComponentsClassSchedule/>
        </UiContainer>
    )
}