import { View, StyleSheet, ActivityIndicator, Button } from "react-native";
import Photo from "@/components/Photo";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import BackGroundImage from "@/components/BackGroundImage";
import { useQuery } from "@tanstack/react-query";
import { PhotoResponse } from "@/lib/type";
import { _ImageWidth, _spacing, width } from "@/constants/data";
import { getPohots } from "@/api/photos";

export default function TabTwoScreen() {
  const scrollx = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler((e) => {
    scrollx.value = e.contentOffset.x / (_ImageWidth + _spacing);
  });

  const { data, isLoading, refetch } = useQuery<PhotoResponse>({
    queryKey: ["images"],
    queryFn: getPohots,
  });

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="white" />
      </View>
    );
  }
  if (!data) return;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        gap: 15,
      }}
    >
      <View style={StyleSheet.absoluteFillObject}>
        {data.photos.map((item, index) => (
          <BackGroundImage
            key={item.id}
            item={item}
            index={index}
            scrollx={scrollx}
          />
        ))}
      </View>
      <Animated.FlatList
        data={data.photos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => {
          return <Photo item={item} index={index} scrollx={scrollx} />;
        }}
        snapToInterval={_ImageWidth + _spacing}
        decelerationRate="fast"
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0 }}
        contentContainerStyle={{
          gap: _spacing,
          paddingHorizontal: (width - _ImageWidth) / 2,
        }}
        onScroll={onScroll}
      />
      <Button
        title="
        Refresh"
        onPress={() => {
          refetch();
        }}
      />
    </View>
  );
}
