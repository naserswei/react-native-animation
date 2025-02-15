import { StyleSheet } from "react-native";
import React from "react";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Photo } from "@/lib/type";

const BackGroundImage = ({
  item,
  index,
  scrollx,
}: {
  item: Photo;
  index: number;
  scrollx: SharedValue<number>;
}) => {
  const stylez = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollx.value,
        [index - 1, index, index + 1],
        [0, 1, 0]
      ),
    };
  });
  return (
    <Animated.Image
      source={{ uri: item.src.large }}
      style={[StyleSheet.absoluteFillObject, stylez]}
      blurRadius={50}
    />
  );
};

export default BackGroundImage;
