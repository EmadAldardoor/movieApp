export class Movie {
    id: number = 0;
    title: string = "";
    vote_average: number = 0;
    overview: string = "";
    poster_path: string = "";
    release_date: string = "";
    genre_ids: number[] = [];
    genres: Genres[] = [];
}

export class Genres {
    id: number = 0;
    name: string = "";
}
