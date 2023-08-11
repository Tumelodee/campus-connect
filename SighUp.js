import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';


const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUp = () => {
    // Add your sign-up logic here
    if (password === confirmPassword) {
      // Perform sign-up actions
    } else {
      // Show an error message that passwords don't match
    }
  };

  return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={text => setFirstName(text)}
        value={firstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={text => setConfirmPassword(text)}
        value={confirmPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={text => setPhoneNumber(text)}
        value={phoneNumber}
        keyboardType="phone-pad"

      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={text => setLastName(text)}
        value={lastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email (Gmail)"
        onChangeText={text => setEmail(text)}
        value={email}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  checkbox: {
    alignSelf: "center",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
})