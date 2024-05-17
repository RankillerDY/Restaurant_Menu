import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MenuItems from "./components/FlatList/MenuItems";
import LittleLemonHeader from "./components/FlatList/header/LittleLemonHeader";
import LittleLemonFooter from "./components/FlatList/footer/LittleLemonFooter";

export default function App() {
  return (
    <>
      <LittleLemonHeader />
      <MenuItems />
      <LittleLemonFooter />
    </>
  );
}
