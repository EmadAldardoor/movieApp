import React, { useEffect, useRef, useState } from "react";
import { FlatList, RefreshControl, Text, View, TouchableOpacity, Image } from "react-native";
import StyleColors from "../../assets/ui/colors.style";
import generalStyles from "../../assets/ui/general.style";
import GetMovieList from "../helpers/apis/GetMoviesList";
import { Movie } from "../models/movie";
import moment from "moment";
import { PageSearchResult } from "../models/PageSearchResult";
import Geners from "./genres";
import appJson from "../../app.json";
import GetGeneres from "../helpers/apis/GetGenres";
import { useNavigation } from "@react-navigation/native";
const enum listType {
    upcoming = "upcoming",
    popular = "popular",
    topRated = "top_rated",
}

const MovieList = () => {
    const [pageIndex, setPageIndex] = useState(1);
    const [selectedList, setSelectedList] = useState(listType.upcoming.toString());
    const { callGetMovieList } = GetMovieList(pageIndex, selectedList);
    const [movies, setMovies] = useState<Movie[]>([]);
    const [scrollingEnabled, setScrollingEnabled] = useState<boolean>(true);
    const numberOfTotalPages = useRef(0);
    const [refreshing, setRefreshing] = useState(false);
    const { generes } = GetGeneres();
    const navigation: any = useNavigation();

    useEffect(() => {
        callGetMovieFunction();
    }, [pageIndex]);

    useEffect(() => {
        setMovies([]);
        if (pageIndex == 1) {
            callGetMovieFunction();
        } else {
            setPageIndex(1);
        }
    }, [selectedList]);

    const handleEndReached = () => {
        if (scrollingEnabled && pageIndex < numberOfTotalPages.current) {
            setPageIndex(pageIndex + 1);
        }
    };

    const callGetMovieFunction = () => {
        setScrollingEnabled(false);
        callGetMovieList().then(res => {
            if (res.data) {
                afterGetMovies(res.data);
            }
        });
    };

    const afterGetMovies = (result: PageSearchResult<Movie>) => {
        numberOfTotalPages.current = result.total_pages;
        if (pageIndex == 1) {
            setMovies(result.results);
        } else {
            setMovies([...movies, ...result.results]);
        }
        setScrollingEnabled(true);
    };

    const movieItem = (item: Movie) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("MovieDetails", { id: item.id });
                }}
                style={{
                    flex: 1,
                    flexDirection: "row",
                    borderStyle: "solid",
                    borderColor: "lightgray",
                    borderWidth: 0.5,
                    marginHorizontal: 20,
                    marginVertical: 10,
                    borderRadius: 10,
                }}>
                <View style={{ flex: 1 }}>
                    <Image
                        style={{ width: "80%", height: "80%", alignSelf: "center", marginTop: 10 }}
                        source={{ uri: `${appJson.imageUrl}${item.poster_path}` }}
                    />
                </View>
                <View style={{ flex: 2, padding: 10 }}>
                    <Text style={{ fontWeight: "bold", color: StyleColors.black }}>{item.title}</Text>
                    <Text style={{ fontSize: 10 }}>
                        {moment(new Date(item.release_date).toString()).format("MMMM DD YYYY")}
                    </Text>
                    <View>
                        <Geners generes={generes && generes.genres ? generes.genres : []} genresIds={item.genre_ids} />
                    </View>
                    <Text
                        style={{
                            textAlign: "right",
                            marginTop: 10,
                            color: StyleColors.primaryColor,
                            fontWeight: "bold",
                        }}>
                        {item.vote_average * 10}%
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    const getStyle = (key: string) => {
        return [
            generalStyles.card,
            {
                backgroundColor: selectedList === key ? StyleColors.primaryColor : StyleColors.lightgray,
            },
        ];
    };

    const listTypeComponent = (text: string, key: string) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    setSelectedList(key);
                }}
                style={getStyle(key)}>
                <Text
                    style={[
                        generalStyles.textCard,
                        {
                            color: selectedList === key ? StyleColors.white : StyleColors.black,
                        },
                    ]}>
                    {text}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={[generalStyles.body]}>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 10,
                    alignSelf: "center",
                }}>
                {listTypeComponent("Upcoming", listType.upcoming)}
                {listTypeComponent("Popular", listType.popular)}
                {listTypeComponent("Top Rated", listType.topRated)}
            </View>
            <View>
                <FlatList
                    data={movies}
                    renderItem={({ item }: { item: Movie }) => movieItem(item)}
                    keyExtractor={(item, index) => `${item.id}_${index}`}
                    onEndReached={handleEndReached}
                    onEndReachedThreshold={0.4}
                    ListFooterComponent={null}
                    ListFooterComponentStyle={{ padding: 20 }}
                    ListEmptyComponent={
                        <View style={generalStyles.fullScreenCenter}>
                            <Text style={generalStyles.emptyPageTitle}>There is no movies</Text>
                        </View>
                    }
                    style={{ marginTop: 15 }}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={() => {
                                setMovies([]);
                                if (pageIndex != 1) {
                                    setPageIndex(1);
                                } else {
                                    callGetMovieFunction();
                                }
                            }}
                            colors={[StyleColors.primaryColor]}
                        />
                    }
                />
            </View>
        </View>
    );
};

export default MovieList;
