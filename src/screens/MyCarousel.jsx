import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const data = [
  { title: 'Item 1', image: 'https://via.placeholder.com/300' },
  { title: 'Item 2', image: 'https://via.placeholder.com/300' },
  { title: 'Item 3', image: 'https://via.placeholder.com/300' },
];

const renderItem = ({ item }) => (
  <View >
    <Image source={{ uri: item.image }}  />
    <Text>{item.title}</Text>
  </View>
);

const MyCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);

  return (
    <View>
      <Carousel
        layout="default"
        ref={ref}
        data={data}
        sliderWidth={300}
        itemWidth={300}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
    </View>
  );
};



export default MyCarousel;
