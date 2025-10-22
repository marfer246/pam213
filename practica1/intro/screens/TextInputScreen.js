import React,{useState} from 'react';
  import { View, Text, TextInput, Button,Alert, StyleSheet, Platform } from 'react-native'; 

  export default function TextInputScreen(){
    const[nombre, setNombre]= useState('');
    const[contrasena,setContrasena] = useState('');
    const[multexto,setMultexto] = useState('');
const mostrarAlerta = () => {
  if (nombre.trim() === ''){
    if(Platform.OS === 'web'){
      alert('Por favor, escribe tu nombre antes de continuar.');
    }else {
      Alert.alert(
        'Atencion',
        'Por favor, escribe tu nombre antes de continuar',
        [
          {text: 'cancelar'},
          {text: 'aceptar'}
        ]
      );
    }
  }
  else{
    if (Platform.OS === 'web'){
      alert( ` Bienvenido, ${nombre}! `);
    }
    else{
      Alert.alert(  // `
        'Hola', ` Bienvenido, ${nombre}!` ,
        [
          {text: 'cancelar'},
          {text: 'aceptar'}
        ]
      );
    }
  }
};
   
return (
  <View style= {styles.container}> 
    <Text style= {styles.titulo}>Práctica: TextInput y Alert</Text>

    <TextInput
    style={styles.input}
    placeholder="Escribe tu nombre"
    value={nombre}
    onChangeText={setNombre}
    />

     <TextInput
    style={styles.input}
    placeholder="Contraseña"
    secureTextEntry={true}
    keyboardType='numeric'
    value={contrasena}
    onChangeText={setContrasena}
    />

     <TextInput
    style={styles.input}
    placeholder="Escribe tu nombre"
    value={multexto}
    multiline={true}
    onChangeText={setMultexto}
    />

    <Button title="Mostrar alerta" onPress={mostrarAlerta}/>
  </View>
);
}

const styles= StyleSheet.create({
container:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#afaff7ff',
  padding: 20,
},
titulo:{
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 15,
},
input:{
  borderWidth: 1,
  borderColor: '#000000ff',
  borderRadius: 5,
  width: '80%',
  padding: 10,
  marginBottom: 15,
},
});