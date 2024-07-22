
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

const Toast = () => {
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is a success message',
      visibilityTime: 4000, // Time in milliseconds
      autoHide: true,
      topOffset: 30,
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Show Toast" onPress={showToast} />
      <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

const toastConfig = {
  success: (props) => (
    <View style={styles.toast}>
      <Text style={styles.toastTextBold}>{props.text1}</Text>
      <Text style={styles.toastText}>{props.text2}</Text>
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toast: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  toastTextBold: {
    color: 'white',
    fontWeight: 'bold',
  },
  toastText: {
    color: 'white',
  },
});

export default Toast;
