// Importamos las librerías necesarias de React y React Native
import React, { useState, useEffect } from 'react';
import { View, Button, Switch, TextInput, Alert, Platform, ImageBackground, ScrollView, Text, StyleSheet } from 'react-native';

// Definimos nuestro componente principal
export default function MioScreen() {
  // Estado para controlar si el Switch está activo o no
  const [activo, setActivo] = useState(false);
  
  // Estado para almacenar el texto ingresado en el TextInput
  const [texto, setTexto] = useState('');
  
  // Estado para controlar si mostramos la pantalla de Splash
  const [mostrarSplash, setMostrarSplash] = useState(true);

  // useEffect se ejecuta cuando el componente se monta
  useEffect(() => {
    // Creamos un temporizador que ocultará el Splash después de 2 segundos
    const timer = setTimeout(() => {
      setMostrarSplash(false); // Cambiamos el estado para ocultar el Splash
    }, 2000); 
    
    // Función de limpieza que se ejecuta cuando el componente se desmonta
    return () => clearTimeout(timer);
  }, []); // El array vacío [] significa que solo se ejecuta una vez al montar el componente

  // Si mostrarSplash es true, mostramos la pantalla de Splash
  if (mostrarSplash) {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Mi App</Text>
      </View>
    );
  }

  // Si no estamos en el Splash, mostramos la pantalla principal
  return (
    // ImageBackground nos permite poner una imagen de fondo
    <ImageBackground
      source={{ uri: 'https://via.placeholder.com/400' }} // URL de la imagen de fondo
      style={styles.background} // Estilos para el fondo
      resizeMode="cover" // Cómo se ajusta la imagen (cover = cubrir todo el espacio)
    >
      {/* ScrollView permite hacer scroll cuando el contenido es más grande que la pantalla */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* View principal que contiene todo el contenido */}
        <View style={styles.content}>
          {/* Texto título de la aplicación */}
          <Text style={styles.title}>Mi Componente</Text>
          
          {/* Contenedor para el Switch y su etiqueta */}
          <View style={styles.switchContainer}>
            {/* Texto que muestra el estado del Switch */}
            <Text>Switch: {activo ? 'ON' : 'OFF'}</Text>
            
            {/* Componente Switch para activar/desactivar */}
            <Switch
              value={activo} // Valor actual del Switch
              onValueChange={(nuevoValor) => {
                setActivo(nuevoValor); // Actualizamos el estado cuando cambia
                console.log('Switch cambiado', nuevoValor); // Log para debugging
              }}
            />
          </View>

          {/* Campo de texto para que el usuario ingrese datos */}
          <TextInput
            placeholder="Escribe aquí" // Texto placeholder
            value={texto} // Valor actual del TextInput
            onChangeText={setTexto} // Función que se ejecuta cuando el texto cambia
            style={styles.textInput} // Estilos del TextInput
          />

          {/* Botón que muestra el texto ingresado */}
          <Button
            title="Presionar" // Texto del botón
            onPress={() => {
              console.log('¡Botón presionado!'); // Log para debugging
              
              // Mostramos alerta según la plataforma
              if (Platform.OS === 'web') {
                alert('Texto ingresado: ' + texto); // Alert nativo del navegador
              } else {
                Alert.alert('Texto ingresado', texto); // Alert de React Native
              }
            }}
          />

          {/* Contenido adicional para demostrar el funcionamiento del ScrollView */}
          <View style={styles.extraContent}>
            <Text>Elemento 1 - ScrollView funciona</Text>
            <Text>Elemento 2 - Desliza hacia abajo</Text>
            <Text>Elemento 3 - Para ver más contenido</Text>
            <Text>Elemento 4 - Sigue deslizando</Text>
            <Text>Elemento 5 - Último elemento</Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

// Creamos los estilos para nuestro componente
const styles = StyleSheet.create({
  // Estilos para la pantalla de Splash
  splashContainer: {
    flex: 1, // Ocupa toda la pantalla
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
    backgroundColor: '#2196F3', // Color de fondo azul
  },
  
  // Estilos para el texto del Splash
  splashText: {
    fontSize: 24, // Tamaño de fuente grande
    color: 'white', // Color blanco
    fontWeight: 'bold', // Texto en negrita
  },
  
  // Estilos para el ImageBackground
  background: {
    flex: 1, // Ocupa toda la pantalla
  },
  
  // Estilos para el contenedor del ScrollView
  scrollContainer: {
    flexGrow: 1, // Permite que crezca según el contenido
    padding: 20, // Espaciado interno
  },
  
  // Estilos para el contenido principal
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo blanco semitransparente
    padding: 20, // Espaciado interno
    borderRadius: 10, // Bordes redondeados
  },
  
  // Estilos para el título
  title: {
    fontSize: 20, // Tamaño de fuente
    fontWeight: 'bold', // Negrita
    marginBottom: 20, // Espacio inferior
    textAlign: 'center', // Centrado
  },
  
  // Estilos para el contenedor del Switch
  switchContainer: {
    flexDirection: 'row', // Elementos en fila
    justifyContent: 'space-between', // Espacio entre elementos
    alignItems: 'center', // Centrado vertical
    marginBottom: 15, // Espacio inferior
  },
  
  // Estilos para el TextInput
  textInput: {
    borderWidth: 1, // Ancho del borde
    borderColor: '#ccc', // Color del borde (gris claro)
    borderRadius: 5, // Bordes redondeados
    padding: 10, // Espaciado interno
    marginBottom: 15, // Espacio inferior
  },
  
  // Estilos para el contenido adicional
  extraContent: {
    marginTop: 20, // Espacio superior
    alignItems: 'center', // Centrado horizontal
  },
});