import { Text } from "react-native";
import { Video, ResizeMode, AVPlaybackStatus } from "expo-av";
import { Button, CheckListScreen, JSONTree } from "../src";
import { useRef, useState } from "react";

export default function ExpoAv() {
  const video = useRef<Video>(null);
  const [status, setStatus] = useState<
    AVPlaybackStatus | { isPlaying: boolean }
  >({ isPlaying: false });

  return (
    <CheckListScreen checkId="EXPO-AV">
      <Text
        style={{
          marginBottom: 10,
          fontFamily: "UbuntuMono-Regular",
        }}
      >
        Video
      </Text>
      <Video
        ref={video}
        style={{
          width: "100%",
          height: 200,
          borderWidth: 1,
          borderColor: "lightgray",
        }}
        shouldPlay
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(status)}
      />
      <JSONTree data={status} />
      <Button
        title={status.isPlaying ? "Pause" : "Play"}
        onPress={() =>
          status.isPlaying
            ? video.current?.pauseAsync()
            : video.current?.playAsync()
        }
      />
    </CheckListScreen>
  );
}
