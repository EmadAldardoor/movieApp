import React, { useEffect } from "react";
import { View, LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import generalStyles from "../assets/ui/general.style";
import Spinner from "./containers/spinner";
import Navigator from "./navigation/Navigation";

const Layout = () => {
    useEffect(() => {
        try {
            LogBox.ignoreAllLogs();
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <View style={generalStyles.body}>
            <SafeAreaProvider>
                <Navigator />
            </SafeAreaProvider>
            <Spinner />
        </View>
    );
};

export default Layout;
