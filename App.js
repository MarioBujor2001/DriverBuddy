import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer, StackActions, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home/Home';
import Settings from './components/Settings/Settings';
import MonthTotal from './components/MonthTotal/MonthTotal';
const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    card: 'white'
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false, headerStyle: { borderBottomWidth: 0 } }} />
        <Stack.Screen name="Settings" component={Settings} options={{ headerShadowVisible: false }} />
        <Stack.Screen name="MonthTotal" component={MonthTotal} options={{ headerShadowVisible: false }} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
