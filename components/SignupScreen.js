import { useState } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

function SignupScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
      // Rediriger l'utilisateur vers la page de connexion après l'inscription
      navigation.navigate("LoginScreen");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <KeyboardAwareScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          marginTop: 200,
        }}
      >
        <Text>Email :</Text>
        <TextInput
          style={{
            height: 60,
            borderColor: "gray",

            marginBottom: 10,
            backgroundColor: "white",
            marginLeft: 30,
          }}
          placeholder="Entrez votre email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          marginTop: 200,
        }}
      >
        <Text>Username :</Text>
        <TextInput
          style={{
            height: 60,
            borderColor: "gray",

            marginBottom: 10,
            backgroundColor: "white",
            marginLeft: 30,
          }}
          placeholder="Entrez votre email"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          marginTop: 30,
        }}
      >
        <Text>Mot de passe :</Text>
        <TextInput
          style={{
            height: 60,
            borderColor: "gray",

            marginBottom: 10,
            backgroundColor: "white",
            marginLeft: 30,
          }}
          placeholder="Entrez votre mot de passe"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          marginTop: 30,
        }}
      >
        <Text>Confirmez le mot de passe :</Text>
        <TextInput
          style={{
            height: 60,
            borderColor: "gray",

            marginBottom: 10,
            backgroundColor: "white",
            marginLeft: 30,
          }}
          placeholder="Entrez votre mot de passe"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
        />
      </View>
      <TouchableHighlight
        style={styles.basicText}
        underlayColor="transparent"
        onPress={() => {
          handleSignup();
          navigation.navigate("LoginScreen");
        }}
      >
        <View
          style={{
            width: 150,
            height: 40,
            borderRadius: 30,
            marginLeft: 100,
            marginTop: 20,
            backgroundColor: "#5CA276",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>Inscris toi</Text>
        </View>
      </TouchableHighlight>
    </KeyboardAwareScrollView>
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

export default SignupScreen;
