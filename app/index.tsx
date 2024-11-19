import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Latex from "@/components/Latex";

const index = () => {
  return (
    <View style={styles.container}>
      <Latex dom={{ javaScriptEnabled: true }} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
