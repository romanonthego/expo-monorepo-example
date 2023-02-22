import { withLayoutContext } from "expo-router";
import {
  createBottomSheetNavigator,
  BottomSheetNavigationOptions,
} from "@th3rdwave/react-navigation-bottom-sheet";

const BottomSheetNavigator = createBottomSheetNavigator().Navigator;

export const BottomSheet = withLayoutContext<
  BottomSheetNavigationOptions,
  typeof BottomSheetNavigator
>(BottomSheetNavigator);
