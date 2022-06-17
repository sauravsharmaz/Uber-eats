import { View, Text, StyleSheet } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar() {
  return (
    <View style={styles.searchbar_container}>
      <GooglePlacesAutocomplete
        placeholder="Enter Location"
        minLength={2}
        styles={{
          textInput: {
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
          },
          textInputContainer: {
            backgroundColor: 'white',
            borderRadius: 55,
            alignItems: 'center',
          },
          predefinedPlacesDescription: {
            color: '#1faadb'
          },
        }}
        renderLeftButton={() => (
          <View style={styles.search_bar_left_btn}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.search_bar_right_btn}>
            <AntDesign style={{ color: 'white' }} name="clockcircle" size={11} />
            <Text style={{ marginLeft: 5, color: 'white' }}>Search</Text>
          </View>
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchbar_container: {
    marginTop: 10,
    flexDirection: "row",
  },
  search_bar_left_btn: {
    marginLeft: 10,
  },
  search_bar_right_btn: {
    flexDirection: "row",
    marginRight: 10,
    backgroundColor: '#002',
    padding: 9,
    borderRadius: 55,
    alignItems: 'center',
    marginEnd: 5,
  }
});
