import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Title from "./title";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <Title/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginStart : 20,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    
  },
});
