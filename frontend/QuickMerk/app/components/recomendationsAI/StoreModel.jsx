import { View, Text } from 'react-native'
import React from 'react'
import { Modal, Portal } from 'react-native-paper';
import { containers ,text} from "../../styles";

export default function StoreModel({visible,hideModal,insets}) {
  return (
    <Portal>
        <Modal visible={visible} onDismiss={hideModal} style={containers({ insets }).container} >
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
  )
}