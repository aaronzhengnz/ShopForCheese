import React from 'react';
import { StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoriesMealScreen from './screens/CategoriesMealScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import FiltersScreen from './screens/FiltersScreen';
import AppLoading from 'expo-app-loading';
import { useFonts, AkayaTelivigala_400Regular } from '@expo-google-fonts/akaya-telivigala';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    AkayaTelivigala_400Regular,
  });

  return fontsLoaded ? (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Categories Meals" component={CategoriesMealScreen} />
        <Stack.Screen name="Meal Details" component={MealDetailsScreen} />
        <Stack.Screen name="Favourites" component={FavouritesScreen} />
        <Stack.Screen name="Filters" component={FiltersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'AkayaTelivigala_400Regular',
    fontSize: 40,
  },
});