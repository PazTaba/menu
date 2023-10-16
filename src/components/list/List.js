import React from 'react';
import {NavLink} from 'react-router-dom';
import './List.css';

function List() {


    return (
        <div className={"main-list"}>
            <div className={"list-pages"}>
                <ul>
                    <NavLink to={'/home'} className={"item"} > איזור אישי</NavLink>
                    <NavLink to={'/table'} className={"item"} >בחירת שולחנות</NavLink>
                    <NavLink to={'/menu'} className={"item"} >בחירת מנות</NavLink>
                </ul>
            </div>
        </div>

    );
}
export default List;