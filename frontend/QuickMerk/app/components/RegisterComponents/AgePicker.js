import { View } from "react-native";
import InputSpinner from "react-native-input-spinner";
import styles from "../../styles/containers";

export default function AgePicker ({ setEdad, edad }) {
    return (
      <View>
        <InputSpinner
          shadow={true}
          colorLeft={"grey"}
          colorRight={"grey"}
          width={130}
          height={35}
          skin="square"
          max={100}
          min={10}
          step={2}
          colorMax={"#f04048"}
          colorMin={"#40c5f4"}
          value={edad}
          onChange={(num) => {
            setEdad(num);
          }}
        />
      </View>
    );
  };