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
        <View style={styles({ insets }).header}>
          <Text style={styles({ insets }).title}>Settings</Text>
        </View>

        <View style={styles({ insets }).section}>
          <View style={styles({ insets }).sectionHeader}>
            <Text style={styles({ insets }).sectionHeaderText}>Account</Text>
          </View>
          <View style={styles({ insets }).profile}>
            <Image
              alt=""
              source={{
                uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
              }}
              style={styles({ insets }).profileAvatar}
            />

            <View style={styles({ insets }).profileBody}>
              <Text style={styles({ insets }).profileName}>John Doe</Text>

              <Text style={styles({ insets }).profileHandle}>
                john.doe@mail.com
              </Text>
            </View>
          </View>
        </View>

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
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => dispatch(logout())}
        >
          <View style={styles({ insets }).row}>
            <Text style={styles({ insets }).textContainer}>
              <Ionicons
                style={{ marginTop: 10 }}
                color="#ababab"
                name="log-out-outline"
                size={22}
              />
              Cerrar Sesion
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;
