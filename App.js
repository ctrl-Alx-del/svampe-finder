import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home.jsx";
import BibliotekScreen from "./screens/Bibliotek.jsx";
import SvampearterScreen from "./screens/Svampearter.jsx";
import MapsScreen from "./screens/Maps.jsx";
import SvampeInfo from "./screens/SvampeInfo.jsx";
import { ItemProvider } from "./components/Context.jsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ItemProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Bibliotek" component={BibliotekScreen} />
          <Stack.Screen name="Maps" component={MapsScreen} />
          <Stack.Screen name="Svampearter" component={SvampearterScreen} />
          <Stack.Screen name="SvampeInfo" component={SvampeInfo} />
        </Stack.Navigator>
      </NavigationContainer>
    </ItemProvider>
  );
}
