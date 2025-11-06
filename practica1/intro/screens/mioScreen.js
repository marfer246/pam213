"use client"

import { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export default function LoginScreen({ navigation }) {
  const [userName] = useState("Maria Fernanda")
  const [userInitials] = useState("MF")

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Iniciar sesión</Text>
        <TouchableOpacity>
          <Ionicons name="close" size={28} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Hola, {userName}</Text>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>{userInitials}</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("BiometricLogin")}>
            <Ionicons name="finger-print" size={24} color="#0061E0" />
            <Text style={styles.buttonText}>Entra con biometría</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PasswordLogin")}>
            <Ionicons name="key" size={24} color="#0061E0" />
            <Text style={styles.buttonText}>Entra con contraseña</Text>
          </TouchableOpacity>
        </View>

        {/* Texto adicional debajo de los botones */}
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a6db0ff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitulo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  greetingContainer: {
    alignItems: "center",
    marginTop: 60,
  },
  greetingText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#4BC7F3",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "600",
  },
  buttonContainer: {
    width: "100%",
    gap: 15,
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderRadius: 12,
    gap: 10,
  },
  buttonText: {
    color: "#0061E0",
    fontSize: 16,
    fontWeight: "600",
  },
  forgotPasswordText: {
    color: "#4BC7F3",
    fontSize: 14,
    fontWeight: "500",
    textDecorationLine: "underline",
    marginTop: 10,
  },
})