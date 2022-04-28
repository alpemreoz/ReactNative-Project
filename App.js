import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import data from "./assets/data.json";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!!!!</Text>
      <Text>{data[0].title}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
