import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AdviceHowToAndMiscellaneous from "../screens/categories/Advice How To and Miscellaneous";
import AudioFiction from "../screens/categories/Audio Fiction";
import AudioNonfiction from "../screens/categories/Audio Nonfiction";
import BusinessBooks from "../screens/categories/Business Books";
import Categories from "../screens/Categories";
import ChildrensMiddleGradeHardcover from "../screens/categories/Childrens Middle Grade Hardcover";
import CombinedPrintAndEBookFiction from "../screens/categories/Combined Print and E-Book Fiction";
import CombinedPrintAndEBookNonfiction from "../screens/categories/Combined Print and E-Book Nonfiction";
import HardcoverFiction from "../screens/categories/Hardcover Fiction";
import HardCoverNonfiction from "../screens/categories/Hardcover Nonfiction";
import Home from "../screens/Home";
import Intro from "../components/Intro";
import PaperbackNonfiction from "../screens/categories/Paperback Nonfiction";
import PictureBooks from "../screens/categories/Picture Books";
import Science from "../screens/categories/Science";
import SeriesBooks from "../screens/categories/Series Books";
import Sports from "../screens/categories/Sports";
import TradeFictionPaperback from "../screens/categories/Trade Fiction Paperback";
import YoungAdultHardcover from "../screens/categories/Young Adult Hardcover";

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
      <Stack.Screen name="Categories" component={Categories} />
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
