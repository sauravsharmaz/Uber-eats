import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.body}>
      <StatusBar backgroundColor="#eee" barStyle="dark-content" />
      <HeaderTabs />
      <SearchBar />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'whitesmoke',
    padding: 15,
    flex: 1,
  }
});