import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

const tutorsData = [
  { id: '1', name: 'Tutor 1', subject: 'Math', level: 'Intermediate', bio: 'Experienced math tutor with a passion for teaching.' },
  { id: '2', name: 'Tutor 2', subject: 'Science', level: 'Advanced', bio: 'Science enthusiast with years of teaching experience.' },
  { id: '3', name: 'Tutor 3', subject: 'English', level: 'Beginner', bio: 'Dedicated English tutor focused on building strong language skills.' },
  { id: '4', name: 'Tutor 4', subject: 'History', level: 'Advanced', bio: 'Passionate historian eager to share knowledge about the past.' },
  { id: '5', name: 'Tutor 5', subject: 'Programming', level: 'Advanced', bio: 'Experienced programmer helping students master coding concepts.' },
  { id: '6', name: 'Tutor 6', subject: 'Art', level: 'Intermediate', bio: 'Creative art tutor inspiring students to explore their artistic talents.' },
  // Add more tutors as needed
];

const TutorListScreen = () => {
  const [selectedModule, setSelectedModule] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedTutor, setSelectedTutor] = useState(null);

  const filteredTutors = tutorsData.filter(tutor => {
    return (
      (selectedModule === '' || tutor.subject.toLowerCase() === selectedModule.toLowerCase()) &&
      (selectedLevel === '' || tutor.level === selectedLevel)
    );
  });

  const handleSelectTutor = tutor => {
    setSelectedTutor(tutor);
  };

  const handleBookTutor = () => {
    if (selectedTutor) {
      // Implement your booking logic here
      console.log(`Booked ${selectedTutor.name}`);
    }
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
        <Button title="Apply Filters" onPress={() => {}} />
      </View>
      <FlatList
        data={filteredTutors}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.tutorItem,
              selectedTutor === item && styles.selectedTutorItem,
            ]}
            onPress={() => handleSelectTutor(item)}
          >
            <Text style={styles.tutorName}>{item.name}</Text>
            <Text>{item.subject}</Text>
            <Text>{item.level}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
      {selectedTutor && (
        <View style={styles.selectedTutorDetails}>
          <Text style={styles.tutorName}>{selectedTutor.name}</Text>
          <Text>Subject: {selectedTutor.subject}</Text>
          <Text>Level: {selectedTutor.level}</Text>
          <Text>Bio: {selectedTutor.bio}</Text>
          <Button title="Book Tutor" onPress={handleBookTutor} />
        </View>
      )}
    </SafeAreaView>
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
  selectedTutorItem: {
    backgroundColor: '#f0f0f0',
  },
  tutorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedTutorDetails: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
});

export default TutorListScreen;
