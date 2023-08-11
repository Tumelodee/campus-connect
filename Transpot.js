import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const TransportBooking = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const searchTransport = () => {
    // Simulate searching for transport options
    const mockOptions = [
      { type: 'car', price: 50, seats: 4 },
      { type: 'bus', price: 20, seats: 30 },
      { type: 'train', price: 30, seats: 100 },
    ];
    setOptions(mockOptions);
  };

  const bookTransport = () => {
    if (selectedOption) {
      // Simulate booking a transport option
      const confirmation = `Booking confirmed for ${selectedOption.type} at $${selectedOption.price}. Have a safe trip!`;
      alert(confirmation);
    }
  };

  return (
  
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Transport Booking</Text>
      <TextInput
        style={styles.input}
        placeholder="Source"
        value={source}
        onChangeText={setSource}
      />
      <TextInput
        style={styles.input}
        placeholder="Destination"
        value={destination}
        onChangeText={setDestination}
      />
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />
      <Button title="Search Transport" onPress={searchTransport} />
      <Text style={styles.optionsHeading}>Available options:</Text>
      <FlatList
        data={options}
        renderItem={({ item }) => (
          <View style={styles.optionContainer}>
            <Text>{`Type: ${item.type}, Price: $${item.price}, Seats: ${item.seats}`}</Text>
            <Button title="Book" onPress={() => setSelectedOption(item)} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Book Selected Transport" onPress={bookTransport} />
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    marginBottom: 8,
    padding: 8,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
  },
  optionsHeading: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: 18,
  },
  optionContainer: {
    marginBottom: 8,
  },
});

export default TransportBooking;
