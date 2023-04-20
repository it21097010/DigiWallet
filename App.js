import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import AddCreditCard from './app/assets/screens/WelcomeScreen';

export default function Home() {
  const [showAddCard, setShowAddCard] = React.useState(false);

  const handleBiometricAuth = async () => {
    const { success } = await LocalAuthentication.authenticateAsync();
    if (success) {
      // User authenticated successfully
      setShowAddCard(true);
    } else {
      // User canceled or there was an error during authentication
      setShowAddCard(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>DigiWallet</Text>
      </View>
     
      <TouchableOpacity style={styles.addButton} onPress={handleBiometricAuth}>
        <Text style={styles.buttonText}>Scan Fingerprint</Text>
      </TouchableOpacity>

      {showAddCard && <AddCreditCard />}

      <Text style={styles.text}>Scan your fingerprint to verify your identity</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  card: {
    width: 300,
    height: 150,
    backgroundColor: 'transparent',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 30,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(135deg, #ff85ec 0%, #84ff98 100%)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#007aff',
    padding: 100,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
  },
});
