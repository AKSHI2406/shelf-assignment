import React, { Component } from "react";
import { Button, View, Text } from "react-native";

export default function HomePage() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{fontFamily:'Poppins Italic', fontSize:36, color:'#BCBCBC', fontWeight:'400'}}>Home Page</Text>
    </View>
  );
}