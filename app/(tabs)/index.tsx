import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['#8EECF5', '#BDE0FE', '#E9FF70']}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.headline}>Global React Native App</Text>
        {Array.from({ length: 10 }).map((_, index) => (
          <View key={index} style={styles.buttonContainer}>
            <Button
              title={`Button ${index + 1}`}
              color="#8A2BE2" // Violet color
              onPress={() => console.log(`Button ${index + 1} pressed`)}
            />
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  buttonContainer: {
    margin: 10,
    width: '90%', // Adjusted width to be 90% of the parent container
  },
});

