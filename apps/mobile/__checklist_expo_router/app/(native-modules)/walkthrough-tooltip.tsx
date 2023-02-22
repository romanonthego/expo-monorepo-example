import { useState } from "react";
import Tooltip from "react-native-walkthrough-tooltip";
import { CheckListScreen, Button, Text } from "../../src";
import { View } from "react-native";

export default function WalkthroughTooltipScreen() {
  const [showTip, setTip] = useState(false);
  return (
    <CheckListScreen checkId="WALKTHROUGH-TOOLTIP">
      <Tooltip
        isVisible={showTip}
        content={
          <View>
            <Text> I am a tooltip </Text>
          </View>
        }
        onClose={() => setTip(false)}
        placement="bottom"
        // below is for the status bar of react navigation bar
        // topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
      >
        <Button onPress={() => setTip(true)}>
          <Text>Show ToolTip</Text>
        </Button>
      </Tooltip>
    </CheckListScreen>
  );
}
