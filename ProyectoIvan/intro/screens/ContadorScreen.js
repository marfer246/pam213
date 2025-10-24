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

//styles dondtintas clases que asignamos 
  return ( //elememnto stiles en su contedor
    <View style={styles.container}> 

       <Text style={styles.Texto} > Contador: </Text> 
       <Text style={styles.Texto2} > {contador} </Text> 

      <View style = {styles.botonesContainer} > 

      <Button color="yellow" title="Agregar" onPress={()=>setContador(contador+1)} /> 
      <Button color="pink" title="Quitar" onPress={()=>setContador(contador-1)} />
      <Button color="red"  title="Reiniciar" onPress={()=>setContador(0)} />
      
      <StatusBar style="auto" /> 
      
    </View>
    </View> 
  );  
 }

const styles = StyleSheet.create({ //styles es un objeto
  container: { //la clase a la que corresponde
    flex: 1, //toma toda la pantalla 
    backgroundColor: '#6edf1eff',
    alignItems: 'center', //end, center en el eje x 
    justifyContent: 'center', //en el eje y
  },
    Texto:{
      color:"#32418dff",
      fontSize: 30,
      fontFamily:'Times' ,
      fontWeight: 'bold',
      fontStyle: 'italic',
      textDecorationLine: 'line-through',
  },
      Texto2:{
      color: "#da0c9dff",
      fontSize: 35,
      fontFamily:'courier' ,
      fontWeight: 100 , // 100 es el mas delgado 
      fontStyle: 'normal',
      textDecorationLine: 'underline',
  },
  botonesContainer: {
    marginTop: 15 ,
    flexDirection:'row',
    alignItems: 'start', //end, center en el eje x 
    justifyContent: 'center',
    gap: 20,
  },

});
