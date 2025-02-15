import React from "react";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Photo as ph } from "@/lib/type";
import { _ImageHeight, _ImageWidth } from "@/constants/data";

const Photo = ({
  item,
  index,
  scrollx,
}: {
  item: ph;
  index: number;
  scrollx: SharedValue<number>;
}) => {
  const stylez = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            scrollx.value,
            [index - 1, index, index + 1],
            [1.4, 1, 1.4]
          ),
        },
        {
          rotate: `${interpolate(
            scrollx.value,
            [index - 1, index, index + 1],
            [-15, 0, 15]
          )}deg`,
        },
      ],
    };
  });

  const stylet = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollx.value,
            [index - 1, index, index + 1],
            [40, 0, 40],
            "clamp"
          ),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: _ImageWidth,
          height: _ImageHeight,
          overflow: "hidden",
          borderRadius: 16,
        },
        stylet,
      ]}
    >
      <Animated.Image
        source={{ uri: item.src.large2x }}
        style={[{ flex: 1 }, stylez]}
      />
    </Animated.View>
  );
};

export default Photo;
