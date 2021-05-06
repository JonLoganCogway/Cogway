import React from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types';
import {
  mainColor,
  mainColorLight,
  navSelectedIconColor,
  navBackground
} from '../../resources/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NavigationItemLarge = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.icon}>
          <TouchableHighlight
            style={styles.iconInner}
            underlayColor={mainColorLight}
            onPress={props.onPress}
            onLongPress={props.onLongPress}
          >
            <Icon
              name={props.iconName}
              size={68} 
              color={navSelectedIconColor}
            />
          </TouchableHighlight>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      display: 'flex',
      flexDirection: 'column',
  },
  icon: {
    backgroundColor: navBackground,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: 100,
    marginTop: -60,
    width: 100,
  },
  iconInner: {
    alignItems: 'center',
    backgroundColor: mainColor,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    height: 90,
    justifyContent: 'center',
    marginLeft: 5,
    marginTop: 5,
    width: 90
  }
});

NavigationItemLarge.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func
}

export default NavigationItemLarge;