import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, { useRef, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import google from '../assets/google.png';
import fb from '../assets/fb.png';
import apple from '../assets/apple.png';
import { useNavigation } from '@react-navigation/native';

export default function VerifyPass() {
  const length = 5; // Hardcoded OTP length
  const [otp, setOtp] = useState(new Array(length).fill(''));
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Focus next input field
    if (text && index < length - 1) {
      inputs.current[index + 1].focus();
    }

    // Clear input if empty and not at the first input
    if (!text && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const navigation=useNavigation();

const handleSubmit=()=>{
    navigation.navigate("login-reset password")
}

  return (
    <View className="flex flex-1 bg-white p-5 ">
      <Text className="text-gray-600">Farmer Eats</Text>
      <View>
        <View className="mt-16">
          <Text className="text-4xl text-black">Verify OTP</Text>
          <View className="flex flex-row">
            <Text className="">Remember your password?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
              <Text className="text-orange-700">Login</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-12">
          <View className="flex flex-row  rounded-xl px-3 my-2 justify-between">
            {Array(length)
              .fill()
              .map((_, index) => (
                <TextInput
                  key={index}
                  onChangeText={text => handleChange(text, index)}
                  keyboardType="numeric"
                  maxLength={1}
                  ref={el => (inputs.current[index] = el)}
                  className='bg-gray-400 w-10 rounded-xl'
                />
              ))}
          </View>

          <View className="my-5">
            <TouchableOpacity onPress={()=>handleSubmit()} className="bg-green-700 py-4 rounded-full">
              <Text className="text-center text-white text-xl font-bold">
                Submit
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
          <Text className="underline text-center text-lg">Resend</Text>

          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
