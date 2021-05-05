import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import MainNav from './src/components/navigation/main-navigation';
import Header from './src/components/header';
import HomeScreen from './src/components/home-screen/home-screen';
import OptionsScreen from './src/components/options/options';

export default function App() {
  return (
    
      <View style={styles.container}>
        <NavigationContainer>
          <Header />
          <Tab.Navigator tabBar={props => <MainNav {...props} />}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              initialParams={{icon: 'home'}}
            />
            <Tab.Screen
              name="My Books"
              component={OptionsScreen}
              initialParams={{icon: 'book-open'}}
            />
            <Tab.Screen
              name="Main"
              component={OptionsScreen}
              initialParams={{icon: 'account'}}
            />
            <Tab.Screen
              name="Library"
              component={OptionsScreen}
              initialParams={{icon: 'library'}}
            />
            <Tab.Screen
              name="Options"
              component={OptionsScreen}
              initialParams={{icon: 'cog'}}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
  );
}

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
