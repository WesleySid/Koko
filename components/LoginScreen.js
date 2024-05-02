import React, { useState, useEffect } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Cookies from "js-cookie";

function Login({ onLogin }) {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });

      if (response.status === 200) {
        console.log("Authentification réussie !");
        Cookies.set("token", response.data.token, { expires: 7 });
        onLogin(); // Appeler la fonction de mise à jour de l'état parent
      }
    } catch (error) {
      console.error("Erreur d'authentification :", error);
      setError(
        "L'authentification a échoué. Veuillez vérifier vos informations d'identification."
      );
    }
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username :</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre username"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mot de passe :</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre mot de passe"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
        </View>
        {error !== "" && <Text style={styles.error}>{error}</Text>}
        <TouchableHighlight
          style={styles.button}
          underlayColor="#4CAF50"
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Connecte toi</Text>
        </TouchableHighlight>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 300,
  },
  homepage: { alignItems: "center", paddingBottom: 20 },
  bienvenue: { margin: 10, fontWeight: "bold", fontSize: 30, color: "white" },
  logoHome: {
    height: 150,
    width: 150,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "#5CA276",
  },
  basicText: {
    color: "#6BB788",
    padding: 10,
    marginBottom: 30,
    fontSize: 20,
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#327C57",
    marginTop: 100,
    height: 50,
    width: 300,
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
  },
  btnText: { color: "white", fontSize: 18 },

  error: { color: "white", fontSize: 18 },
});

export default Login;
