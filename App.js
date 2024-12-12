
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';

const Stack = createStackNavigator();

function UserListScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchUsers();
  }, [page]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=10`
      );
      setUsers((prevUsers) => [...prevUsers, ...response.data]);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch users. Please try again later.");
      setLoading(false);
    }
  };

  const renderUser = ({ item }) => (
    <TouchableOpacity
      style={styles.userItem}
      onPress={() => navigation.navigate('UserDetails', { user: item })}
    >
      <Text style={styles.userName}>{item.name}</Text>
      <Text style={styles.userEmail}>{item.email}</Text>
    </TouchableOpacity>
  );

  const handleLoadMore = () => {
    if (!loading) setPage((prevPage) => prevPage + 1);
  };

  return (
    <View style={styles.container}>
      {error && <Text style={styles.errorText}>{error}</Text>}
      <FlatList
        data={users}
        renderItem={renderUser}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
      />
    </View>
  );
}


function UserDetailsScreen({ route, navigation }) {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.detailText}>Name: {user.name}</Text>
      <Text style={styles.detailText}>Email: {user.email}</Text>
      <Text style={styles.detailText}>Address: {user.address.street}, {user.address.city}, {user.address.zipcode}</Text>
      <Text style={styles.detailText}>Company: {user.company.name}</Text>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserList" component={UserListScreen} options={{ title: 'User Directory' }} />
        <Stack.Screen name="UserDetails" component={UserDetailsScreen} options={{ title: 'User Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  userItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 14,
    color: '#555',
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
