import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={styles.header_btns} >
      <HeaderButton
        text="Pickup"
        txtcolor="black"
        bgcolor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab} />
      <Text style={styles.header_btns_seprator}></Text>
      <HeaderButton
        text="Delivery"
        txtcolor="white"
        bgcolor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab} />
    </View>
  )
}

function HeaderButton(props) {
  return (
    <TouchableOpacity style={{
      backgroundColor: props.activeTab === props.text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }} onPress={() => {
      props.setActiveTab(props.text);
    }} >
      <Text style={[
        styles.header_btns_text,
        { color: props.activeTab === props.text ? "white" : "black" }
      ]}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  header_btns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header_btns_text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  header_btns_seprator: {
    width: 5,
  }
})