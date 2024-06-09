import React, { useRef, useState, useEffect } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import { launchImageLibrary } from 'react-native-image-picker';
import cameraicon from '../assets/cameraIcon.png';
import axios from 'axios';
const { width } = Dimensions.get('window');

const initialBusinessHours = {
  mon: [],
  tue: [],
  wed: [],
  thu: [],
  fri: [],
  sat: [],
  sun: [],
};

const dayMapping = {
  M: 'mon',
  T: 'tue',
  W: 'wed',
  Th: 'thu',
  F: 'fri',
  S: 'sat',
  Su: 'sun',
};

export default function SignUp() {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState('mon');
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [businessHours, setBusinessHours] = useState(initialBusinessHours);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'farmer',
    business_name: '',
    informal_name: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    registration_proof: null,
    business_hours: {},
    device_token: '0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx',
    type: 'email',
    social_id: '0imfnc8mVLWwsAawjYr4Rx-Af50DDqtlx',
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      business_hours: businessHours,
    }));
  }, [businessHours]);

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

  const days = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'];
  const scheduling = [
    '8:00am - 10:00am',
    '10:00am - 01:00pm',
    '1:00pm - 4:00pm',
    '4:00pm - 7:00pm',
    '7:00pm - 10:00pm',
  ];

  const handleDaySelect = (day) => {
    const mappedDay = dayMapping[day];
    setSelectedDay(mappedDay);
    setSelectedTimes(businessHours[mappedDay]);
  };

  const handleTimeSelect = (time) => {
    setSelectedTimes((prev) => {
      const updatedTimes = prev.includes(time)
        ? prev.filter((t) => t !== time)
        : [...prev, time];
      
      setBusinessHours((prevHours) => ({
        ...prevHours,
        [selectedDay]: updatedTimes,
      }));

      return updatedTimes;
    });
  };

  const handleImagePicker = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setFormData({
          ...formData,
          registration_proof: response.assets[0].uri,
        });
      }
    });
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('sowlab.com/assignment/user/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response: ', response.data);
      // Handle successful response
    } catch (error) {
      console.error('Error submitting form: ', error);
      // Handle error response
    }
  };

  return (
    <ScrollView className="flex flex-1 bg-white">
      <ScrollView
        horizontal={true}
        pagingEnabled
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}>
        <View className="flex flex-row">
          {/* first page */}
          <View style={{ width }} className="p-4">
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
                  <TextInput
                    placeholder="Full name"
                    className="w-full"
                    value={formData.full_name}
                    onChangeText={(text) => handleInputChange('full_name', text)}
                  />
                </View>
                <View className="flex flex-row gap-x-2 bg-red-100 rounded-xl px-3 my-2">
                  <View className="flex flex-row items-center">
                    <Icon name="at" size={18} color="black" />
                  </View>
                  <TextInput
                    placeholder="Email address"
                    className="w-full"
                    value={formData.email}
                    onChangeText={(text) => handleInputChange('email', text)}
                  />
                </View>
                <View className="flex flex-row bg-red-100 rounded-xl px-3 my-2 gap-x-2">
                  <View className="flex flex-row items-center">
                    <Icon name="phone" size={18} color="black" />
                  </View>
                  <TextInput
                    placeholder="Phone number"
                    className="w-full"
                    keyboardType="numeric"
                    value={formData.phone}
                    onChangeText={(text) => handleInputChange('phone', text)}
                  />
                </View>
                <View className="flex flex-row gap-x-2 overflow-hidden bg-red-100 rounded-xl px-3 my-2 justify-between">
                  <View className="flex flex-row items-center gap-1">
                    <Icon name="lock" size={20} color="black" />
                    <TextInput
                      placeholder="Password"
                      className=""
                      value={formData.password}
                      onChangeText={(text) => handleInputChange('password', text)}
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
                      value={formData.confirmPassword}
                      onChangeText={(text) =>
                        handleInputChange('confirmPassword', text)
                      }
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
          <View style={{ width }} className="p-4">
            <Text className="text-gray-600">Farmer Eats</Text>
            <View>
              <View className="mt-16">
                <Text className="text-4xl text-black">Business Information</Text>
                <View className="mt-12">
                  <View className="flex flex-row gap-x-2 bg-red-100 rounded-xl px-3 my-2">
                    <View className="flex flex-row items-center">
                      <Icon name="industry" size={18} color="black" />
                    </View>
                    <TextInput
                      placeholder="Business Name"
                      className="w-full"
                      value={formData.business_name}
                      onChangeText={(text) =>
                        handleInputChange('business_name', text)
                      }
                    />
                  </View>
                  <View className="flex flex-row gap-x-2 bg-red-100 rounded-xl px-3 my-2">
                    <View className="flex flex-row items-center">
                      <Icon name="id-card" size={18} color="black" />
                    </View>
                    <TextInput
                      placeholder="Informal Name"
                      className="w-full"
                      value={formData.informal_name}
                      onChangeText={(text) =>
                        handleInputChange('informal_name', text)
                      }
                    />
                  </View>
                  <View className="flex flex-row bg-red-100 rounded-xl px-3 my-2 gap-x-2">
                    <View className="flex flex-row items-center">
                      <Icon name="map-marker" size={18} color="black" />
                    </View>
                    <TextInput
                      placeholder="Address"
                      className="w-full"
                      value={formData.address}
                      onChangeText={(text) => handleInputChange('address', text)}
                    />
                  </View>
                  <View className="flex flex-row bg-red-100 rounded-xl px-3 my-2 gap-x-2">
                    <View className="flex flex-row items-center">
                      <Icon name="building" size={18} color="black" />
                    </View>
                    <TextInput
                      placeholder="City"
                      className="w-full"
                      value={formData.city}
                      onChangeText={(text) => handleInputChange('city', text)}
                    />
                  </View>
                  <View className="flex flex-row bg-red-100 rounded-xl px-3 my-2 gap-x-2">
                    <View className="flex flex-row items-center">
                      <Icon name="map" size={18} color="black" />
                    </View>
                    <TextInput
                      placeholder="State"
                      className="w-full"
                      value={formData.state}
                      onChangeText={(text) => handleInputChange('state', text)}
                    />
                  </View>
                  <View className="flex flex-row bg-red-100 rounded-xl px-3 my-2 gap-x-2">
                    <View className="flex flex-row items-center">
                      <Icon name="envelope" size={18} color="black" />
                    </View>
                    <TextInput
                      placeholder="Zip Code"
                      className="w-full"
                      keyboardType="numeric"
                      value={formData.zip_code}
                      onChangeText={(text) => handleInputChange('zip_code', text)}
                    />
                  </View>
                  <View className="my-5 flex flex-row justify-between">
                    <TouchableOpacity
                      onPress={handleBack}
                      className="flex flex-row items-center">
                      <Text className="text-center black underline text-xl">
                        Back
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
          </View>
          {/* third page */}
          <View style={{ width }} className="p-4">
            <Text className="text-gray-600">Farmer Eats</Text>
            <View>
              <View className="mt-16">
                <Text className="text-4xl text-black">Registration Proof</Text>
                <TouchableOpacity
                  onPress={handleImagePicker}
                  className="border-2 border-dashed border-gray-300 p-4 rounded-xl my-8 flex items-center justify-center">
                  <Image source={cameraicon} className="w-16 h-16 mb-4" />
                  <Text className="text-gray-500">Upload Registration Proof</Text>
                </TouchableOpacity>
                {formData.registration_proof && (
                  <Image
                    source={{ uri: formData.registration_proof }}
                    className="w-full h-64 rounded-xl"
                  />
                )}
                <View className="my-5 flex flex-row justify-between">
                  <TouchableOpacity
                    onPress={handleBack}
                    className="flex flex-row items-center">
                    <Text className="text-center black underline text-xl">
                      Back
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
          {/* fourth page */}
          <View style={{ width }} className="p-4">
            <Text className="text-gray-600">Farmer Eats</Text>
            <View>
              <View className="mt-16">
                <Text className="text-4xl text-black">Business Hours</Text>
                <View className="my-8">
                  <View className="flex flex-row justify-around">
                    {days.map((day) => (
                      <TouchableOpacity
                        key={day}
                        className={`px-2 py-1 rounded-lg ${
                          selectedDay === dayMapping[day] ? 'bg-orange-700' : 'bg-gray-200'
                        }`}
                        onPress={() => handleDaySelect(day)}>
                        <Text
                          className={`${
                            selectedDay === dayMapping[day] ? 'text-white' : 'text-black'
                          }`}>
                          {day}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                  <View className="mt-4">
                    {scheduling.map((time) => (
                      <TouchableOpacity
                        key={time}
                        className={`px-4 py-2 my-1 rounded-lg ${
                          selectedTimes.includes(time) ? 'bg-orange-700' : 'bg-gray-200'
                        }`}
                        onPress={() => handleTimeSelect(time)}>
                        <Text
                          className={`${
                            selectedTimes.includes(time) ? 'text-white' : 'text-black'
                          }`}>
                          {time}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
                <View className="my-5 flex flex-row justify-between">
                  <TouchableOpacity
                    onPress={handleBack}
                    className="flex flex-row items-center">
                    <Text className="text-center black underline text-xl">
                      Back
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    className="bg-orange-700 py-4 px-16 rounded-full">
                    <Text className="text-center text-white text-xl font-bold">
                      Submit
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
}
