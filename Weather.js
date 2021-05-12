import React from "react";
import {View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"],
      title: "Haze",
      sutbtitle: "Don't go out stay at home the weather is shit"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title:"Thunder Strom",
        sutbtitle:"Holymoly stay at home and pray"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title:"Drizzle",
        sutbtitle:"Feel fresh if you like rain"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title:"Rain",
        sutbtitle:"Don't forget your umbrella"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title:"Snow",
        sutbtitle:"Snow it's quite cold wearing clothes be wormer"
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        text:"Atmospher",
        sutbtitle:"I have no idea what wrong with this weather"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title:"Clear",
        sutbtitle: "So nice weather but Before going out check the dust level"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "CLOUDY ☁",
        sutbtitle: "It supposed to be hot wind you know the korea summer"
    },
  };

export default function Weather({temp, condition}) {
    console.log(condition)
    return (
        <LinearGradient
        // Background Linear Gradient
        colors={weatherOptions[condition].gradient}
        style={styles.container}
      >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
            <MaterialCommunityIcons size={86} name={weatherOptions[condition].iconName} color="white"/>
            <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.sutbtitle}>{weatherOptions[condition].sutbtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze"
]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:{
        color:"white",
        fontSize: 38,
    },
    background:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },
    halfContainer: {
        flex:1,
        justifyContent: "center",
        alignItems:"center"
    },
    title: {
        color:"white",
        fontSize: 42,
        fontWeight: "300",
        marginBottom: 30
    },
    sutbtitle: {
        color:"white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start",
    }
})
