import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTodo } from '../context/TodoContext';

const FilterScreen = ({ navigation }) => {
  const { filterTodos } = useTodo();
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [filteredTodos, setFilteredTodos] = useState([]);

  const applyFilters = () => {
    const filtered = filterTodos(selectedStatus, selectedTime);
    setFilteredTodos(filtered);
  };

  const renderTodoItem = (todo) => (
    <View key={todo.id} style={styles.todoItem}>
      <Text style={styles.todoTitle}>{todo.title}</Text>
      <Text style={styles.todoTime}>
        {new Date(todo.time).toLocaleString()}
      </Text>
      <Text style={[
        styles.todoStatus,
        { color: todo.status === 'open' ? '#4CAF50' : '#FF5722' }
      ]}>
        {todo.status.toUpperCase()}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.filterSection}>
        <Text style={styles.sectionTitle}>Status Filter</Text>
        <View style={styles.filterButtons}>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedStatus === 'open' && styles.selectedButton
            ]}
            onPress={() => setSelectedStatus('open')}
          >
            <Text style={styles.buttonText}>Open</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedStatus === 'done' && styles.selectedButton
            ]}
            onPress={() => setSelectedStatus('done')}
          >
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Time Filter</Text>
        <View style={styles.filterButtons}>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedTime === 'past' && styles.selectedButton
            ]}
            onPress={() => setSelectedTime('past')}
          >
            <Text style={styles.buttonText}>Past</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              selectedTime === 'future' && styles.selectedButton
            ]}
            onPress={() => setSelectedTime('future')}
          >
            <Text style={styles.buttonText}>Future</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.applyButton}
          onPress={applyFilters}
        >
          <Text style={styles.buttonText}>Apply Filters</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultsSection}>
        <Text style={styles.sectionTitle}>Filtered Results</Text>
        {filteredTodos.map(renderTodoItem)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  filterSection: {
    padding: 16,
    backgroundColor: '#fff',
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  filterButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#1976D2',
  },
  applyButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resultsSection: {
    flex: 1,
    padding: 16,
  },
  todoItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 4,
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

export default FilterScreen; 