import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TodoProvider } from './src/context/TodoContext';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';

// Import screens
import OverviewScreen from './src/screens/OverviewScreen.jsx';
import FilterScreen from './src/screens/FilterScreen.jsx';
import CreateTodoScreen from './src/screens/CreateTodoScreen.jsx';
import TodoDetailScreen from './src/screens/TodoDetailScreen.jsx';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000000', '#000033', '#000066']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
      <TodoProvider>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="Overview"
            screenOptions={{
              headerStyle: {
                backgroundColor: 'rgba(0, 0, 51, 0.7)',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              contentStyle: {
                backgroundColor: 'transparent',
              },
            }}
          >
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
  },
}); 