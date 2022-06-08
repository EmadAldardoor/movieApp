import { useEffect, useState } from "react";
import ToastHelper from "../ToastHelper";
import useAxios from "axios-hooks";
import appJson from "../../../app.json";
import { PageSearchResult } from "../../models/PageSearchResult";
import { Movie } from "../../models/movie";

const GetMovie = (movieId: number) => {
    const [{ data: movieData, error }] = useAxios<Movie>(
        {
            url: `movie/${movieId}?api_key=${appJson.apiKey}`,
            method: "GET",
        },
        { manual: false, useCache: false }
    );

    useEffect(() => {
        if (error) {
            console.log("Error In callGetMovie");
        }
    }, [error]);
    return { movieData };
};

export default GetMovie;
