import {
  ImpactFeedbackStyle,
  NotificationFeedbackType,
  impactAsync,
  selectionAsync,
  notificationAsync,
} from "expo-haptics";
import { CheckListScreen, Button, Text } from "../../src";

export default function ExpoHapticsScreen() {
  return (
    <CheckListScreen checkId="EXPO-HAPTICS">
      <Text>ImpactFeedback</Text>
      {Object.keys(ImpactFeedbackStyle).map((key) => {
        return (
          <Button
            key={key}
            title={key}
            onPress={() =>
              impactAsync(
                ImpactFeedbackStyle[key as keyof typeof ImpactFeedbackStyle]
              )
            }
          />
        );
      })}
      <Text>NotificationFeedback</Text>
      {Object.keys(NotificationFeedbackType).map((key) => {
        return (
          <Button
            key={key}
            title={key}
            onPress={() =>
              notificationAsync(
                NotificationFeedbackType[
                  key as keyof typeof NotificationFeedbackType
                ]
              )
            }
          />
        );
      })}

      <Button title="Selection" onPress={() => selectionAsync()} />
    </CheckListScreen>
  );
}
