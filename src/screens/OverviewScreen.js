import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useTodo } from '../context/TodoContext';

const OverviewScreen = ({ navigation }) => {
  const { todos } = useTodo();

  const renderTodoItem = ({ item }) => (
    <TouchableOpacity
      style={styles.todoItem}
      onPress={() => navigation.navigate('TodoDetail', { todoId: item.id })}
    >
      <Text style={styles.todoTitle}>{item.title}</Text>
      <Text style={styles.todoTime}>
        {new Date(item.time).toLocaleString()}
      </Text>
      <Text style={[
        styles.todoStatus,
        { color: item.status === 'open' ? '#4CAF50' : '#FF5722' }
      ]}>
        {item.status.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation.navigate('Filter')}
        >
          <Text style={styles.buttonText}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('CreateTodo')}
        >
          <Text style={styles.buttonText}>Add Todo</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={todos}
        renderItem={renderTodoItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 2,
  },
  filterButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  todoItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 2,
  },
  todoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  todoTime: {
    color: '#666',
    fontSize: 14,
  },
  todoStatus: {
    marginTop: 8,
    fontWeight: 'bold',
  },
});

export default OverviewScreen; 