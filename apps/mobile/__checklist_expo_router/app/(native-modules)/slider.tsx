import Slider from "@react-native-community/slider";
import { useState } from "react";
import { CheckListScreen, JSONTree } from "../../src";

export default function SliderScreen() {
  const [value, setValue] = useState(0.5);

  return (
    <CheckListScreen checkId="SLIDER">
      <Slider
        style={{ width: "100%", height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FF0000"
        maximumTrackTintColor="#00FF00"
        value={value}
        onValueChange={setValue}
      />
      <JSONTree data={{ value }} />
    </CheckListScreen>
  );
}
