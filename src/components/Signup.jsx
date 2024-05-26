import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import google from '../assets/google.png';
import fb from '../assets/fb.png';
import apple from '../assets/apple.png';
import {useNavigation} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';

const {width} = Dimensions.get('window');

export default function SignUp() {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < 5) {
      scrollViewRef.current.scrollTo({
        x: width * (currentIndex + 1),
        animated: true,
      });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      scrollViewRef.current.scrollTo({
        x: width * (currentIndex - 1),
        animated: true,
      });
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View className="flex flex-1 bg-white">
      <ScrollView
        horizontal={true}
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}>
        <View className="flex flex-row">
          {/* first page */}
          <View style={{width}} className="p-4">
            <Text className="text-gray-600">Farmer Eats</Text>
            <View>
              <View className="mt-16">
                <Text className="text-4xl text-black">Welcome!</Text>
                <View className="flex flex-row gap-x-8 mt-3">
                  <TouchableOpacity>
                    <Image source={google} className="w-8 h-8" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={apple} className="w-8 h-8" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={fb} className="w-8 h-8" />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="mt-12">
                <View className="flex flex-row gap-x-2 bg-red-100 rounded-xl px-3 my-2">
                  <View className="flex flex-row items-center">
                    <Icon name="user" size={18} color="black" />
                  </View>
                  <TextInput placeholder="Full name" className="w-full" />
                </View>
                <View className="flex flex-row gap-x-2 bg-red-100 rounded-xl px-3 my-2">
                  <View className="flex flex-row items-center">
                    <Icon name="at" size={18} color="black" />
                  </View>
                  <TextInput placeholder="Email address" className="w-full" />
                </View>
                <View className="flex flex-row bg-red-100 rounded-xl px-3 my-2 gap-x-2">
                  <View className="flex flex-row items-center">
                    <Icon name="phone" size={18} color="black" />
                  </View>
                  <TextInput
                    placeholder="Phone number"
                    className="w-full"
                    keyboardType="numeric"
                  />
                </View>
                <View className="flex flex-row gap-x-2 overflow-hidden bg-red-100 rounded-xl px-3 my-2 justify-between">
                  <View className="flex flex-row items-center gap-1">
                    <Icon name="lock" size={20} color="black" />
                    <TextInput
                      placeholder="Password"
                      className=""
                      secureTextEntry
                    />
                  </View>
                </View>
                <View className="flex flex-row gap-x-2 overflow-hidden bg-red-100 rounded-xl px-3 my-2 justify-between">
                  <View className="flex flex-row items-center gap-1">
                    <Icon name="lock" size={20} color="black" />
                    <TextInput
                      placeholder="Re-enter Password"
                      className=""
                      secureTextEntry
                    />
                  </View>
                </View>
                <View className="my-5 flex flex-row justify-between">
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    className="flex flex-row items-center">
                    <Text className="text-center black underline text-xl">
                      Login
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleNext}
                    className="bg-orange-700 py-4 px-16 rounded-full">
                    <Text className="text-center text-white text-xl font-bold">
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          {/* second page */}
          <View style={{width}} className="p-4">
            <Text className="text-gray-600">Farmer Eats</Text>
            <View>
              <View className="mt-16">
                <Text className="text-4xl text-black">Farm Info</Text>
              </View>
              <View className="mt-12">
                <View className="flex flex-row gap-x-2 bg-gray-200  rounded-xl px-3 my-2">
                  <View className="flex flex-row items-center">
                    <Icon name="user" size={18} color="black" />
                  </View>
                  <TextInput placeholder="Bussiness Name" className="w-full" />
                </View>
                <View className="flex flex-row gap-x-2 bg-gray-200 rounded-xl px-3 my-2">
                  <View className="flex flex-row items-center">
                    <Icon name="at" size={18} color="black" />
                  </View>
                  <TextInput placeholder="Informal Name" className="w-full" />
                </View>
                <View className="flex flex-row gap-x-2 bg-gray-200 rounded-xl px-3 my-2">
                  <View className="flex flex-row items-center">
                    <Icon name="at" size={18} color="black" />
                  </View>
                  <TextInput placeholder="Streen address " className="w-full" />
                </View>
                <View className="flex flex-row gap-x-2 bg-gray-200 rounded-xl px-3 my-2">
                  <View className="flex flex-row items-center">
                    <Icon name="at" size={18} color="black" />
                  </View>
                  <TextInput placeholder="City " className="w-full" />
                </View>

                <View className="flex flex-row   rounded-xl px-3 my-2 justify-between">
                  <View className="flex flex-row bg-gray-200 px-6 rounded-lg items-center">
                    <SelectDropdown
                      dropdownStyle={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        borderRadius: 8,
                        backgroundColor: 'gray',
                        paddingVertical: 10,
                        paddingHorizontal: 12,
                        width:100
                      }}
                      data={[{state: 'Kolkata'}, {state: 'Panjab'}]}
                      onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index);
                      }}
                      renderButton={(selectedItem, isOpened) => (
                        <View className=" w-full">
                          <Text className="text-black w-full">
                            {selectedItem
                              ? selectedItem.state
                              : 'State'}
                          </Text>
                        </View>
                      )}
                      renderItem={(item, index, isSelected) => (
                        <View className="" >
                          <Text className="text-black w-full">{item.state}</Text>
                        </View>
                      )}
                      showsVerticalScrollIndicator={true}
                    />
                  </View>
                  <TextInput placeholder=" enter Zipcode " className="bg-gray-200 rounded-lg " keyboardType='numeric' />
                </View>

                <View className="my-5 flex flex-row justify-between">
                  <TouchableOpacity
                    onPress={handleBack}
                    className="flex flex-row items-center">
                    <Icon name="long-arrow-left" size={18} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleNext}
                    className="bg-orange-700 py-4 px-16 rounded-full">
                    <Text className="text-center text-white text-xl font-bold">
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          {/* third page */}
          <View style={{width}} className="p-4">
            <Text className="text-gray-600">Farmer Eats</Text>
            <View>
              <View className="mt-16">
                <Text className="text-4xl text-black">Verification</Text>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia mollitia incidunt, blanditiis soluta praesentium iste dolor doloremque nulla ipsam reiciendis!</Text>
              </View>
              <View className="mt-12">
                <View className="flex flex-row gap-x-2 bg-red-100 rounded-xl px-3 my-2">
                  <View className="flex flex-row items-center">
                    <Icon name="user" size={18} color="black" />
                  </View>
                  <TextInput placeholder="Full name" className="w-full" />
                </View>
               
                <View className="my-5 flex flex-row justify-between bottom-0 ">
                  <TouchableOpacity
                    onPress={handleBack}
                    className="flex flex-row items-center">
                    <Icon name="long-arrow-left" size={18} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleNext}
                    className="bg-orange-700 py-4 px-16 rounded-full">
                    <Text className="text-center text-white text-xl font-bold">
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          {/* fourth page */}
          <View style={{width}} className="p-4">
            <Text className="text-gray-600">Farmer Eats</Text>
            <View>
              <View className="mt-16">
                <Text className="text-4xl text-black">Welcome!</Text>
                <View className="flex flex-row gap-x-8 mt-3">
                  <TouchableOpacity>
                    <Image source={google} className="w-8 h-8" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={apple} className="w-8 h-8" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={fb} className="w-8 h-8" />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="mt-12">
                <View className="flex flex-row gap-x-2 bg-red-100 rounded-xl px-3 my-2">
                  <View className="flex flex-row items-center">
                    <Icon name="user" size={18} color="black" />
                  </View>
                  <TextInput placeholder="Full name" className="w-full" />
                </View>
                <View className="flex flex-row gap-x-2 bg-red-100 rounded-xl px-3 my-2">
                  <View className="flex flex-row items-center">
                    <Icon name="at" size={18} color="black" />
                  </View>
                  <TextInput placeholder="Email address" className="w-full" />
                </View>
                <View className="flex flex-row bg-red-100 rounded-xl px-3 my-2 gap-x-2">
                  <View className="flex flex-row items-center">
                    <Icon name="phone" size={18} color="black" />
                  </View>
                  <TextInput
                    placeholder="Phone number"
                    className="w-full"
                    keyboardType="numeric"
                  />
                </View>
                <View className="flex flex-row gap-x-2 overflow-hidden bg-red-100 rounded-xl px-3 my-2 justify-between">
                  <View className="flex flex-row items-center gap-1">
                    <Icon name="lock" size={20} color="black" />
                    <TextInput
                      placeholder="Password"
                      className=""
                      secureTextEntry
                    />
                  </View>
                </View>
                <View className="flex flex-row gap-x-2 overflow-hidden bg-red-100 rounded-xl px-3 my-2 justify-between">
                  <View className="flex flex-row items-center gap-1">
                    <Icon name="lock" size={20} color="black" />
                    <TextInput
                      placeholder="Re-enter Password"
                      className=""
                      secureTextEntry
                    />
                  </View>
                </View>
                <View className="my-5 flex flex-row justify-between">
                  <TouchableOpacity
                    onPress={handleBack}
                    className="flex flex-row items-center">
                    <Icon name="long-arrow-left" size={18} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleNext}
                    className="bg-orange-700 py-4 px-16 rounded-full">
                    <Text className="text-center text-white text-xl font-bold">
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          {/* fifth page */}
          <View style={{width}} className="p-4">
            <Text className="text-gray-600">Farmer Eats</Text>
            <View>
              <View className="mt-16">
                <Text className="text-4xl text-black">Farm Info</Text>
                <View className="flex flex-row gap-x-8 mt-3">
                  <TouchableOpacity>
                    <Image source={google} className="w-8 h-8" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={apple} className="w-8 h-8" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={fb} className="w-8 h-8" />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="mt-12">
                <View className="flex flex-row gap-x-2 bg-red-100 rounded-xl px-3 my-2">
                  <View className="flex flex-row items-center">
                    <Icon name="user" size={18} color="black" />
                  </View>
                  <TextInput placeholder="Full name" className="w-full" />
                </View>
                <View className="flex flex-row gap-x-2 bg-red-100 rounded-xl px-3 my-2">
                  <View className="flex flex-row items-center">
                    <Icon name="at" size={18} color="black" />
                  </View>
                  <TextInput placeholder="Email address" className="w-full" />
                </View>
                <View className="flex flex-row bg-red-100 rounded-xl px-3 my-2 gap-x-2">
                  <View className="flex flex-row items-center">
                    <Icon name="phone" size={18} color="black" />
                  </View>
                  <TextInput
                    placeholder="Phone number"
                    className="w-full"
                    keyboardType="numeric"
                  />
                </View>
                <View className="flex flex-row gap-x-2 overflow-hidden bg-red-100 rounded-xl px-3 my-2 justify-between">
                  <View className="flex flex-row items-center gap-1">
                    <Icon name="lock" size={20} color="black" />
                    <TextInput
                      placeholder="Password"
                      className=""
                      secureTextEntry
                    />
                  </View>
                </View>
                <View className="flex flex-row gap-x-2 overflow-hidden bg-red-100 rounded-xl px-3 my-2 justify-between">
                  <View className="flex flex-row items-center gap-1">
                    <Icon name="lock" size={20} color="black" />
                    <TextInput
                      placeholder="Re-enter Password"
                      className=""
                      secureTextEntry
                    />
                  </View>
                </View>
                <View className="my-5 flex flex-row justify-between">
                  <TouchableOpacity
                    onPress={handleBack}
                    className="flex flex-row items-center">
                    <Icon name="long-arrow-left" size={18} color="black" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleNext}
                    className="bg-orange-700 py-4 px-16 rounded-full">
                    <Text className="text-center text-white text-xl font-bold">
                      Continue
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          {/* sixth page */}
          <View style={{width}} className="p-4">
            <Text className="text-gray-600">Farmer Eats</Text>
            <View>
              <View className="mt-16">
                <Text className="text-4xl text-black">Welcome!</Text>
                <View className="flex flex-row gap-x-8 mt-3">
                  <TouchableOpacity>
                    <Image source={google} className="w-8 h-8" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={apple} className="w-8 h-8" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={fb} className="w-8 h-8" />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="mt-12">
                <View className="flex flex-row gap-x-2 bg-red-100 rounded-xl px-3 my-2">
                  <View className="flex flex-row items-center">
                    <Icon name="user" size={18} color="black" />
                  </View>
                  <TextInput placeholder="Full name" className="w-full" />
                </View>
                <View className="flex flex-row gap-x-2 bg-red-100 rounded-xl px-3 my-2">
                  <View className="flex flex-row items-center">
                    <Icon name="at" size={18} color="black" />
                  </View>
                  <TextInput placeholder="Email address" className="w-full" />
                </View>
                <View className="flex flex-row bg-red-100 rounded-xl px-3 my-2 gap-x-2">
                  <View className="flex flex-row items-center">
                    <Icon name="phone" size={18} color="black" />
                  </View>
                  <TextInput
                    placeholder="Phone number"
                    className="w-full"
                    keyboardType="numeric"
                  />
                </View>
                <View className="flex flex-row gap-x-2 overflow-hidden bg-red-100 rounded-xl px-3 my-2 justify-between">
                  <View className="flex flex-row items-center gap-1">
                    <Icon name="lock" size={20} color="black" />
                    <TextInput
                      placeholder="Password"
                      className=""
                      secureTextEntry
                    />
                  </View>
                </View>
                <View className="flex flex-row gap-x-2 overflow-hidden bg-red-100 rounded-xl px-3 my-2 justify-between">
                  <View className="flex flex-row items-center gap-1">
                    <Icon name="lock" size={20} color="black" />
                    <TextInput
                      placeholder="Re-enter Password"
                      className=""
                      secureTextEntry
                    />
                  </View>
                </View>
                <View className="my-5 flex flex-row justify-between">
                  {/* <TouchableOpacity onPress={handleBack} className="flex flex-row items-center">
                    <Icon name="long-arrow-left" size={18} color="black" />
                  </TouchableOpacity> */}
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    className="bg-orange-700 py-4 px-16 rounded-full">
                    <Text className="text-center text-white text-xl font-bold">
                      Got it!
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
