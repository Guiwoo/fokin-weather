import React from "react";
import {View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
      iconName: "weather-hail",
      gradient: ["#4DA0B0", "#D39D38"]
    },
    Thunderstorm: {
      iconName: "",
      gradient: []
    },
    Drizzle: {
      iconName: "",
      gradient: []
    },
    Rain: {
      iconName: "",
      gradient: []
    },
    Snow: {
      iconName: "",
      gradient: []
    },
    Atmosphere: {
      iconName: "",
      gradient: []
    },
    Clear: {
      iconName: "",
      gradient: []
    },
    Clouds: {
      iconName: "",
      gradient: []
    },
  };

export default function Weather({temp, condition}) {
    console.log(weatherOptions[condition].iconName)
    return (
        <LinearGradient
        // Background Linear Gradient
        colors={weatherOptions["Haze"].gradient}
        style={styles.container}
      >
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
            <MaterialCommunityIcons size={86} name={weatherOptions["Haze"].iconName} color="white"/>
            <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.halfContainer}/>
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
"Haze"]).isRequired
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
    }
})
