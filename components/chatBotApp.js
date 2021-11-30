import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ChatBot from "react-simple-chatbot";
import wellDon from "./wellDone";
import GoodWork from "./goodWork";

const HelloChatBot = () => {
  return (
    <ChatBot
      headerTitle="Quiz Game"
      userAvatarColor= '#4870df'
      steps={[
        {
          id: "hello-world",
          message: "Hello, What is not colour here!",
          trigger: "2",
        },
        {
          id: "2",
          options: [
            { value: "blue", label: "blue", trigger: "4" },
            { value: "frog", label: "frog", trigger: "3" },
            { value: "white", label: "white", trigger: "4" },
          ],
        },
        {
          id: "3",
          component: <GoodWork />,
        },
        {
          id: "4",
          message: "oh no {previousValue} is a color",
          trigger: "2",
        },
        {
          id: "5",
          message: "What is your Name",
          trigger: 6,
        },
        {
          id: "6",
          user: true,
        },
      ]}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HelloChatBot;
