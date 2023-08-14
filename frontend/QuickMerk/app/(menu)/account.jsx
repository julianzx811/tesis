import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { logout } from "../redux/actions/UserActions";
import { useDispatch } from "react-redux";
import styles from "../styles/containers";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import {Tittle,Profile,UnsingButton} from "../components/AccountComponents";

const SECTIONS = [
  {
    header: "Cuenta",
    items: [
      { icon: "flag", label: "Cambiar Correo", type: "link" },
      { icon: "mail", label: "Cambiar Contraseña", type: "link" },
      { icon: "mail", label: "Actualizar mi informacion", type: "link" },
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
  return (
    <SafeAreaView style={styles({ insets }).containerxd}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Tittle tittle={"Settings"} insets={insets} />

        <Profile insets={insets} name={"yulian"}  email={"yulian@hotmail.com"} />

        {SECTIONS.map(({ header, items }) => (
          <View style={styles({ insets }).section} key={header}>
            <View style={styles({ insets }).sectionHeader}>
              <Text style={styles({ insets }).sectionHeaderText}>{header}</Text>
            </View>
            <View style={styles({ insets }).sectionBody}>
              {items.map(({ label, type, value }, index) => {
                const isFirst = index === 0;
                const isLast = index === items.length - 1;
                return (
                  <View
                    key={index}
                    style={[
                      styles({ insets }).rowWrapper,
                      index === 0 && { borderTopWidth: 0 },
                      isFirst && styles.rowFirst,
                      isLast && styles.rowLast,
                    ]}
                  >
                    <TouchableOpacity onPress={() => {}}>
                      <View style={styles({ insets }).row}>
                        <Text style={styles({ insets }).rowLabel}>{label}</Text>

                        <View style={styles({ insets }).rowSpacer} />

                        {type === "input" && (
                          <Text style={styles({ insets }).rowValue}>
                            {value}
                          </Text>
                        )}

                        {type === "boolean" && <Switch value={value} />}

                        {(type === "input" || type === "link") && (
                          <Ionicons
                            color="#ababab"
                            name="caret-forward-outline"
                            size={22}
                          />
                        )}
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </View>
        ))}
        <UnsingButton dispatch={dispatch} logout={logout} tittle={"Cerrar session"} insets={insets} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;
