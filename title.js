import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
} from "react-native";
import React from "react";

const DATA = [
  {
    id: 1,
    title: "Tinder Gold",
    subTitle: "Get %50 off your first 2 month",
    day: "Today",
    oldprice: "was 520",
    newprice: "now 270",
    feature: ["unlimited liked", "see who likes you", "boost your profile"],
    caption: "cancel anytime ,recurring billing, reviwes at full price",
    time: "offer ends in 23:59:16",
    button: "continue",
  },
];

export default function title() {
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        keyExtractor={(index) => index.id}
        renderItem={({ item }) => (
          <SafeAreaView>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subTitle}>{item.subTitle}</Text>
            <Text style={styles.day}>{item.day}</Text>
            <Text style={styles.oldprice}>{item.oldprice}</Text>
            <Text style={styles.newprice}>{item.newprice}</Text>
            <Text style={styles.feature}>{item.feature[0]}</Text>
            <Text style={styles.feature}>{item.feature[1]}</Text>
            <Text style={styles.feature}>{item.feature[2]}</Text>
            <Text style={styles.caption}>{item.caption}</Text>
            <Text style={styles.caption}>{item.time}</Text>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>{item.button}</Text>
            </Pressable>
          </SafeAreaView>
        )}
      />
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
