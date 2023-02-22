import * as Tooltip from "universal-tooltip";
import { View, Pressable, Platform, Text } from "react-native";
import { CheckListScreen } from "../../src";
import { useState } from "react";

const TriggerView = Platform.OS === "web" ? View : Pressable;

export default function UniversalTooltipScreen() {
  const [open, setOpen] = useState(false);

  return (
    <CheckListScreen checkId="UNIVERSAL-TOOLTIP">
      <View
        style={{
          paddingHorizontal: 8,
          paddingVertical: 4,
        }}
      >
        <Tooltip.Root
          {...Platform.select({
            web: {},
            default: {
              open,
              onDismiss: () => {
                console.log("onDismiss");
                setOpen(false);
              },
            },
          })}
        >
          <Tooltip.Trigger>
            <TriggerView
              {...Platform.select({
                web: {},
                default: {
                  open,
                  onPress: () => {
                    setOpen(true);
                  },
                },
              })}
            >
              <Text>Hello!👋</Text>
            </TriggerView>
          </Tooltip.Trigger>
          <Tooltip.Content
            sideOffset={3}
            containerStyle={{
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 8,
              paddingBottom: 8,
            }}
            onTap={() => {
              setOpen(false);
              console.log("onTap");
            }}
            dismissDuration={500}
            disableTapToDismiss
            side="right"
            presetAnimation="fadeIn"
            backgroundColor="black"
            borderRadius={12}
          >
            <Tooltip.Text
              text="Some copy..."
              textColor="#fff"
              fontWeight="bold"
              textSize={16}
            />
          </Tooltip.Content>
        </Tooltip.Root>
      </View>
    </CheckListScreen>
  );
}
