import { ALERT_TYPE, Dialog, Root, Toast } from "react-native-alert-notification";

const ToastHelper = {
    showToastError: (message: string) => {
        Dialog.show({
            type: ALERT_TYPE.WARNING,
            textBody: message,
            button: "close",
        });
    },
    showToastSucess: (message: string) => {
        Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            textBody: message,
            button: "OK",
            autoClose: 1000,
        });
    },
};

export default ToastHelper;
