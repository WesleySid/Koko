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

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homepage}>
        <Image source={require("../assets/logo.jpg")} style={styles.logoHome} />
        <Text style={styles.bienvenue}>Bienvenue !</Text>
        <Text style={styles.basicText}>
          Koko est une réplique d'une appli 100% indépendante qui vous aide à
          choisir les bons produits
        </Text>
        <TouchableHighlight
          style={styles.basicText}
          underlayColor="transparent"
          onPress={() => navigation.navigate("SecondScreen")}
        >
          <Text>Swipe vers la droite pour voir la deuxième page</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3BBD6F",
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
  basicText: { color: "white", padding: 10, marginBottom: 30 },
});
