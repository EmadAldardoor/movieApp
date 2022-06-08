import { useEffect, useState } from "react";
import ToastHelper from "../ToastHelper";
import useAxios from "axios-hooks";
import appJson from "../../../app.json";

const GetGeneres = () => {
    const [{ data: generes, error }, callGetGeneres] = useAxios(
        {
            url: `genre/movie/list?api_key=${appJson.apiKey}`,
            method: "GET",
        },
        { manual: false }
    );

    useEffect(() => {
        if (error) {
            console.log("Error In callGetGeneres");
        }
    }, [error]);
    return { generes, callGetGeneres };
};

export default GetGeneres;
