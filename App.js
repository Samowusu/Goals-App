import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((prevGoals) => [
      ...prevGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  };

  const deleteGoalHandler = (key) => {
    setCourseGoals((prevGoals) => prevGoals.filter((goal) => goal.key !== key));
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          setModalIsVisible={setModalIsVisible}
        />
        <Button
          title="add new goal"
          color={"#5e0acc"}
          onPress={() => setModalIsVisible(true)}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={courseGoals}
            renderItem={({ item }) => {
              return (
                <GoalItem
                  text={item.text}
                  onDelete={deleteGoalHandler}
                  id={item.key}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 5,
  },
});
