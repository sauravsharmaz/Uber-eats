import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from "react-native";

// TODO: make this data dynamic from Django Backend
const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: 'Pick-up',
  },
  {
    image: require("../assets/images/bread.png"),
    text: 'Bakery Items',
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: 'Fast Foods',
  },
  {
    image: require("../assets/images/deals.png"),
    text: 'Deals',
  },
  {
    image: require("../assets/images/coffee.png"),
    text: 'Coffee & Tea',
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Desserts",
  }
]

export default function Categories() {
  return (
    <View style={styles.scrollview_container}>
      <ScrollView style={styles.categories_container} horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <TouchableOpacity style={styles.icon_container} key={index}>
            <Image style={styles.categories_icon} source={item.image} />
            <Text style={styles.label}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  scrollview_container: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  categories_container: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  icon_container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  categories_icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  label: {
    fontWeight: "900",
  }
})