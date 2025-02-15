import { View, Text, Button, SafeAreaView } from "react-native";
import React from "react";
import Animated, {
  FadeInDown,
  FadeOutRight,
  LinearTransition,
} from "react-native-reanimated";

const Animation = () => {
  const [hide, setHide] = React.useState(true);
  const _entering = FadeInDown.springify().damping(14);
  const _exiting = FadeOutRight.springify().damping(14);
  const _layout = LinearTransition.springify().damping(14);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "blue",
        }}
      >
        {hide && (
          <Animated.View
            style={{ width: 200, height: 200, backgroundColor: "red" }}
            entering={_entering}
            exiting={_exiting}
            layout={_layout}
          />
        )}
        <Animated.View
          style={{ width: 200, height: 200, backgroundColor: "red" }}
          entering={_entering}
          exiting={_exiting}
          layout={_layout}
        />
        <Button title="Press me" onPress={() => setHide((prev) => !prev)} />
      </View>
    </SafeAreaView>
  );
};

export default Animation;
