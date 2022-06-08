import React from "react";
import { Image, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import GetCredits from "../helpers/apis/GetCredits";
import appJson from "../../app.json";
import StyleColors from "../../assets/ui/colors.style";

interface IProps {
    movieId: number;
}

const Credits = (props: IProps) => {
    const { credits } = GetCredits(props.movieId);
    return (
        <ScrollView horizontal={true}>
            {credits && credits.cast
                ? credits.cast.map((item: any, index: number) => (
                      <View style={{ marginHorizontal: 5 }}>
                          <Image
                              style={{
                                  width: 70,
                                  height: 70,
                                  alignSelf: "center",
                                  marginTop: 10,
                                  borderRadius: 50,
                              }}
                              source={{ uri: `${appJson.imageUrl}${item.profile_path}` }}
                          />
                          <Text
                              style={{
                                  alignSelf: "center",
                                  marginTop: 10,
                                  color: StyleColors.black,
                                  fontWeight: "bold",
                                  fontSize: 12,
                              }}>
                              {item.name}
                          </Text>
                      </View>
                  ))
                : null}
        </ScrollView>
    );
};

export default Credits;
