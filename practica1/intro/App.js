// 1. imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, button } from 'react-native';
import ContadorScreen from './screens/ContadorScreen';


// 2. main: zona de componentes, principal 
export default function App() { 

  return (
 <ContadorScreen ></ContadorScreen>
  );
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
