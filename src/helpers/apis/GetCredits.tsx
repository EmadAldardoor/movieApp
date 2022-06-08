import { useEffect, useState } from "react";
import ToastHelper from "../ToastHelper";
import useAxios from "axios-hooks";
import appJson from "../../../app.json";
import { PageSearchResult } from "../../models/PageSearchResult";
import { Movie } from "../../models/movie";

const GetCredits = (movieId: number) => {
    const [{ data: credits, error }] = useAxios(
        {
            url: `movie/${movieId}/credits?api_key=${appJson.apiKey}`,
            method: "GET",
        },
        { manual: false, useCache: false }
    );

    useEffect(() => {
        if (error) {
            console.log("Error In callGetMovie");
        }
    }, [error]);
    return { credits };
};

export default GetCredits;
