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

export default function SecondScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homepage}>
        <Image
          source={require("../assets/junkfood.jpg")}
          style={styles.logoHome1}
        />
        <Text style={styles.bienvenue}>Analyse des produits</Text>
        <Text style={styles.basicText1}>
          Koko scanne vos produits et évalue leur impact sur
        </Text>
        <Text style={[styles.basicText, { textAlign: "center" }]}>
          la santé
        </Text>
        <TouchableHighlight
          style={styles.basicText}
          underlayColor="transparent"
          onPress={() => navigation.navigate("ThirdScreen")}
        >
          <Text>Swipe vers la droite pour voir la troisième page</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0845B",
    alignItems: "center",
    justifyContent: "center",
  },
  homepage: { alignItems: "center", paddingBottom: 20 },
  bienvenue: { margin: 10, fontWeight: "bold", fontSize: 30, color: "white" },
  logoHome1: {
    height: 150,
    width: 150,
    borderRadius: 50,
    borderWidth: 5,
  },
  basicText: { color: "white", padding: 10, marginBottom: 30 },
  basicText1: { color: "white" },
});
