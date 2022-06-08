import { Dimensions, Platform, StyleSheet } from "react-native";
import StyleColors from "./colors.style";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const generalStyles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: StyleColors.white,
    },
    headerTitleStyle: {
        fontSize: 22,
        fontFamily: "Cairo-Regular",
    },
    headerStyle: {
        backgroundColor: StyleColors.white,
    },
    fullScreenCenter: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 5,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    emptyScreenView: {
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 5,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginTop: 65,
    },
    emptyPageTitle: {
        color: StyleColors.black,
        fontSize: 18,
        marginHorizontal: 30,
        marginTop: 30,
        textAlign: "center",
    },
    card: {
        borderRadius: 50,
        borderWidth: 0.5,
        backgroundColor: "lightgray",
        paddingHorizontal: 10,
        paddingVertical: 5,
        minWidth: "25%",
        marginHorizontal: 2,
        marginTop: 2,
    },
    textCard: {
        textAlign: "center",
        color: StyleColors.black,
    },
});

export default generalStyles;
