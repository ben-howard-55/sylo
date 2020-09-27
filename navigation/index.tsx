import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
// import { ColorSchemeName } from "react-native";

import Tracker from "../screens/Tracker";
import TrackerToken from "../screens/TrackerToken";

const Stack = createStackNavigator();

interface props {
  colorScheme: any;
}

export default function Navigator({ colorScheme }: props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Tracker"
          component={Tracker}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TrackerToken"
          component={TrackerToken}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
