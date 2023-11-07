import { View, Text } from "react-native";
import React from "react";
import { Modal, Portal } from "react-native-paper";
import { containers, text } from "../../styles";
import { ButtonGroup } from "@rneui/themed";
import { ItemsComponent, RecomendationComponent } from "./index";
import { useState } from "react";
import { DeleteProduct } from "../../redux/actions/UserActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ActivityIndicator, Colors } from "react-native-paper";

export default function StoreModel({ visible, hideModal, insets }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const deleteProduct = async (key) => {
    setloading(true);

    // Espera a que la acción DeleteProduct se complete antes de cambiar el estado de carga.
    await dispatch(DeleteProduct(key));

    setloading(false);
  };

  const ProductsList = useSelector((store) => store.user.productsList);

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        style={containers({ insets }).container}
      >
        <ButtonGroup
          buttons={["Productos", "Recomendaciones"]}
          selectedIndex={selectedIndex}
          onPress={(value) => setSelectedIndex(value)}
          containerStyle={{ width: 200 }}
        />
        {selectedIndex == 1 ? (
          <RecomendationComponent insets={insets} />
        ) : loading ? (
          <ActivityIndicator animating={true} />
        ) : (
          <ItemsComponent
            insets={insets}
            deleteProduct={deleteProduct}
            ProductsList={ProductsList}
          />
        )}
      </Modal>
    </Portal>
  );
}
