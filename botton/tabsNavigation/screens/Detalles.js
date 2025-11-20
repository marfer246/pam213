import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Detalles({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Text style={styles.title}>Detalles Usuario{"\n"}Usando Navegacion Stack</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconRow: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 22,
   // fontWeight: 'bold',
    marginTop: 10,
    color: '#798ee9ff',
    textAlign: 'center',
  },
  detailsContainer: {
    backgroundColor: '#F8F9FA',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    width: '100%',
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonBack: {
    backgroundColor: '#6F42C1',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});