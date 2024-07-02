import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Signin = ({navigation}: any) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{marginBottom: 10}}>Sign In Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={{marginBottom: 10}}>Go to Sign Up Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
        <Text>Go to Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;
