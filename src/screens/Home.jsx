import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import {Carousel, Pagination} from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation=useNavigation();
  const ref = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const slider = [
    {
      color:"bg-green-700",
      image: img1,
      heading: 'Quality',
      content:
        'Sell your farm fresh products directly to consumer, cutting out the middleman and reducing emissions of the global supply chain.',
    },
    {
      color:"bg-orange-700",
      image: img2,
      heading: 'Convenient',
      content:
        'Our team of delivery drivers will make sure your orders are picked up on time and promptly delivered to your customers.',
    },
    {
      color:"bg-yellow-500",
      image: img3,
      heading: 'Local',
      content:
        'We love the earth and know you do too! Join us in reducing our local carbon footprint one order at a time.',
    },
  ];
  const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
  const renderItem = ({item, index}) => {
    return (
      <View className="relative w-screen h-screen">
        <View className="h-[500px]">
          <Image source={item.image} className="w-full h-full" />
        </View>
        <View className="bg-white p-5 rounded-t-[40px] h-full bottom-7">
          <View className="text-justify ">
            <Text className="font-bold text-xl text-center text-black mb-5">
              {item.heading}
            </Text>
            <Text className="text-justify">{item.content}</Text>
          </View>
          <TouchableOpacity className={`${item.color} rounded-3xl py-2 mt-16`}>
            <Text className="text-center text-white text-xl">
              Join the movement!{' '}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="mt-2" onPress={()=>navigation.navigate("Login")}>
            <Text className="text-center text-black text-xl underline ">
              Login{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View className="flex flex-1 bg-white">
      <Carousel
        layout="default"
        ref={ref}
        data={slider}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        renderItem={renderItem}
        onSnapToItem={index => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={slider.length}
        activeDotIndex={activeIndex}
        containerStyle={{
          backgroundColor: 'transparent',
          position: 'absolute',
          bottom: 180,
          left: 0,
          right: 0,
        }}
        dotStyle={{
          width: 20,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        }}
        inactiveDotStyle={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          width: 10,
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.7}
      />
    </View>
  );
}
