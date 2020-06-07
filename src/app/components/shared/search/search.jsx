import React from "react";
import "./search.scss";
import img from './img/search.png';


export const Search = () => {
    return (
        <div className="ui-search">
            <input type="text" placeholder="Поиск по слову..."/>
            <img src={img} alt=""/>
        </div>
    );
}