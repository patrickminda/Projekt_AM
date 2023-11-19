import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Tutaj możesz dodać logikę uwierzytelniania
    // W tym przykładzie, po prostu przekierowujemy do innego ekranu
    navigation.navigate('Home'); // Zakładając, że istnieje ekran o nazwie 'Home'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Witaj z powrotem!</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Hasło"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Zaloguj się</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'green',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  inputContainer: {
    marginBottom: 16,
    width: '100%',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#cccccc',
    backgroundColor: '#3498db',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default LoginScreen;
