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

export default function ThirdScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homepage}>
        <Image
          source={require("../assets/bad-food-good.jpg")}
          style={styles.logoHome}
        />
        <Text style={styles.bienvenue}>Recommandations !</Text>
        <Text style={styles.basicText}>
          Koko vous recommande de meilleures alternatives
        </Text>
        <TouchableHighlight
          style={styles.btn}
          underlayColor="white"
          onPress={() => {
            navigation.navigate("FourthScreen");
            console.log("pressed !");
          }}
        >
          <Text style={styles.btnText}>C'est parti !</Text>
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
