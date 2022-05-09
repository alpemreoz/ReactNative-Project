import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
} from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';

const DATA = 
  {
    id: 1,
    title: "Tinder Gold",
    subTitle: "Get %50 off your first 2 month",
    day: "Today",
    oldprice: "was 520",
    newprice: "now 270",
    feature: [
      { 
        id:1,
        title:"unlimited liked"
      },
      { 
        id:2,
        title:"see who likes you"
      },
      { 
        id:3,
        title:"boost your profile"
      }, 
    ],
    caption: "cancel anytime ,recurring billing, reviwes at full price",
    time: "offer ends in 23:59:16",
    button: "continue",
  };



const Item = ({ deneme }) => (
  <SafeAreaView >
    <Text style={styles.feature}><AntDesign name="check" size={24} color="gold" />{deneme}</Text>
  </SafeAreaView>
);


console.log("title",title)

export default function title() {

  const featureItem = ({ item }) => (
    <Item deneme={item.title} />
  )

  return (
    <SafeAreaView
    
    >
      <Text style={styles.title}>{DATA.title}</Text>
      <Text style={styles.subTitle}>{DATA.subTitle}</Text>
      <Text style={styles.day}>{DATA.day}</Text>
      <Text style={styles.oldprice}>{DATA.oldprice}</Text>
      <Text style={styles.newprice}>{DATA.newprice}</Text>
      
      <FlatList
        data={DATA.feature}
        keyExtractor={item=>item}
        renderItem={ featureItem } 
      />
      <Text style={styles.caption}>{DATA.caption}</Text>
      <Text style={styles.caption}>{DATA.time}</Text>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>{DATA.button}</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    borderBottomColor: "gold",
    borderBottomWidth: 3,
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  day: {
    color: "gold",
    fontSize: 20,
    marginBottom: 20,
  },
  oldprice: {
    fontSize: 20,
    color: "gray",
    opacity: 0.54,
    marginBottom: 20,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  newprice: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  feature: {
    marginLeft: 20,
    fontSize: 15,
    marginBottom: 20,
  },
  caption: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
    marginTop: 20,
  },
  button: {
    borderRadius: 14,
    backgroundColor: "gold",
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textAlign: "center",
  },
});
