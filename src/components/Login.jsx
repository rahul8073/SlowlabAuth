import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import google from '../assets/google.png';
import fb from '../assets/fb.png';
import apple from '../assets/apple.png';

export default function Login() {
  return (
    <View className="flex flex-1 bg-white p-5 ">
      <Text className="text-gray-600">Farmer Eats</Text>
      <View>
        <View className="mt-16">
          <Text className="text-4xl text-black">Welcome Back!</Text>
          <View className="flex flex-row">
            <Text className="">New here?</Text>
            <TouchableOpacity>
              <Text className="text-orange-700">Create account</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-12">
          <View className="flex flex-row bg-red-100 rounded-xl px-3 my-2">
            <View className="flex flex-row items-center">
              <Icon name="at" size={18} color="black" />
            </View>
            <TextInput placeholder="Email address" className="w-full" />
          </View>
          <View className="flex flex-row flex-wrap overflow-hidden bg-red-100 rounded-xl px-3 my-2 justify-between">
            <View className="flex flex-row items-center  gap-1 ">
              <Icon name="lock" size={20} color="black" />
              <View>
                <TextInput placeholder="Password" className="" />
              </View>
            </View>
            <View className="flex flex-row items-center ">
              <TouchableOpacity>
                <Text className="text-red-500">Forgot?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="my-5">
            <TouchableOpacity className="bg-green-700 py-4 rounded-full">
              <Text className="text-center text-white text-xl font-bold">
                Login
              </Text>
            </TouchableOpacity>
          </View>
          <Text>or Login with</Text>
          <View className="flex flex-row justify-between mt-3">
            <TouchableOpacity className="border rounded-full p-1 w-20 h-12 flex flex-row items-center justify-center">
              <Image source={google} className=" w-8 h-8" />
            </TouchableOpacity>
            <TouchableOpacity className="border rounded-full p-1 w-20 h-12 flex flex-row items-center justify-center">
              <Image source={apple} className=" w-8 h-8" />
            </TouchableOpacity>
            <TouchableOpacity className="border rounded-full p-1 w-20 h-12 flex flex-row items-center justify-center">
              <Image source={fb} className=" w-8 h-8" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
