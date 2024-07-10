import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const organizations = [
  {
    organisationLogoPictureUrl:
      "https://srgreligiondevuks01-endpoint-athsb4e3gjbhbbf5.z01.azurefd.net/files/pictures/b2acfd30-0a10-428d-aa46-8599b5053f6b.jpeg",

    isActive: true,

    publishDate: "2024-06-26T14:44:50.370Z",

    isHostMinistering: false,

    organisationId: "ed178bb2-40bd-ee11-b660-6045bdd0e5c0",

    programmeTypeId: 1,

    ministerAzId: null,

    title: "Youth",

    venueName: "REDEEMED CHR.",

    description: "Amen Convention",

    endTime: "2024-08-28T23:00:00.000Z",

    startTime: "2024-06-25T23:00:00.000Z",

    houseNumber: "STRING",

    addressLine1: "string",

    addressLine2: "String",

    addressLine3: "STRING",

    code: "YO2406261544Y1J",

    postCode: "string",

    city: "String",

    state: "string",

    venueLatitude: "06082315",

    venueLongitude: "79841417",

    speaker1Name: "ghghgh ghg",

    speaker2Name: null,

    speaker3Name: null,

    advertPictureId: null,

    advertVideoId: null,

    advertAudioId: null,

    writeUpPdfId: null,

    ministerEmailAddress: "masterStaff@masterOrgan.onmicrosoft.com",

    ministerName: "master staff",

    isCurrentLocation: true,

    advertPictureUrl: null,

    advertVideoUrl: null,

    advertAudioUrl: null,

    writeUpPdfUrl: null,

    organisationName: "REDEEMED CHRISTIAN CHURCH OF GOD",

    programmeTypeName: "Service",

    activityVideoUrl: null,

    activityAudioUrl: null,

    organisationLogoPictureId: "b2acfd30-0a10-428d-aa46-8599b5053f6b",

    activityPictures: [],

    createdDate: "2024-06-26T14:44:41.000Z",

    updatedDate: null,

    updatedBy: null,

    createdBy: "443340db-8456-4bd9-9040-38ab16a6415c",

    id: "59b22b06-d333-ef11-86c3-6045bdcfca68",
  },

  {
    organisationLogoPictureUrl:
      "https://srgreligiondevuks01-endpoint-athsb4e3gjbhbbf5.z01.azurefd.net/files/pictures/b2acfd30-0a10-428d-aa46-8599b5053f6b.jpeg",

    isActive: true,

    publishDate: "2024-06-25T10:14:34.817Z",

    isHostMinistering: false,

    organisationId: "ed178bb2-40bd-ee11-b660-6045bdd0e5c0",

    programmeTypeId: 2,

    ministerAzId: null,

    title: "Pastors Night",

    venueName: "REDEEMED CHR.",

    description: "great programme",

    endTime: "2024-07-12T10:12:48.000Z",

    startTime: "2024-06-29T10:12:39.000Z",

    houseNumber: "STRING",

    addressLine1: "string",

    addressLine2: "String",

    addressLine3: "STRING",

    code: "PA2406251114WEU",

    postCode: "string",

    city: "String",

    state: "string",

    venueLatitude: "06082315",

    venueLongitude: "79841417",

    speaker1Name: "vvbbb",

    speaker2Name: null,

    speaker3Name: null,

    advertPictureId: null,

    advertVideoId: null,

    advertAudioId: null,

    writeUpPdfId: null,

    ministerEmailAddress: "masterStaff@masterOrgan.onmicrosoft.com",

    ministerName: "Dan",

    isCurrentLocation: true,

    advertPictureUrl: null,

    advertVideoUrl: null,

    advertAudioUrl: null,

    writeUpPdfUrl: null,

    organisationName: "REDEEMED CHRISTIAN CHURCH OF GOD",

    programmeTypeName: "Event",

    activityVideoUrl: null,

    activityAudioUrl: null,

    organisationLogoPictureId: "b2acfd30-0a10-428d-aa46-8599b5053f6b",

    activityPictures: [],

    createdDate: "2024-06-25T10:14:24.000Z",

    updatedDate: null,

    updatedBy: null,

    createdBy: "443340db-8456-4bd9-9040-38ab16a6415c",

    id: "d973821a-e432-ef11-86c3-6045bdc1bc02",
  },
];
const Company = () => {
  const [code, setCode] = useState("");
  const [company, setCompany] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    const foundCompany = organizations.find((comp) => comp.code === code.trim());
    if (foundCompany) {
      setCompany(foundCompany);
      setError("");
    } else {
      setCompany(null);
      setError("No organization found");
    }
  };

  const handleKeyPress = (e) => {
    if (e.nativeEvent.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter organization code"
        value={code}
        onChangeText={setCode}
        onKeyPress={handleKeyPress}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      {company && (
        <View style={styles.companyDetails}>
          <Image
          style={styles.image}
          source={{ uri: company.organisationLogoPictureUrl }}
          resizeMode="cover"
        />
          <Text style={styles.companyText}>Title: {company.title}</Text>
          <Text style={styles.companyText}>Venue Name: {company.venueName}</Text>
          <Text style={styles.companyText}>Description: {company.description}</Text>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>I am a first timer</Text>
          </TouchableOpacity>
        </View>
      )}
      {error ? <Text style={styles.error}>{error}</Text> : null}
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
  buttonText: {
    color: "#fff",
    fontSize: 16,
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
    fontSize: 16,
    marginBottom: 5,
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

export default Company;
