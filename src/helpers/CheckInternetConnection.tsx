import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

const CheckInternetConnection = () => {
    return new Promise<boolean>((resolve, reject) => {
        let isConnected: any = false;
        NetInfo.fetch()
            .then((netInfoState: NetInfoState) => {
                console.log(netInfoState.isConnected);
                isConnected = netInfoState.isConnected;
                resolve(isConnected);
            })
            .catch(err => console.log(err));
    });
};

export default CheckInternetConnection;
