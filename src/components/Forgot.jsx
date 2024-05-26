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
import { useNavigation } from '@react-navigation/native';

export default function Forgot() {
    const navigation=useNavigation();

    const sendCode=()=>{
        navigation.navigate("login-otp")
    }
  return (
    <View className="flex flex-1 bg-white p-5 ">
      <Text className="text-gray-600">Farmer Eats</Text>
      <View>
        <View className="mt-16">
          <Text className="text-4xl text-black">ForGot Password?</Text>
          <View className="flex flex-row">
            <Text className="">Remember your password?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
              <Text className="text-orange-700">Login</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-12">
          <View className="flex flex-row bg-red-100 rounded-xl px-3 my-2 gap-x-2">
            <View className="flex flex-row items-center">
              <Icon name="phone" size={18} color="black" />
            </View>
            <TextInput placeholder="Phone Number" className="w-full" keyboardType='numeric'/>
          </View>
        
          <View className="my-5">
            <TouchableOpacity onPress={()=>sendCode()} className="bg-orange-700 py-4 rounded-full">
              <Text className="text-center text-white text-xl font-bold">
               Send Code
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
