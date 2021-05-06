import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { backgroundColor, textColor } from '../../resources/colors';

const OptionsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Options</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor
  }
});

export default OptionsScreen;