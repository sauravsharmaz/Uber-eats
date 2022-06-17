import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestrauntItem from '../components/RestrauntItem';
import { StyleSheet, View, StatusBar, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.body}>
      <StatusBar backgroundColor="#eee" barStyle="dark-content" />
      <HeaderTabs />
      <SearchBar />
      <ScrollView>
        <Categories />
        <RestrauntItem />
      </ScrollView>
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