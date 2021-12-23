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
import PagesFormLogin from './Form/Login';
import PagesFormRegister from './Form/Register';
import PagesUserList from './UsersList/PagesUsersList';
import UserCard from "../Components/Card/UserCard";


export default function Root(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<PagesHome/>}/>
                <Route path="/class-schedule" element={<PagesClassSchedule/>}/>
                <Route path="/modality" element={<PagesModality/>}/>
                <Route path="/schedule" element={<PagesSchedule/>}/>
                <Route path="/form-login" element={<PagesFormLogin/>}/>
                <Route path="/form-register" element={<PagesFormRegister/>}/>
                <Route path="/edit/:id" element={<PagesFormRegister/>}/>
                <Route path="/delete/:id" element={<UserCard/>}/>
                <Route path="/list" element={<PagesUserList/>}/>
            </Routes>
        </Router>
    )
}