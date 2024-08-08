import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";


const Profile = () => {

  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50, // Add padding to the top
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonFirstTimer: {
    backgroundColor: "#808080",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: 'Montserrat_500Medium',
  },
  companyDetails: {
    marginTop: 20,
    marginBottom: 10,
    padding: 20,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
    borderColor: "#ddd",
    borderWidth: 1,
  },
  companyText: {
    fontSize: 14,
    marginBottom: 5,
    fontFamily: 'Montserrat_500Medium',
  },
  error: {
    color: "red",
    marginTop: 20,
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Profile;
