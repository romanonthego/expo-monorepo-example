import { ScrollView } from "react-native";
import _JSONTree, { Renderable } from "react-native-json-tree";

const theme = {
  scheme: "monokai",
  base00: "#FFFFFF",
};

const extendedTheme = {
  extend: theme,
  nestedNodeLabel: {
    fontFamily: "UbuntuMono-Regular",
    fontSize: 16,
  },

  nestedNodeItemString: {
    fontFamily: "UbuntuMono-Regular",
    fontSize: 16,
  },

  valueLabel: {
    fontFamily: "UbuntuMono-Regular",
    fontSize: 16,
  },
  valueText: {
    fontFamily: "UbuntuMono-Regular",
    fontSize: 16,
  },
  itemLabel: {
    fontFamily: "UbuntuMono-Regular",
    fontSize: 16,
  },
  itemText: {
    fontFamily: "UbuntuMono-Regular",
    fontSize: 16,
  },
  itemRange: {
    fontFamily: "UbuntuMono-Regular",
    fontSize: 16,
  },
};

export function JSONTree({ data }: { data: Renderable }) {
  return (
    <ScrollView horizontal>
      <_JSONTree
        data={data}
        theme={extendedTheme as any}
        invertTheme={false}
        // shouldExpandNode={() => true}
      />
    </ScrollView>
  );
}
