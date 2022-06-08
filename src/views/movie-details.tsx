import React from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import generalStyles from "../../assets/ui/general.style";
import GetMovie from "../helpers/apis/GetMovie";
import appJson from "../../app.json";
import StyleColors from "../../assets/ui/colors.style";
import Geners from "./genres";
import Credits from "./credits";

const MovieDetails = ({ route }: any) => {
    const { movieData } = GetMovie(route.params.id);
    return (
        <ScrollView style={[generalStyles.body, { paddingLeft: 10, paddingBottom: 20 }]}>
            <View style={{ width: "100%" }}>
                <Image
                    style={{ width: "35%", height: 200, alignSelf: "center", marginTop: 40, borderRadius: 10 }}
                    source={{ uri: `${appJson.imageUrl}${movieData?.poster_path}` }}
                />
                <Text
                    style={{
                        fontWeight: "bold",
                        color: StyleColors.black,
                        alignSelf: "center",
                        marginTop: 20,
                        fontSize: 25,
                    }}>
                    {movieData?.title}
                </Text>
                <Text
                    style={{
                        alignSelf: "center",
                        marginTop: 10,
                        color: StyleColors.primaryColor,
                        fontWeight: "bold",
                        fontSize: 20,
                    }}>
                    {movieData ? movieData?.vote_average * 10 : 0}%
                </Text>
                <Text
                    style={{
                        fontWeight: "bold",
                        color: StyleColors.black,
                        paddingHorizontal: 20,
                        fontSize: 15,
                        marginTop: 10,
                    }}>
                    Overview
                </Text>
                <Text
                    style={{
                        paddingHorizontal: 20,
                        fontSize: 12,
                    }}>
                    {movieData?.overview}
                </Text>
                <Text
                    style={{
                        fontWeight: "bold",
                        color: StyleColors.black,
                        paddingHorizontal: 20,
                        fontSize: 15,
                        marginTop: 10,
                    }}>
                    Genres
                </Text>
                <View
                    style={{
                        paddingHorizontal: 20,
                    }}>
                    <Geners generes={movieData?.genres ? movieData?.genres : []} />
                </View>
                <Text
                    style={{
                        fontWeight: "bold",
                        color: StyleColors.black,
                        paddingHorizontal: 20,
                        fontSize: 15,
                        marginTop: 10,
                    }}>
                    Credits
                </Text>
                <View
                    style={{
                        paddingHorizontal: 20,
                    }}>
                    <Credits movieId={route.params.id} />
                </View>
            </View>
        </ScrollView>
    );
};

export default MovieDetails;
