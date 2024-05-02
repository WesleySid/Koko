import React, { useEffect } from "react";
import { Text, View, Image } from "react-native";

export default function HistoryScreen({ scannedProducts }) {
  useEffect(() => {
    console.log("history screen :", scannedProducts);
  }, [scannedProducts]); // Ajout de scannedProducts comme dépendance à useEffect

  return (
    <View>
      <Text>
        {scannedProducts && scannedProducts.length === 0
          ? "Historique vide"
          : "Historique des produits scannés:"}
      </Text>
      {scannedProducts &&
        scannedProducts.map((product, index) => (
          <View key={index}>
            <Image
              source={{ uri: product.product.image_front_url }}
              style={{ width: 100, height: 100 }}
            />
            <Text>{product.product.product_name || "Produit inconnu"}</Text>
          </View>
        ))}
    </View>
  );
}
