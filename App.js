import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import data from "./assets/data.json";
import Title from "./title";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Hello World</Text> */}
      {/* <Text>{data[0].title}</Text> */}
      <Title/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    
  },
});
