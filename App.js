import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mensaje from "./componentes/Mensaje";


export default function App() {
  return (
    <View style={styles.container}>
         <Mensaje/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
