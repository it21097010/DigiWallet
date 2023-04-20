import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function AddCreditCard() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleAddCard = () => {
    // Implement card addition logic here
    console.log('Card added!');
    navigation.goBack();
  }
  const handleGoBack = () => {
    navigation.goBack(); // Navigate back to home page
  }

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Add a Credit Card</Text>
      <TextInput
        style={styles.input}
        onChangeText={setCardNumber}
        value={cardNumber}
        placeholder="Card Number"
      />
      <TextInput
        style={styles.input}
        onChangeText={setExpiryDate}
        value={expiryDate}
        placeholder="Expiry Date (MM/YY)"
      />
      <TextInput
        style={styles.input}
        onChangeText={setCvv}
        value={cvv}
        placeholder="CVV"
        secureTextEntry={true}
      />
      <Button title="Add Card" onPress={handleAddCard} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
