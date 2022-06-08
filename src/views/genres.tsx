import React from "react";
import { Text, View } from "react-native";
import generalStyles from "../../assets/ui/general.style";

interface IProps {
    genresIds?: number[];
    generes: any[];
}

const Geners = (props: IProps) => {
    const getGenere = (id: number) => {
        if (props.generes) {
            let current = props.generes.find((t: any) => t.id == id);
            return current ? current.name : "";
        }
        return "";
    };

    return (
        <View
            style={{
                flexDirection: "row",
                width: "100%",
                flexWrap: "wrap",
                alignItems: "flex-start",
                marginTop: 5,
            }}>
            {props.genresIds
                ? props.genresIds.map((id, index) => (
                      <View key={index} style={[generalStyles.card]}>
                          <Text style={[generalStyles.textCard]}>{getGenere(id)}</Text>
                      </View>
                  ))
                : props.generes.map((item, index) => (
                      <View key={index} style={[generalStyles.card]}>
                          <Text style={[generalStyles.textCard]}>{item.name}</Text>
                      </View>
                  ))}
        </View>
    );
};

export default Geners;
