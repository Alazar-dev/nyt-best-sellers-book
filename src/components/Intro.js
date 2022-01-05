import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";

import AppIntroSlider from "react-native-app-intro-slider";

export default function Intro(props) {
  const onDone = () => {
    props.navigation.navigate("Home");
  };

  const RenderItem = ({ item }) => {
    return (
      <View style={tw`flex flex-1 justify-center items-center`}>
        <StatusBar backgroundColor="#F9FAFA" barStyle="dark-content" />
        <Image
          style={{
            width: "50%",
            height: 100,
            resizeMode: "contain",
            margin: 30,
          }}
          source={item.image}
        />
        <Text style={tw`text-3xl text-green-500 font-bold`}>{item.title}</Text>
        <Text style={tw`text-sm text-gray-500 text-center p-8`}>
          {item.text}
        </Text>
      </View>
    );
  };

  return (
    <>
      <AppIntroSlider
        data={slides}
        renderItem={RenderItem}
        renderNextButton={() => (
          <View style={tw`flex flex-row justify-end px-8`}>
            <Ionicons color="black" size={18}>
              Next
            </Ionicons>
          </View>
        )}
        renderDoneButton={() => (
          <View
            style={tw`flex flex-row  bg-green-500 justify-center py-2 rounded-3xl`}
          >
            <Ionicons color="rgba(255, 255, 255, .9)" size={24}>
              Done
            </Ionicons>
          </View>
        )}
        onDone={onDone}
        bottomButton={true}
        activeDotStyle={{ backgroundColor: "#2baab2" }}
      />
    </>
  );
}

const slides = [
  {
    key: "s1",
    text: "Read NewYourk Times' best Selling books from anywhere. They are available to read, review or to see people's review",
    title: "Lives over rides",
    image: require("../assets/images/splash.jpeg"),
  },
  {
    key: "s2",
    title: "Fast",
    text: "Read NewYourk Times' best Selling books from anywhere. They are available to read, review or to see people's review",
    image: require("../assets/images/splash.jpeg"),
    backgroundColor: "#febe29",
  },
  {
    key: "s3",
    title: "Reliable",
    text: "Read NewYourk Times' best Selling books from anywhere. They are available to read, review or to see people's review",
    image: require("../assets/images/splash.jpeg"),
    backgroundColor: "#22bcb5",
  },
  {
    key: "s4",
    title: "Up to date",
    text: "Read NewYourk Times' best Selling books from anywhere. They are available to read, review or to see people's review",
    image: require("../assets/images/splash.jpeg"),
    backgroundColor: "#3395ff",
  },
];
