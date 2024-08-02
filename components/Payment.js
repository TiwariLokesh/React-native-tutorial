import React, { useState } from 'react';
import { Button, View, Text, StyleSheet, Alert, TextInput, Image } from 'react-native';
import { CardField, useStripe, StripeProvider } from '@stripe/stripe-react-native';

const PaymentScreen = () => {
  const { confirmPayment } = useStripe();
  const [cardDetails, setCardDetails] = useState({});
  const [cardHolderName, setCardHolderName] = useState('');
  const [email, setEmail] = useState('');

  const handlePayment = async () => {
    if (!cardDetails?.complete) {
      Alert.alert('Error', 'Please enter complete card details.');
      return;
    }

    if (!cardHolderName) {
      Alert.alert('Error', 'Please enter the card holder name.');
      return;
    }

    if (!email) {
      Alert.alert('Error', 'Please enter your email address.');
      return;
    }

    const billingDetails = {
      email: email,
      name: cardHolderName,
    };

    try {
      const response = await fetch('http:// 192.168.0.6:3000/create-payment-intent', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({amount: 1099, email: email}),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch payment intent.');
      }

      const { clientSecret } = await response.json();

      const { error, paymentIntent } = await confirmPayment(clientSecret, {
        paymentMethodType: 'Card',
        paymentMethod: {card: cardDetails, billingDetails},
      });

      if (error) {
        Alert.alert('Payment Error', error.message);
      } else if (paymentIntent?.status === 'succeeded') {
        Alert.alert('Success', 'Payment Successful');
      } else {
        Alert.alert('Payment Status', 'Payment was not successful.');
      }
    } catch (error) {
      Alert.alert('Payment Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://static.vecteezy.com/system/resources/thumbnails/009/384/393/small_2x/credit-card-clipart-design-illustration-free-png.png'}} 
        style={styles.cardImage}
      />
      <Text style={styles.title}>Credit Card Payment</Text>
      <View style={styles.fieldContainer}>
        <CardField
          postalCodeEnabled={false}
          placeholder={{ number: '4242 4242 4242 4242' }}
          cardStyle={styles.card}
          style={styles.cardField}
          onCardChange={setCardDetails}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Card Holder Name" 
          value={cardHolderName}
          onChangeText={setCardHolderName}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Email Address" 
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.row}>
        <View style={styles.checkboxContainer}>
          <Text style={styles.label}>Save this card for future transactions</Text>
        </View>
        <Text style={styles.total}>Total: $10.99</Text>
      </View>
      <Button title="Proceed to Pay" onPress={handlePayment} color="#6200EE" />
    </View>
  );
};

const Payment = () => (
  <StripeProvider publishableKey="pk_test_51PgO3MCsFbF0FBd0w0E3jyrIEcZTELgcvJrFk8pjKb3irPqS2YCYLdYi3ytefvsJZBgJ2hmIXRXckDw5XkXNIEKj00p4lnvsYY">
    <PaymentScreen />
  </StripeProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  cardImage: {
    width: '100%',
    height: 200, 
    resizeMode: 'contain', 
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  fieldContainer: {
    marginBottom: 25,
  },
  cardField: {
    height: 50,
    marginVertical: 10,
    backgroundColor: '#FFFFFF',
  },
  input: {
    backgroundColor: '#e9ecef',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 15,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#e9ecef',
  },
});

export default Payment;
