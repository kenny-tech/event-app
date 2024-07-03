import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Signup = ({navigation}: any) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{marginBottom: 10}}>Sign In Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text style={{marginBottom: 10}}>Go to Sign In Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
        <Text>Go to Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
