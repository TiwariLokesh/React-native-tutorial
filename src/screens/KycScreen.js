import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const App = ({navigation}) => {
  const [selectedCountry, setSelectedCountry] = useState('Select a country');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);

  const countries = [
    {label: 'India', value: 'IN', flag: '🇮🇳'},
    {label: 'United States', value: 'US', flag: '🇺🇸'},
    {label: 'United Kingdom', value: 'UK', flag: '🇬🇧'},
    // Add more countries here
  ];

  const handleCheck = item => {
    setCheckedItems(prevCheckedItems =>
      prevCheckedItems.includes(item)
        ? prevCheckedItems.filter(i => i !== item)
        : [...prevCheckedItems, item],
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png',
          }} // Replace with your image URL
          style={styles.roundedImage}
        />
        <View style={styles.headerText}>
          <Text style={styles.title}>KYC App</Text>
          <Text style={styles.subtitle}>Verify your identity</Text>
        </View>
      </View>
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#888"
      />
      <Text style={{marginTop: -20}}>As per official documents</Text>

      <View style={{marginTop:20}}>
        <Text style={styles.label}>Country of Residence</Text>
        <TouchableOpacity
          style={styles.picker}
          onPress={() => setIsModalVisible(true)}>
          <Text style={styles.pickerText}>{selectedCountry}</Text>
          <Icon name="arrow-drop-down" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {countries.map(country => (
              <Pressable
                key={country.value}
                style={styles.modalItem}
                onPress={() => {
                  setSelectedCountry(`${country.flag} ${country.label}`);
                  setIsModalVisible(false);
                }}>
                <Text
                  style={
                    styles.modalItemText
                  }>{`${country.flag} ${country.label}`}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>

      <View style={{marginTop:20}}>
      <Text style={styles.label}>Requirements Checklist</Text>
      <Text style={{marginBottom: 10}}>Verify each document carefully</Text>
      </View>
      {['Identity Proof', 'Address Proof', 'Additional Information'].map(
        item => (
        
          <TouchableOpacity
            key={item}
            style={styles.checkboxContainer}
            onPress={() => handleCheck(item)}>
            <Icon
              name={
                checkedItems.includes(item)
                  ? 'check-box'
                  : 'check-box-outline-blank'
              }
              size={24}
              color="green"
            />
            
            <View style={styles.checkboxLabelContainer}>
              <Text style={styles.checkboxLabel}>{item}</Text>
              <Text style={styles.checkboxSubLabel}>Additional Info</Text> 
            </View>

            
          </TouchableOpacity>
          
          
        ),
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  roundedImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#007bff',
    marginRight: 16,
  },
  headerText: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  picker: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  pickerText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  modalItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  modalItemText: {
    fontSize: 16,
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkboxLabelContainer: {
    marginLeft: 8,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 18,
    color: '#333',
  },
  checkboxSubLabel: {
    fontSize: 12,
    color: '#666',
    marginLeft:7
  },
});

export default App;
