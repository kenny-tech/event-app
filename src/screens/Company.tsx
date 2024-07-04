import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const mockCompanies = [
  { code: '123', name: 'Company One', address: '10 John St', phone: '08022332233' },
  { code: '456', name: 'Company Two', address: '5 Peter St', phone: '08035332233' },
  { code: '789', name: 'Company Three', address: '12 Sam St', phone: '08023332233' },
];

const Company = () => {
  const [code, setCode] = useState('');
  const [company, setCompany] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    const foundCompany = mockCompanies.find(comp => comp.code === code);
    if (foundCompany) {
      setCompany(foundCompany);
      setError('');
    } else {
      setCompany(null);
      setError('Company does not exist.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.nativeEvent.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter company code"
        value={code}
        onChangeText={setCode}
        onKeyPress={handleKeyPress}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      {company && (
        <View style={styles.companyDetails}>
          <Text style={styles.companyText}>Name: {company.name}</Text>
          <Text style={styles.companyText}>Address: {company.address}</Text>
          <Text style={styles.companyText}>Phone: {company.phone}</Text>
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
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  companyDetails: {
    marginTop: 20,
    padding: 20,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  companyText: {
    fontSize: 16,
    marginBottom: 5,
  },
  error: {
    color: 'red',
    marginTop: 20,
    fontSize: 16,
  },
});

export default Company;
