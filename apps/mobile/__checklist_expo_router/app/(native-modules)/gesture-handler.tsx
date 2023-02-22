import { View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { CheckListScreen, Text } from "../../src";

export default function GestureHandlerScreen() {
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: isPressed.value
            ? offset.value.x
            : withSpring(offset.value.x),
        },
        {
          translateY: isPressed.value
            ? offset.value.y
            : withSpring(offset.value.y),
        },
        { scale: withSpring(isPressed.value ? 1.2 : 1) },
      ],
      opacity: withSpring(isPressed.value ? 0.5 : 1),
    };
  });

  // const start = useSharedValue({ x: 0, y: 0 });
  const gesture = Gesture.Pan()
    .onStart((e) => {
      offset.value = {
        x: e.translationX,
        y: e.translationY,
      };
    })
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate((e) => {
      offset.value = {
        x: e.translationX,
        y: e.translationY,
      };
    })
    .onEnd(() => {
      offset.value = {
        x: 0,
        y: 0,
      };
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  return (
    <CheckListScreen checkId="GESTURE-HANDLER">
      <Text>try to drag it</Text>
      <View
        style={{
          paddingVertical: 24,
          height: 300,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GestureDetector gesture={gesture}>
          <Animated.View
            style={[
              {
                width: 100,
                height: 100,
                backgroundColor: "#06196D",
                borderRadius: 50,
              },

              animatedStyles,
            ]}
          />
        </GestureDetector>
      </View>
    </CheckListScreen>
  );
}
