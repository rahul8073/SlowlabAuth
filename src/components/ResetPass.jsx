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

export default function ResetPass() {
    const navigation=useNavigation();

    const handleSubmit=()=>{
        navigation.navigate("Login")
    }
  return (
    <View className="flex flex-1 bg-white p-5 ">
      <Text className="text-gray-600">Farmer Eats</Text>
      <View>
        <View className="mt-16">
          <Text className="text-4xl text-black">Reset-password?</Text>
          <View className="flex flex-row">
            <Text className="">Remember your password?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
              <Text className="text-orange-700">Login</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-12">
          <View className="flex flex-row bg-red-100 rounded-xl px-3 my-2">
            <View className="flex flex-row items-center">
              <Icon name="lock" size={18} color="black" />
            </View>
            <TextInput placeholder="New Password" className="w-full" />
          </View>
          <View className="flex flex-row bg-red-100 rounded-xl px-3 my-2">
            <View className="flex flex-row items-center">
              <Icon name="lock" size={18} color="black" />
            </View>
            <TextInput placeholder="Confirm new Password" className="w-full" />
          </View>
        
          <View className="my-5">
            <TouchableOpacity onPress={()=>handleSubmit()} className="bg-green-700 py-4 rounded-full">
              <Text className="text-center text-white text-xl font-bold">
               Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
