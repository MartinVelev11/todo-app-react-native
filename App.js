import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TodoProvider } from './src/context/TodoContext';

// Import screens
import OverviewScreen from './src/screens/OverviewScreen';
import FilterScreen from './src/screens/FilterScreen';
import CreateTodoScreen from './src/screens/CreateTodoScreen';
import TodoDetailScreen from './src/screens/TodoDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TodoProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Overview">
          <Stack.Screen 
            name="Overview" 
            component={OverviewScreen}
            options={{ title: 'Todo List' }}
          />
          <Stack.Screen 
            name="Filter" 
            component={FilterScreen}
            options={{ title: 'Filter Todos' }}
          />
          <Stack.Screen 
            name="CreateTodo" 
            component={CreateTodoScreen}
            options={{ title: 'Create Todo' }}
          />
          <Stack.Screen 
            name="TodoDetail" 
            component={TodoDetailScreen}
            options={{ title: 'Todo Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </TodoProvider>
  );
} 