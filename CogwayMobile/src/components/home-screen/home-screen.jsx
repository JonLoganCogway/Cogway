import React from 'react';
import { StyleSheet, View } from 'react-native';
import { backgroundColor } from '../../resources/colors';
import { CwText } from '../cw-text';

const HomeScreen = (props) => {
  const title = 'Home';

  return (
    <View style={styles.container}>
      <CwText>{title}</CwText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor,
    flex: 1,
  }
});

export default HomeScreen;