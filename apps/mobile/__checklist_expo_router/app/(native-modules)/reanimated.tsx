import { useCallback } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Button, CheckListScreen } from "../../src";

export default function ReanimatedScreen() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: 100,
      height: 100,
      backgroundColor: "#06196D",
      borderRadius: 8,
      transform: [{ translateX: offset.value }],
    };
  });

  const onPress = useCallback(() => {
    offset.value = withSpring(Math.random() * 255);
  }, []);

  return (
    <CheckListScreen checkId="REANIMATED">
      <View style={{ paddingVertical: 24 }}>
        <Animated.View style={animatedStyles} />
      </View>
      <Button onPress={onPress} title="Move" />
    </CheckListScreen>
  );
}
