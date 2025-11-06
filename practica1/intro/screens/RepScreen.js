import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  TextInput,
  Alert,
  ImageBackground,
  Animated,
  Switch,
} from 'react-native';

export default function RepScreen() {
  const [cargando, setCargando] = useState(true);
  const desvanecido = new Animated.Value(1);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [esEncendido, cambiarEncendido] = useState(false);

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
//`
  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(desvanecido, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start(() => setCargando(false));
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (cargando) {
    return (
      <Animated.View style={[styles.splashContainer, { opacity: desvanecido }]}>
        <ImageBackground
          source={require('../assets/Recursos/6.jpg')}
          resizeMode="contain"
          style={styles.splashImage}
        >
          <Text style={styles.splashText}>LOADING.........</Text>
        </ImageBackground>
      </Animated.View>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/Recursos/5.jpg')}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.textoContainer}>
        <Text style={styles.texto}>Registro de Usuario</Text>
        <TextInput
          placeholder="Nombre Completo"
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          placeholder="Correo Electrónico"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.terminos}>
          <Text style={{ color: 'white' }}>¿Acepta términos y condiciones?</Text>
          <Switch value={esEncendido} onValueChange={cambiarEncendido} />
        </View>
        <Button
          color="#151716ff"
          title="Registrarse"
          onPress={mostrarAlerta}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, //creesca oara ocupar todo el 
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',//  ancho
    height: '100%', // altura
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
    backgroundColor: 'rgba(81, 78, 78, 0.7)',
    padding: 20,// crea un espacio interno que se colorca entre el contenidpo y su borde 
  }, 
  input: {
    color: 'white',
    width: '100%',
    borderWidth: 2,
    borderColor: '#ffffffff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(143, 140, 140, 0.7)',
  },
  terminos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 30,
  },
  boton: {
    marginTop: 20,
  },
});