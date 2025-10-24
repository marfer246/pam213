//importaciones //hook useState 
import React, { useState } from 'react'; //biblioteca principal 
import { Text, StyleSheet, View, Button, ActivityIndicator } from 'react-native';
// Spinner de carga (LOADER)
// Exportamos la funcion indicador 
//exporta el compornete principal. Indicador nombre del componente
export default function Indicator() {
  
  // estos son los estados. mostrarContenido: Controla si mostrar el texto de confirmación

  const [cargando, setCargando] = useState(false);
  const [mostrarContenido, setMostrarContenido] = useState(false);
   
  // Función que maneja su funcionamiento
  //Aquí cambiamos el valor del estado con el set.  Comienza la simulación de carga
  const manejarCarga = () => {
    setCargando(true); //muestra el loader
    setMostrarContenido(false);

    setTimeout(() => {
      setCargando(false); // oculta el loader despues de 5s
      setMostrarContenido(true); // Muestra el mensaje de confirmación
    }, 5000); 
  };

  // View
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Practica: Activity Indicator</Text>
      
      <Button color='hsla(329, 92%, 66%, 1.00)' title="Acción" onPress={manejarCarga} />
      {/* Aquí se usa el componente Activity Indicator*/}
      {cargando && (
        <ActivityIndicator size="large" color='hsla(266, 92%, 66%, 1.00)' style={styles.indicador} />
      )}

      {mostrarContenido && (
        <Text style={styles.contenido}> Acción realizada  </Text>
      )}
    </View>
  );
}// propr como se activa y como desactiva, que se personalice incapie en sus props,modificar con el stylesheet

//Estilos
const styles = StyleSheet.create({
  contenedor: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  indicador: {
    marginVertical: 20,
  },
  contenido: {
    fontSize: 16,
    color: 'green',
    marginTop: 10,
  },
});