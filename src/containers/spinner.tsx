import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";

const fullscreenStyles = StyleSheet.create({
    container: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.5,
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
    },
});

const Spinner = (props: any) => {
    const requested = useSelector((state: RootState) => state.LoadingReducer.requested);
    return requested > 0 ? (
        <View style={props.style ? props.style : [fullscreenStyles.container]}>
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    ) : null;
};

export default Spinner;
