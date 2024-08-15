import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TextInput, Alert, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Crud = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [editingUserId, setEditingUserId] = useState(null);

  // Auth state listener
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(authUser => {
      setUser(authUser);
    });
    // Clean up
    return () => unsubscribe();
  }, []);

  // Fetch users from Firestore
  const fetchUsers = async () => {
    try {
      const snapshot = await firestore().collection('user').get();
      const usersList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(usersList);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Sign in anonymously
  const signInAnonymously = async () => {
    try {
      await auth().signInAnonymously();
    } catch (error) {
      console.error('Failed to sign in anonymously:', error);
    }
  };

  // Add or update user in Firestore
  const saveUser = async () => {
    if (!name || !age || !email) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    try {
      if (editingUserId) {
        // Update existing user
        await firestore().collection('user').doc(editingUserId).update({
          name,
          age,
          email,
        });
        Alert.alert('Success', 'User updated successfully');
      } else {
        // Add new user
        await firestore().collection('user').add({
          name,
          age,
          email,
        });
        Alert.alert('Success', 'User added successfully');
      }
      setName('');
      setAge('');
      setEmail('');
      setEditingUserId(null);
      fetchUsers(); // Refresh the list of users
    } catch (error) {
      console.error('Failed to save user:', error);
    }
  };

  // Delete user from Firestore
  const deleteUser = async (id) => {
    try {
      await firestore().collection('user').doc(id).delete();
      Alert.alert('Success', 'User deleted successfully');
      fetchUsers(); // Refresh the list of users
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  // Populate fields for editing
  const startEditing = (user) => {
    setName(user.name);
    setAge(user.age);
    setEmail(user.email);
    setEditingUserId(user.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Information</Text>

      {/* Input fields for adding or updating a user */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title={editingUserId ? "Update User" : "Add User"} onPress={saveUser} />

      {/* Display fetched users */}
      <Text style={styles.subHeader}>Users:</Text>
      <ScrollView style={styles.userList}>
        {users.length > 0 ? (
          users.map((user, index) => (
            <View key={index} style={styles.userCard}>
              <Text style={styles.userName}>Name: {user.name}</Text>
              <Text style={styles.userName}>Age: {user.age}</Text>
              <Text style={styles.userName}>Email: {user.email}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => startEditing(user)} style={styles.button}>
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteUser(user.id)} style={styles.button}>
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noUsers}>No users found</Text>
        )}
      </ScrollView>

  
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f0f4f7',
    padding: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#666',
  },
  userList: {
    width: '100%',
    marginBottom: 20,
  },
  userCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 5,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
  },
  noUsers: {
    fontSize: 16,
    color: '#888',
    marginTop: 10,
    textAlign: 'center',
  },
  authContainer: {
    marginTop: 20,
  },
  userInfo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 10,
  },
});

export default Crud;
