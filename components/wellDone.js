import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const wellDon = () => {
  return <View style={styles.container}>
      <Text>Well done</Text>
  </View>;
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#161491",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default wellDon;