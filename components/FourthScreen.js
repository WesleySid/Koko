import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function FourthScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homepage}>
        <Image
          source={require("../assets/koko-think.jpg")}
          style={styles.logoHome}
        />
        <Text style={styles.bienvenue}>Inscription !</Text>
        <Text style={styles.basicText}>
          Connecte toi pour pouvoir utiliser Koko
        </Text>
        <TouchableHighlight
          style={styles.btn}
          onPress={() => {
            navigation.navigate("LoginScreen");
            console.log("pressed !");
          }}
        >
          <Text style={styles.btnText}>Se connecter par email !</Text>
        </TouchableHighlight>
      </View>
      <TouchableHighlight
        style={styles.basicText}
        underlayColor="transparent"
        onPress={() => {
          navigation.navigate("SignupScreen");
          console.log("pressed");
        }}
      >
        <Text>Tu n'a pas encore de compte ? Inscris toi</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
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
});
