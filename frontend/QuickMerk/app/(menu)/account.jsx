import React from "react";
import { View, Text, SafeAreaView, ScrollView, Switch } from "react-native";
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
import { useSelector } from "react-redux";

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
  const [currentWord, setCurrentWord] = useState("");
  return (
    <SafeAreaView style={styles({ insets }).containerxd}>
      <CorreoComponent
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        insets={insets}
        lastWord={currentWord}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Tittle tittle={"Settings"} insets={insets} />

        <Profile
          insets={insets}
          name={useSelector((store) => store.user.nombre)}
          email={useSelector((store) => store.user.correo)}
        />

        {SECTIONS.map(({ header, items }) => (
          <View style={styles({ insets }).section} key={header}>
            <View style={styles({ insets }).sectionHeader}>
              <Text style={styles({ insets }).sectionHeaderText}>{header}</Text>
            </View>
            <View
              style={[styles({ insets }).rowWrapper, { borderTopWidth: 0 }]}
            >
              {items.map(({ label, type, value }, index) => {
                const words = label.split(" ");
                const lastWord = words[words.length - 1];
                return (
                  <View key={index}>
                    {label === "Cambiar Contraseña" ||
                    label === "Cambiar Correo" ? (
                      <ItemComponent
                        key={index}
                        label={label}
                        insets={insets}
                        icon={"caret-forward-outline"}
                        setModalVisible={setModalVisible}
                        lastWord={lastWord}
                        setCurrentWord={setCurrentWord}
                      />
                    ) : (
                      <ItemComponent
                        icon={"add"}
                        label={label}
                        insets={insets}
                      />
                    )}
                  </View>
                );
              })}
            </View>
          </View>
        ))}
        <UnsingButton
          insets={insets}
          dispatch={dispatch}
          logout={logout}
          tittle={"Cerrar sesion"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;
