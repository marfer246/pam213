import { StyleSheet, View, Button } from 'react-native';
import React from 'react';

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Button
        title="Pract: TextInput"
        onPress={() => console.log('Botón presionado')}
        color="#2196F3" // Azul compatible
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});