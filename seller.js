import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const sellers = [
  { id: '1', name: 'Furniture', details: 'Karabo' },
  { id: '2', name: 'Electronics', details: 'Lesego' },
  { id: '3', name: 'Accessories', details: 'Dineo' },
  // Add more sellers as needed
];

const SellersScreen = () => {
  const [selectedSeller, setSelectedSeller] = useState(null);

  const renderSellerItem = ({ item }) => (
    <TouchableOpacity
      style={styles.sellerItem}
      onPress={() => setSelectedSeller(item)}
    >
      <Text style={styles.sellerName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
   
    <View style={styles.container}>
      <Text style={styles.title}> catergory</Text>
      <FlatList
        data={sellers}
        renderItem={renderSellerItem}
        keyExtractor={item => item.id}
      />
      {selectedSeller && (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>sellers</Text>
          <Text style={styles.detailsText}>{selectedSeller.details}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sellerItem: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  sellerName: {
    fontSize: 18,
  },
  detailsContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  detailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 16,
  },
});

export default SellersScreen;