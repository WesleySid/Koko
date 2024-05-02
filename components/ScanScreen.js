import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";
import axios from "axios";
import HistoryScreen from "./HistoryScreen";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [productData, setProductData] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [scannedProducts, setScannedProducts] = useState([]);
  const [historyKey, setHistoryKey] = useState(0); // Nouvelle clé pour HistoryScreen

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const fetchData = async (id) => {
    try {
      const { data } = await axios.get(
        `https://world.openfoodfacts.org/api/v0/product/${id}.json`
      );
      console.log("Product Data:", data.product.product_name);
      setProductData(data);
      setScannedProducts((prevProducts) => [...prevProducts, data]);
      setHistoryKey((prevKey) => prevKey + 1); // Mettre à jour la clé
    } catch (error) {
      console.error(error);
    }
  };

  const handleViewPress = () => {
    setIsExpanded(!isExpanded);
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    fetchData(data);
    alert(`Bar code ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const containerStyle = isExpanded ? { height: 600 } : { height: 200 };

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
        <Camera
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        <View style={styles.rectangleContainer}>
          <View style={styles.rectangle} />
        </View>
      </View>
      {scanned && productData && productData.product && (
        <TouchableOpacity
          style={[styles.productContainer, containerStyle]}
          onPress={handleViewPress}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: productData.product.image_front_url }}
              style={styles.productPic}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.productName}>
              {productData.product.generic_name || ""}
            </Text>
            <Text style={styles.productDesc}>
              {productData.product.product_name || ""}
            </Text>
          </View>
        </TouchableOpacity>
      )}
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
      {/* Utilisation de la clé pour forcer le rendu de HistoryScreen */}
      <HistoryScreen key={historyKey} scannedProducts={scannedProducts} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cameraContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  rectangle: {
    height: 250,
    width: 450,
    borderWidth: 2,
    borderColor: "white",
    backgroundColor: "transparent",
  },
  productName: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  producDesc: { fontSize: 12, marginTop: 10 },
  productPic: { height: 200, width: 150, marginTop: 10, objectFit: "cover" },

  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 200,
    overflow: "hidden",
  },
  imageContainer: {
    margin: 10,
  },
  textContainer: {
    flex: 1,
  },
});
