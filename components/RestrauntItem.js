import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestrauntItem() {
  return (
    <View>
      <ImageBanner
        img_path={require("../assets/images/other_place.jpg")}
        img_heading="Abupur country side cafe"
        prep_time="30 - 40 min"
        rating="4.9" />
      <ImageBanner
        img_path={require("../assets/images/restraunt_front.jpg")}
        img_heading="Abupur country side cafe"
        prep_time="20 - 25 min"
        rating="4.1" />
    </View>
  )
}

function ImageBanner(props) {
  return (
    <>
      <MaterialCommunityIcons style={styles.fav_icon} name="heart-outline" size={30} color="black" />
      <TouchableOpacity style={styles.image_banner_container}>
        <Image style={styles.banner_image} source={props.img_path} />
        <View style={styles.banner_text_container}>
          <View>
            <Text style={styles.img_heading}>{props.img_heading}</Text>
            <Text style={styles.prep_time}>{props.prep_time}</Text>
          </View>
          <View style={styles.rating_container}>
            <MaterialCommunityIcons name="star" size={20} color="#ffc107" />
            <Text style={styles.rating}>{props.rating}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  image_banner_container: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  banner_image: {
    height: 100,
    width: "100%",
  },
  fav_icon: {
    position: "relative",
    top: 50,
    left: 325,
    zIndex: 1,
    color: "#B8263C",
    backgroundColor: "white",
    width: 30,
    borderRadius: 50,
  },
  banner_text_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  img_heading: {
    fontSize: 16,
    fontWeight: "bold"
  },
  prep_time: {
    color: "grey",
  },
  rating_container: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: 5,
  }
})