import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTodo } from '../context/TodoContext';

const TodoDetailScreen = ({ route, navigation }) => {
  const { todoId } = route.params;
  const { getTodoById, updateTodo, deleteTodo } = useTodo();
  const todo = getTodoById(todoId);

  if (!todo) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Todo not found</Text>
      </View>
    );
  }

  const toggleStatus = () => {
    updateTodo(todoId, {
      status: todo.status === 'open' ? 'done' : 'open'
    });
  };

  const handleDelete = () => {
    deleteTodo(todoId);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{todo.title}</Text>
        <Text style={styles.time}>
          {new Date(todo.time).toLocaleString()}
        </Text>
        <Text style={styles.description}>{todo.text}</Text>
        <Text style={[
          styles.status,
          { color: todo.status === 'open' ? '#4CAF50' : '#FF5722' }
        ]}>
          Status: {todo.status.toUpperCase()}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.toggleButton]}
          onPress={toggleStatus}
        >
          <Text style={styles.buttonText}>
            Mark as {todo.status === 'open' ? 'Done' : 'Open'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={handleDelete}
        >
          <Text style={styles.buttonText}>Delete Todo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#fff',
  },
  time: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 16,
    color: '#fff',
  },
  status: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: 'rgba(0, 0, 51, 0.7)',
    elevation: 2,
  },
  button: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  toggleButton: {
    backgroundColor: '#2196F3',
  },
  deleteButton: {
    backgroundColor: '#FF5722',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 18,
    color: '#FF5722',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default TodoDetailScreen; 