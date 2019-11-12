import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategaryListItem from './components/CategaryListItem';

export default function App() {
  return (
    <View style={styles.container}>
      <CategaryListItem  />
      <Text>aloo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"stretch",
    paddingRight:16,
    paddingLeft:16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
