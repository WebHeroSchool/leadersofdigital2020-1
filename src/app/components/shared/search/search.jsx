import React from "react";
import "./search.scss";
import img from './img/search.png';


export const Search = () => {
    return (
        <div className="ui-search">
             <img src={img} alt="search" className="ui-search"/>
            <input  className="search" type="text" placeholder="Поиск по слову..."/>
        </div>
    );
}