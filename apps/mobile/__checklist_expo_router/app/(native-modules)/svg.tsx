import {
  Svg,
  Defs,
  RadialGradient,
  Stop,
  Ellipse,
  G,
  Polygon,
} from "react-native-svg";
import { CheckListScreen, Text } from "../../src";

// @ts-ignore
import Drupal from "../../src/assets/drupal.svg";

export default function SVGScreen() {
  return (
    <CheckListScreen checkId="SVG">
      <Text>Gradient</Text>
      <Svg height="150" width="300">
        <Defs>
          <RadialGradient
            id="grad-4"
            cx="150"
            cy="75"
            r="85"
            fx="150"
            fy="75"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0" stopColor="#ff0" stopOpacity="1" />
            <Stop offset="0.3" stopColor="#000" stopOpacity="1" />
            <Stop offset="0.7" stopColor="#0f0" stopOpacity="1" />
            <Stop offset="1" stopColor="#83a" stopOpacity="1" />
          </RadialGradient>
        </Defs>
        <Ellipse cx="150" cy="75" rx="85" ry="55" fill="url(#grad-4)" />
      </Svg>
      <Text>Shape</Text>
      <Svg height="105" width="105">
        <G scale="0.5">
          <Polygon
            points="100,10 40,198 190,78 10,78 160,198"
            fill="lime"
            stroke="purple"
            strokeWidth="5"
          />
        </G>
      </Svg>
      <Text>Import</Text>
      <Drupal />
    </CheckListScreen>
  );
}
