import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AdviceHowToAndMiscellaneous from "../screens/Advice How To and Miscellaneous";
import AudioFiction from "../screens/Audio Fiction";
import AudioNonfiction from "../screens/Audio Nonfiction";
import BusinessBooks from "../screens/Business Books";
import ChildrensMiddleGradeHardcover from "../screens/Childrens Middle Grade Hardcover";
import CombinedPrintAndEBookFiction from "../screens/Combined Print and E-book Fiction";
import CombinedPrintAndEBookNonfiction from "../screens/Combined Print and E-Book Nonfiction";
import HardcoverFiction from "../screens/Hardcover Fiction";
import HardCoverNonfiction from "../screens/Hardcover Nonfiction";
import Home from "../screens/Home";
import Intro from "../components/Intro";
import PaperbackNonfiction from "../screens/Paperback Nonfiction";
import PictureBooks from "../screens/Picture Books";
import Science from "../screens/Science";
import SeriesBooks from "../screens/Series Books";
import Sports from "../screens/Sports";
import TradeFictionPaperback from "../screens/Trade Fiction Paperback";
import YoungAdultHardcover from "../screens/Young Adult Hardcover";

export default function Routes() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="intro" component={Intro} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Advice How-To and Miscellaneous"
        component={AdviceHowToAndMiscellaneous}
      />
      <Stack.Screen name="Audio Fiction" component={AudioFiction} />
      <Stack.Screen name="Audio Nonfiction" component={AudioNonfiction} />
      <Stack.Screen name="Business Books" component={BusinessBooks} />
      <Stack.Screen
        name="Childrens Middle Grade Hardcover"
        component={ChildrensMiddleGradeHardcover}
      />
      <Stack.Screen
        name="Combined Print and E-Book Fiction"
        component={CombinedPrintAndEBookFiction}
      />
      <Stack.Screen
        name="Combined Print and E-Book Nonfiction"
        component={CombinedPrintAndEBookNonfiction}
      />
      <Stack.Screen name="Hardcover Fiction" component={HardcoverFiction} />
      <Stack.Screen
        name="Hardcover Nonfiction"
        component={HardCoverNonfiction}
      />
      <Stack.Screen
        name="Paperback Nonfiction"
        component={PaperbackNonfiction}
      />
      <Stack.Screen name="Picture Books" component={PictureBooks} />
      <Stack.Screen name="Science" component={Science} />
      <Stack.Screen name="Series Books" component={SeriesBooks} />
      <Stack.Screen name="Sports" component={Sports} />
      <Stack.Screen
        name="Trade Fiction Paperback"
        component={TradeFictionPaperback}
      />
      <Stack.Screen
        name="Young Adult Hardcover"
        component={YoungAdultHardcover}
      />
    </Stack.Navigator>
  );
}
