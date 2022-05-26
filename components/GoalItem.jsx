import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function GoalItem({ text, onDelete, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => onDelete(id)}
        android_ripple={{ color: "#210644" }}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressed: {
    opacity: 0.5,
  },
});
