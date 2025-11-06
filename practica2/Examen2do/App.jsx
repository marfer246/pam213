




















//import { StyleSheet, View, Button } from 'react-native';
//import React from 'react';

//export default function MenuScreen() {
//  return (
 //   <View style={styles.container}>
//      <Button
 //       title="Pract: TextInput"
 //       onPress={() => console.log('Botón presionado')}
 //       color="#2196F3" // Azul compatible
 //     />
 //   </View>
//  );
///}

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    padding: 20,
//  },
//});


















//import React, { useState } from 'react'; ///botones
//import { View, Button, Switch } from 'react-native';
//export default function MioScreen() {
  //const [activo, setActivo] = useState(false);

 // return (
  //  <View>
   //   <Switch
    //    value={activo}
     //   onValueChange={(nuevoValor) => {
     //     setActivo(nuevoValor);
     //     console.log('Switch cambiado', nuevoValor);
     //   }}
     // />
     // <Button
       // title="Presionar"
       // onPress={() => console.log('¡Botón presionado!')}
     // />
   // </View>
  //);
//}





















// Importa React y los hooks useState y useEffect para manejar estados y efectos
import React, { useState, useEffect } from 'react';

// Importa componentes visuales de React Native
import {
  Text,             // Para mostrar texto
  StyleSheet,       // Para definir estilos
  View,             // Contenedor tipo div
  Button,           // Botón nativo
  TextInput,        // Campo de texto
  Alert,            // Ventana emergente de alerta
  ImageBackground,  // Imagen como fondo
  Animated,         // Para animaciones
  Switch,           // Interruptor para aceptar términos
} from 'react-native';

// Define el componente principal llamado RepScreen
export default function RepScreen() {
  // Estado para mostrar pantalla de carga
  const [cargando, setCargando] = useState(true);

  // Valor animado para controlar opacidad del splash
  const desvanecido = new Animated.Value(1);

  // Estados para guardar nombre y correo
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  // Estado para saber si el switch está encendido
  const [esEncendido, cambiarEncendido] = useState(false);

  // Función que valida los campos y muestra alertas
  const mostrarAlerta = () => {
    if (nombre.trim() === '' && email.trim() === '') {
      Alert.alert('Error', 'Favor de llenar todos los campos');
    } else if (nombre.trim() === '') {
      Alert.alert('Error', 'Favor de llenar el campo de Nombre');
    } else if (email.trim() === '') {
      Alert.alert('Error', 'Favor de llenar el campo de Email');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Error', 'Ingrese un correo electrónico válido');
    } else if (!esEncendido) {
      Alert.alert('Error', 'Términos no aceptados');
    } else {
      Alert.alert(
        'Registro Exitoso',
        `Nombre: ${nombre}\nEmail: ${email}`
      );
    }
  };

  // Efecto que muestra splash por 2 segundos y luego lo desvanece
  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(desvanecido, {
        toValue: 0,           // Cambia opacidad a 0
        duration: 800,        // Duración de la animación
        useNativeDriver: true // Usa driver nativo para mejor rendimiento
      }).start(() => setCargando(false)); // Oculta splash al terminar
    }, 2000); // Espera 2 segundos

    return () => clearTimeout(timer); // Limpia el temporizador si se desmonta
  }, []);

  // Si está cargando, muestra pantalla de carga con animación
  if (cargando) {
    return (
      <Animated.View style={[styles.splashContainer, { opacity: desvanecido }]}>
        <ImageBackground
          source={require('../assets/Recursos/6.jpg')} // Imagen de fondo
          resizeMode="contain"
          style={styles.splashImage}
        >
          <Text style={styles.splashText}>LOADING.........</Text>
        </ImageBackground>
      </Animated.View>
    );
  }

  // Si ya cargó, muestra el formulario de registro
  return (
    <ImageBackground
      source={require('../assets/Recursos/5.jpg')} // Imagen de fondo principal
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.textoContainer}>
        <Text style={styles.texto}>Registro de Usuario</Text>

        {/* Campo para ingresar nombre */}
        <TextInput
          placeholder="Nombre Completo"
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />

        {/* Campo para ingresar correo */}
        <TextInput
          placeholder="Correo Electrónico"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        {/* Switch para aceptar términos */}
        <View style={styles.terminos}>
          <Text style={{ color: 'white' }}>¿Acepta términos y condiciones?</Text>
          <Switch value={esEncendido} onValueChange={cambiarEncendido} />
        </View>

        {/* Botón para registrar */}
        <Button
          color="#151716ff"
          title="Registrarse"
          onPress={mostrarAlerta}
        />
      </View>
    </ImageBackground>
  );
}

// Estilos para los componentes visuales
const styles = StyleSheet.create({
  background: {
    flex: 1, // Ocupa toda la pantalla
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center',     // Centra horizontalmente
    width: '100%',            // Ancho completo
    height: '100%',           // Alto completo
  },
  texto: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  splashImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    position: 'absolute',
    fontSize: 20,
    color: '#333',
  },
  textoContainer: {
    width: '80%',
    backgroundColor: 'rgba(81, 78, 78, 0.7)', // Fondo semitransparente
    padding: 20, // Espacio interno
  },
  input: {
    color: 'white',
    width: '100%',
    borderWidth: 2,
    borderColor: '#ffffffff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(143, 140, 140, 0.7)', // Fondo semitransparente
  },
  terminos: {
    flexDirection: 'row', // Elementos en fila
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 30,
  },
  boton: {
    marginTop: 20,
  },
});