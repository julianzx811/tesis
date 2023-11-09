import React from "react";
import { Modal, Portal } from "react-native-paper";
import { containers, text } from "../../styles";
import { ButtonGroup } from "@rneui/themed";
import { ItemsComponent, RecomendationComponent } from "./index";
import { useState } from "react";
import {
  DeleteProduct,
  NewRecomendation,
} from "../../redux/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { ActivityIndicator } from "react-native-paper";
import { LSAmodel } from "../../fetch/fetch";
import { LSAmodelRequest } from "../../fetch/LSAmodel";

export default function StoreModel({ visible, hideModal, insets }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();
  const ProductsList = useSelector((store) => store.user.productsList);

  const deleteProduct = async (key) => {
    setloading(true);
    await dispatch(DeleteProduct(key));
    setloading(false);
  };

  const getRecomendations = async () => {
    setloading(true);
    await LSAmodel(ProductsList, dispatch, NewRecomendation, LSAmodelRequest);
    setloading(false);
  };

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
            getRecomendations={getRecomendations}
          />
        )}
      </Modal>
    </Portal>
  );
}
