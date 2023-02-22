import { BottomSheet } from "../../src";
import { BottomSheetBackdrop } from "@gorhom/bottom-sheet";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "(tabs)",
};

export default function Modals() {
  return (
    <BottomSheet
      initialRouteName="(tabs)"
      screenOptions={{
        snapPoints: ["60%", "90%"],
        stackBehavior: "push",
        backdropComponent: (props) => {
          return (
            <BottomSheetBackdrop
              opacity={0.6}
              appearsOnIndex={0}
              disappearsOnIndex={-1}
              {...props}
            />
          );
        },
      }}
    />
  );
}
