import { View, TouchableOpacity, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { containers } from "../../styles";
import { useState } from "react";

export default function Datepicker({ Date, Nacimiento, insets }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    Date(date);
    hideDatePicker();
  };
  return (
    <View>
      <TouchableOpacity
        style={containers({ insets }).button}
        onPress={showDatePicker}
      >
        <Text>{Nacimiento.toDateString()}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}
