import React from 'react';
import { StyleSheet, View } from 'react-native';
import NavigationItem from './navigation-item';
import NavigationItemLarge from './navigation-item-large';
import { navBackground, shadowColor } from '../../resources/colors';

const MainNavigation = ({ state, descriptors, navigation }) => {
  const middleIndex = Math.floor(state.routes.length / 2);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          
          if (index == middleIndex) {
            return (
              <NavigationItemLarge
                key={'item-' + route.key}
                iconName={route.params.icon}
                onPress={onPress}
                onLongPress={onLongPress}
              />
            )
          } else {
            return (
              <NavigationItem
                key={'item-' + route.key} 
                title={label}
                isSelected={isFocused}
                iconName={route.params.icon}
                onPress={onPress}
                onLongPress={onLongPress}
              />
            );
          }
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: navBackground,
    borderTopLeftRadius: 36, 
    borderTopRightRadius: 36,
    bottom: 0,
    elevation: 19, 
    height: 90,
    position: 'absolute',
    shadowColor,
    shadowOffset: {
        width: 0,
        height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    width: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20
  },
});

export default MainNavigation;