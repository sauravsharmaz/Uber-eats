import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestrauntItems from '../components/RestrauntItem';
import GetInitialData from '../assets/data/initial_data';
import { StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';

const YELP_API_KEY =
  "pRrJ2Hq2uFokGU4cqGQy5RyHOkGY_5YFSh3w1lXSQzFPt4VF8oi6Lv9a6dktjUe6-HmgcvQCMk7q3_kdPh44ztK6IZ0Iz6xVGcrOMf_7grRpE8wrnUs5pR5zD0atYnYx";
const YELP_URL = 'https://api.yelp.com/v3/businesses/search'
const API_OPTIONS = {
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  }
}

export default function HomeScreen() {

  const [restaurant_data, setRestaurant_data] = useState([GetInitialData()]);

  useEffect(() => {
    fetchRestaurantfromYelp(setRestaurant_data)
  }, []);

  return (
    <View style={styles.body}>
      <StatusBar backgroundColor="#eee" barStyle="dark-content" />
      <HeaderTabs />
      <SearchBar />
      <ScrollView>
        <Categories />
        <RestrauntItems data={restaurant_data} />
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

function fetchRestaurantfromYelp(setRestaurant_data) {
  const search_url = `${YELP_URL}?term=restaurants&location=losangeles`;
  fetch(search_url, API_OPTIONS)
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
      //Success 
      setRestaurant_data(responseJson.businesses);
    })
    //If response is not in json then in error
    .catch((error) => {
      //Error 
      console.error(error);
    });
};