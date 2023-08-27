import React from "react";
import { containers } from "../../styles";
import ColorfulCard from "react-native-colorful-card";
import { useRouter } from "expo-router";

export default function ProductsComponent({
  productName,
  ProductId,
  href,
  Descripcion,
  insets,
  precio,
}) {
  function random_rgba() {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return (
      "rgba(" +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      r().toFixed(1) +
      ")"
    );
  }

  var color = random_rgba();
  const router = useRouter();

  return (
    <ColorfulCard
      title={productName}
      value={precio}
      valuePostfix="$"
      footerTitle="Descripcion"
      footerValue={Descripcion}
      iconImageSource={require("../../assets/product.png")}
      style={{ backgroundColor: color }}
      onPress={() => {
        router.replace(href);
      }}
    />
  );
}
