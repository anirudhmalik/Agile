import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screen/WelcomeScreen";
import SearchFeed from "../screen/SearchFeed";

const Stack = createStackNavigator();
const AppNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="search"
      component={SearchFeed}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AppNavigation;
