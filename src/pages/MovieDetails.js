import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {moviesService} from "../services";
import {toast} from "react-toastify";

export const MovieDetails = () => {

    const {id} = useParams();
    const [filmDetails, setFilmDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const getMovieDetails = async () => {
        try {
            setIsLoading(true);
            const data = await moviesService.getMovieDetailsById(id);
            setFilmDetails(data);
            toast.success('data loaded')
        } catch (e) {
            console.error(e);
            toast.error('error happened')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getMovieDetails();
    }, [])

    if ((isLoading && !filmDetails) || isLoading === null) {
        return <div className='loading'> Loading... </div>
    }

    return (
        <div>

            <h1> {filmDetails.original_title} </h1>
            <h2> {filmDetails.tagLine} </h2>
            <h3> {filmDetails.genres.map(el => <span key={el.id}> {el.name} </span>)} </h3>
            <p> {filmDetails.overview} </p>
        </div>
    )
}
