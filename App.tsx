import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { SignIn } from './src/screens/SignIn';
import todoImg from './src/assets/todo.png';
import { theme } from './src/global/styles/theme';

export default function App() {
  return (
    <View style={styles.container}>      
      <View>
        <Text style={styles.texto}>Todo List</Text>
      </View>

      <Image
        style={styles.image}
        source={todoImg}
        resizeMode="stretch"
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.background
  },
  image: {
    width: '100%',
    height: 360
  },
  texto: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 70
  }
})