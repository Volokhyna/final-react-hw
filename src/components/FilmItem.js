import React from "react";

export const FilmItem = (props) => {

    const {original_title, release_date, vote_average, vote_count, poster_path, movieGenresList} = props;

    return (
        <div className='filmItem'>
            <div>
                <img src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                     alt={`${original_title} poster`}/>
            </div>
            <div className='text'>
                <h2>{original_title}</h2>
                <h4>
                    {movieGenresList.map(({name, id}, i) => <span key={id}> {name} </span>)}
                </h4>
                <p> Rating: {vote_average} (total votes: {vote_count})</p>
                <span> Release date: {release_date}</span>
            </div>
        </div>
    );
}
