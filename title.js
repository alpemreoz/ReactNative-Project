import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React from "react";

const DATA = [
  {
    id: 1,  
    title: "Tinder Gold",
    subTitle: "Get %50 off your first 2 month",
    day: "Today",
    oldprice: "was 520",
    newprice: "was 270",
    feature: ["unlimited liked", "see who likes you", "boost your profile"],
    caption: "cancel anytime ,recurring billing, reviwes at full price",
    time: "offer ends in 23:59:16",
    button: "continue",
  },
];

export default function title() {


  return (              
    <SafeAreaView >
      <FlatList 
      data={DATA}
      keyExtractor={index =>index.id}
      renderItem={({item})=>
        (   
            
            <SafeAreaView>
                <Text>{item.title}</Text>
                <Text>{item.subTitle}</Text>
                <Text>{item.day}</Text>
                <Text>{item.oldprice}</Text>
                <Text>{item.newprice}</Text>
                <Text>{item.feature[0]}</Text>
                <Text>{item.feature[1]}</Text>
                <Text>{item.feature[2]}</Text>
                <Text>{item.caption}</Text>
                <Text>{item.time}</Text>
                
            </SafeAreaView>
            

        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
