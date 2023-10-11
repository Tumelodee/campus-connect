import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const tutorsData = [
  { id: '1', name: 'Tutor 1', subject: 'Math', level: 'Intermediate', bio: 'Experienced math tutor with a passion for teaching.', rating: 4.5 },
  { id: '2', name: 'Tutor 2', subject: 'Science', level: 'Advanced', bio: 'Science enthusiast with years of teaching experience.', rating: 4.0 },
  { id: '3', name: 'Tutor 3', subject: 'English', level: 'Beginner', bio: 'Dedicated English tutor focused on building strong language skills.', rating: 4.2 },
  { id: '4', name: 'Tutor 4', subject: 'History', level: 'Advanced', bio: 'Passionate historian eager to share knowledge about the past.', rating: 4.7 },
  { id: '5', name: 'Tutor 5', subject: 'Programming', level: 'Advanced', bio: 'Experienced programmer helping students master coding concepts.', rating: 4.9 },
  { id: '6', name: 'Tutor 6', subject: 'Art', level: 'Intermediate', bio: 'Creative art tutor inspiring students to explore their artistic talents.', rating: 4.3 },
  { id: '7', name: 'Tutor 7', subject: 'Music', level: 'Beginner', bio: 'Passionate music tutor offering lessons in various instruments and music theory.', rating: 4.8 },
  { id: '8', name: 'Tutor 8', subject: 'Physics', level: 'Advanced', bio: 'Physics expert with a knack for simplifying complex concepts.', rating: 4.6 },
  { id: '9', name: 'Tutor 9', subject: 'Chemistry', level: 'Intermediate', bio: 'Chemistry enthusiast dedicated to making chemistry fun and understandable.', rating: 4.4 },
  { id: '10', name: 'Tutor 10', subject: 'Biology', level: 'Advanced', bio: 'Biology teacher with a focus on hands-on learning and practical experiments.', rating: 4.2 },
  // Add more tutors as needed
];


const Stack = createNativeStackNavigator();

const TutorListScreen = ({ navigation }) => {
  const [selectedModule, setSelectedModule] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [filteredTutors, setFilteredTutors] = useState(tutorsData); // Initialize with all tutors

  const handleApplyFilters = () => {
    const filteredTutors = tutorsData.filter(tutor => {
      return (
        (selectedModule === '' || tutor.subject.toLowerCase() === selectedModule.toLowerCase()) &&
        (selectedLevel === '' || tutor.level === selectedLevel)
      );
    });

    if (filteredTutors.length === 0) {
      Alert.alert('No Tutors Found', 'There are no tutors available for the specified module or level.');
    } else {
      setFilteredTutors(filteredTutors);
    }
  };

  const handleSelectTutor = tutor => {
    navigation.navigate('TutorProfile', { tutor });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.filterContainer}>
        <TextInput
          style={styles.input}
          placeholder="Module"
          value={selectedModule}
          onChangeText={setSelectedModule}
        />
        <TextInput
          style={styles.input}
          placeholder="Level"
          value={selectedLevel}
          onChangeText={setSelectedLevel}
        />
        <Button title="Apply Filters" onPress={handleApplyFilters} />
      </View>
      <FlatList
        data={filteredTutors}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.tutorItem,
            ]}
            onPress={() => handleSelectTutor(item)}
          >
            <Text style={styles.tutorName}>{item.name}</Text>
            <Text>{item.subject}</Text>
            <Text>Rating: {item.rating}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const TutorProfileScreen = ({ route }) => {
  const { tutor } = route.params;

  const handleBookTutor = () => {
    Alert.alert(
      'Confirm Booking',
      `Are you sure you want to book ${tutor.name}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Book',
          onPress: () => {
            // Perform booking logic here
            console.log(`Booked ${tutor.name}`);
            Alert.alert('Booking Successful', `You have successfully booked ${tutor.name}.`);
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tutorName}>{tutor.name}</Text>
      <Text>Subject: {tutor.subject}</Text>
      <Text>Level: {tutor.level}</Text>
      <Text>Bio: {tutor.bio}</Text>
      {/* Book Tutor button on the tutor's profile */}
      <Button title="Book Tutor" onPress={handleBookTutor} />
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TutorList" component={TutorListScreen} />
        <Stack.Screen name="TutorProfile" component={TutorProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginRight: 8,
  },
  tutorItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  tutorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
