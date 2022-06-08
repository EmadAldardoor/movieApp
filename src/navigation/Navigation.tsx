import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MovieList from "../views/movie-list";
import StyleColors from "../../assets/ui/colors.style";
import generalStyles from "../../assets/ui/general.style";
import MovieDetails from "../views/movie-details";
const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <Stack.Navigator initialRouteName={"MovieList"}>
            <Stack.Screen
                name="MovieList"
                component={MovieList}
                options={{
                    headerTitle: "Movies",
                    headerTintColor: StyleColors.black,
                    headerTitleStyle: generalStyles.headerTitleStyle,
                    headerStyle: generalStyles.headerStyle,
                    headerTitleAlign: "left",
                    headerBackTitleVisible: false,
                }}
            />
            <Stack.Screen
                name="MovieDetails"
                component={MovieDetails}
                options={{
                    headerTitle: "",
                    headerTintColor: StyleColors.black,
                    headerTitleStyle: generalStyles.headerTitleStyle,
                    headerStyle: generalStyles.headerStyle,
                    headerBackTitleVisible: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default Navigator;
