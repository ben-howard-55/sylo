import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Tracker from "../screens/Tracker";
import TrackerToken from "../screens/TrackerToken";

const Stack = createStackNavigator();

export default function Navigator() {
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
