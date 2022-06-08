import { useEffect, useState } from "react";
import ToastHelper from "../ToastHelper";
import useAxios from "axios-hooks";
import appJson from "../../../app.json";
import { PageSearchResult } from "../../models/PageSearchResult";
import { Movie } from "../../models/movie";

const GetMovieList = (pageIndex: number, selectedList: string) => {
    const [{ error }, callGetMovieList] = useAxios<PageSearchResult<Movie>>(
        {
            url: `movie/${selectedList}?api_key=${appJson.apiKey}&page=${pageIndex}`,
            method: "GET",
        },
        { manual: true, useCache: false }
    );

    useEffect(() => {
        if (error) {
            console.log("Error In callGetMovieList");
        }
    }, [error]);
    return { callGetMovieList };
};

export default GetMovieList;
