import * as React from "react";
import { useRouter } from "expo-router";
import { View, Text, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "../state";
import { useScreenScrollViews } from "../ScrollViewsProvider";

function MockLink({
  onPress,
  to,
  children,
  disabled = false,
}: {
  onPress?: () => void;
  to?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => {
        onPress ? onPress() : to ? router.push(to) : null;
      }}
      disabled={disabled}
      style={() => {
        return {
          backgroundColor: "lightgray",
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 10,
          marginBottom: 4,
        };
      }}
    >
      <Text
        style={{
          fontFamily: "UbuntuMono-Regular",
          fontSize: 14,
        }}
      >
        {children ? children : `=> ${to}`}
      </Text>
    </Pressable>
  );
}

function Info({ name, value }: { name: string; value?: string }) {
  if (!value) {
    return null;
  }

  return (
    <Text
      style={{
        fontSize: 14,
        fontFamily: "UbuntuMono-Regular",
        marginBottom: 8,
        marginTop: 8,
      }}
    >
      <Text
        style={{
          fontSize: 14,
          fontFamily: "UbuntuMono-Bold",
          marginBottom: 8,
          marginTop: 8,
        }}
      >
        {name}
      </Text>
      : {value}
    </Text>
  );
}

export function MockScreen({
  title = "Mock Screen",
  filename,
  links = [],
  actions = [],
  children,
}: React.PropsWithChildren<{
  title: string;
  filename?: string;
  links?: { title: string; to: string }[];
  actions?: { title: string; onPress: () => void }[];
}>) {
  const { ScrollView } = useScreenScrollViews();
  const { isAuthorized } = useAuth();
  const router = useRouter();
  // const href = useHref();
  const navigation = useNavigation();
  const route = useRoute();
  const isPresented = navigation.canGoBack();

  const { top, bottom } = useSafeAreaInsets();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "white",
        width: "100%",
        height: "100%",
      }}
      contentContainerStyle={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: top,
        paddingBottom: bottom,
        paddingHorizontal: 20,
      }}
    >
      <Info name="screen" value={title} />
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "black",
        }}
      />
      {/* <Info name="href" value={href.href} /> */}
      <Info name="filename" value={filename} />
      <Info name="isPresented" value={isPresented ? "true" : "false"} />
      <Info name="isAuthorized" value={isAuthorized ? "true" : "false"} />
      <Info name="route.name" value={route.name} />
      <Info name="route.params" value={JSON.stringify(route.params)} />
      <Info name="route.key" value={route.key} />
      <Info name="route.path" value={JSON.stringify(route.path)} />

      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "black",
        }}
      />

      <View style={{ width: "100%" }}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "UbuntuMono-Bold",
            marginBottom: 8,
            marginTop: 16,
          }}
        >
          system links
        </Text>
        {/* <MockLink onPress={() => link.back()} disabled={!isPresented}>
          {"<= back"}
        </MockLink> */}
        <MockLink to="/__sitemap" />

        {links.length > 0 && (
          <>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "UbuntuMono-Bold",
                marginBottom: 8,
                marginTop: 16,
              }}
            >
              screen links
            </Text>
            {links.map(({ title, to }) => {
              return <MockLink key={to} to={to} />;
            })}
          </>
        )}

        {actions.length > 0 && (
          <>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "UbuntuMono-Bold",
                marginBottom: 8,
                marginTop: 16,
              }}
            >
              screen actions
            </Text>
            {actions.map(({ title, onPress }) => {
              return (
                <MockLink key={title} onPress={onPress}>
                  {title}
                </MockLink>
              );
            })}
          </>
        )}
      </View>

      {children}
    </ScrollView>
  );
}
