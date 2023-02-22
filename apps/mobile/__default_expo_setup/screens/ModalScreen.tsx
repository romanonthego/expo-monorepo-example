import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      {/* <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      /> */}
      <FlatList
        style={{
          width: "100%",
        }}
        data={[
          { key: "a" },
          { key: "b" },
          { key: "c" },
          { key: "d" },
          { key: "e" },
          { key: "f" },
          { key: "g" },
          { key: "h" },
          { key: "i" },
          { key: "j" },
          { key: "k" },
          { key: "l" },
          { key: "m" },
          { key: "n" },
          { key: "o" },
          { key: "p" },
          { key: "q" },
          { key: "r" },
          { key: "s" },
          { key: "t" },
        ]}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                height: 50,
                width: "100%",
                backgroundColor: "red",
                // marginVertical: 10,
                padding: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                }}
              >
                {item.key}
              </Text>
            </View>
          );
        }}
      />
      {/* <EditScreenInfo path="/screens/ModalScreen.tsx" /> */}

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
