import { View, Text } from "react-native";
import React from "react";
import { Modal, Portal } from "react-native-paper";
import { containers, text } from "../../styles";
import { ButtonGroup } from "@rneui/themed";
import { ItemsComponent, RecomendationComponent } from "./index";
import { useState } from "react";
export default function StoreModel({ visible, hideModal, insets }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
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
        ) : (
          <ItemsComponent insets={insets} />
        )}
      </Modal>
    </Portal>
  );
}
