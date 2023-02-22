import {
  Component,
  createContext,
  useContext,
  ComponentType,
  ComponentProps,
  PropsWithChildren,
} from "react";
import { ScrollView, ScrollViewProps } from "react-native";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";

type TScrollView =
  | ComponentType<ComponentProps<typeof BottomSheetScrollView>>
  | typeof ScrollView;

export const ScreenScrollViewsContext = createContext<{
  ScrollView: TScrollView;
}>({
  ScrollView: ScrollView,
});

export function ScreenScrollViewsProvider({
  ScrollViewComponent = ScrollView,
  children,
}: PropsWithChildren<{
  ScrollViewComponent: TScrollView;
}>) {
  return (
    <ScreenScrollViewsContext.Provider
      value={{ ScrollView: ScrollViewComponent }}
    >
      {children}
    </ScreenScrollViewsContext.Provider>
  );
}

export function useScreenScrollViews() {
  return useContext(ScreenScrollViewsContext);
}
