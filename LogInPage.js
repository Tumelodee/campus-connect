import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const App = ({navigation}) => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  const handleLogin = () => {
    
    // Add your login logic here
    // Once the login is successful, you can perform actions
    // like navigating to another screen or performing other tasks.
  };

  const handleForgotPassword = () => {
    // Add your logic for handling forgot password here
  };

  return (
    <SafeAreaView>
      <Text style={styles.title}>Welcome to Campus Connect</Text>
      <Text style={styles.subtitle}>Discover, Connect, and Learn Together</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        returnKeyType="go"
        secureTextEntry
        autoCorrect={true}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={{handleForgotPassword,}}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </SafeAreaView>
 
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "dodgerblue",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "#000000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 200,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginBottom: 40,
    marginTop: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
    marginLeft: 60,
    marginRight: 60,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  forgotPasswordText: {
    color: "#007bff",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
})
