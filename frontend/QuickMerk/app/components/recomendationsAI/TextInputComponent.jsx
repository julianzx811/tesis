import { View, Text } from 'react-native'
import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { containers, text } from "../../styles";

export default function TextInputComponent({insets}) {
    const [text, setText] = React.useState("");

    return (
      <TextInput
        label="Ingresa algun producto"
        value={text}
        onChangeText={text => setText(text)}
        style={containers({ insets }).inputcontainer}
        outlineStyle={{borderRadius:10}}
      />
    );
}