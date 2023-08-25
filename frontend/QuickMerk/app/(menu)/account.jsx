import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import styles from "../styles/containers";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  ItemComponent,
  UnsingButton,
} from "../../app/components/AccountComponents";
import { logout } from "../../app/redux/actions/UserActions";

import {
  Tittle,
  Profile,
  CorreoComponent,
} from "../components/AccountComponents";
import { useState } from "react";

const SECTIONS = [
  {
    header: "Cuenta",
    items: [
      { icon: "flag", label: "Cambiar Correo", type: "link" },
      { icon: "mail", label: "Cambiar Contraseña", type: "link" },
    ],
  },
  {
    header: "Configuracion",
    items: [
      {
        icon: "globe",
        label: "Idioma",
        value: "English",
        type: "input",
      },
      { icon: "moon", label: "Modo Oscuro", value: false, type: "boolean" },
      { icon: "moon", label: "Notificaciones", value: false, type: "boolean" },
    ],
  },
  {
    header: "Acerca de",
    items: [{ icon: "save", label: "Quick Merk", type: "link" }],
  },
];

const Account = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles({ insets }).containerxd}>
      <CorreoComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        insets={insets}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Tittle tittle={"Settings"} insets={insets} />

        <Profile insets={insets} name={"yulian"} email={"yulian@hotmail.com"} />

        {SECTIONS.map(({ header, items }) => (
          <View style={styles({ insets }).section} key={header}>
            <View style={styles({ insets }).sectionHeader}>
              <Text style={styles({ insets }).sectionHeaderText}>{header}</Text>
            </View>
            <View
              style={[
                styles({ insets }).rowWrapper,
                { borderTopWidth: 0 },
                styles.rowFirst,
              ]}
            >
              {items.map(({ label, type, value }, index) => (
                <ItemComponent key={index} label={label} insets={insets} />
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
      <UnsingButton
        insets={insets}
        dispatch={dispatch}
        logout={logout}
        tittle={"Cerrar sesion"}
      />
    </SafeAreaView>
  );
};

export default Account;
