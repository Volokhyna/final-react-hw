import React from "react";
import {FilmItem} from "./FilmItem";

export const FilmList = ({items, onFilmClick}) => {

    return (
        <div className='listWrapper'>
            {items.map(item => (
                <div
                    onClick={() => onFilmClick(item)}
                    className='itemWrapper'
                    key={item.id}>
                    <FilmItem {...item}/>
                </div>))}
        </div>
    );
}


