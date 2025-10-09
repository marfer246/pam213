// 1. imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, button } from 'react-native';
import { Button } from 'react-native-web';
//necesitamos agregar las librerias  *button*
import React, { useState } from 'react';

// 2. main: zona de componentes, principal 
export default function App() { 
const [contador,setContador]=useState(0); //destructurador []
//iniciamos que contador vale 0

  return (
    <View style={styles.container}>
      <Text> Contador: {contador}  </Text> 
      <Button title="Agregar" onPress={()=>setContador(contador+1)} /> {/* aqui button 
      y es una funcion flecha, onpress cambio en el estado */}


      <Button title="Quitar" onPress={()=>setContador(contador-1)} />
      <Button title="Reiniciar" onPress={()=>setContador(0)} />

      <StatusBar style="auto" /> {/*  */}
    </View> //componete, encerrando tiene que estar cerrado 
  ); //cuidar que este envuelto. 
}

// 3. Zona de los estilos: zona de estetica y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
