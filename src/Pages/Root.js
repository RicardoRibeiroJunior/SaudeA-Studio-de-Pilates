import React from "react";
import{
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import PagesHome from './Home/Home';
import PagesModality from './Modality/Modality';
import PagesClassSchedule from './ClassSchedule/ClassSchedule';
import PagesSchedule from './Schedule/Schedule';

export default function Root(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<PagesHome/>}/>
                <Route path="/class-schedule" element={<PagesClassSchedule/>}/>
                <Route path="/modality" element={<PagesModality/>}/>
                <Route path="/schedule" element={<PagesSchedule/>}/>
            </Routes>
        </Router>
    )
}