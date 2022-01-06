import React from "react";
import { ScrollView, Text, TouchableOpacity, Image, View } from "react-native";
import tw from "tailwind-react-native-classnames";

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <View style={tw`flex flex-row`}>
        <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
          <Image
            style={tw`w-48 h-48`}
            source={require("../assets/images/splash.png")}
          />
          <Text style={tw`text-center`}>Books</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={tw`w-48 h-48`}
            source={require("../assets/images/splash.png")}
          />
          <Text style={tw`text-center`}>Books</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex flex-row`}>
        <TouchableOpacity>
          <Image
            style={tw`w-48 h-48`}
            source={require("../assets/images/splash.png")}
          />
          <Text style={tw`text-center`}>Books</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={tw`w-48 h-48`}
            source={require("../assets/images/splash.png")}
          />
          <Text style={tw`text-center`}>Books</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
