import React, { useEffect } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import store from "./src/reducers/index";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import * as navigationRoot from "./src/navigation/NavigationRoot";
import Layout from "./src/layout";
import ConfigureAxios from "./src/utils/ConfigureAxios";

const App = () => {
    useEffect(() => {
        ConfigureAxios();
        return () => {};
    }, []);

    return (
        <Provider store={store}>
            <NavigationContainer
                ref={ref => (navigationRoot.navigationRef.current = ref)}
                onReady={() => {
                    navigationRoot.isReadyRef.current = true;
                }}>
                <Layout />
                <View />
                <Toast ref={(ref: any) => Toast.setRef(ref)} />
            </NavigationContainer>
        </Provider>
    );
};

export default App;
