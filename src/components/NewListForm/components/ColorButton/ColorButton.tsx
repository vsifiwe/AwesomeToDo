import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./ColorButton.style";

const ColorButton = ({ color }: any) => {
	return <View style={[styles.container, { backgroundColor: color }]}></View>;
};

export default ColorButton;
