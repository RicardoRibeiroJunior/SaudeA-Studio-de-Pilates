import React from 'react';

import ComponentsHeader from '../../Components/Header/Header';
import ComponentsHome from '../../Components/Home/Home';
import ComponentsFooter from '../../Components/Footer/Footer';

export default function PagesHome(){
    return(
        <div>
            <ComponentsHeader/>
            <ComponentsHome/>
            <ComponentsFooter/>
        </div>
    )
}