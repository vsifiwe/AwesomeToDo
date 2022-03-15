import { StyleSheet } from "react-native";
import Colors from "../../styles/Colors";

export default StyleSheet.create({
	button_container: {
		// backgroundColor: "red",
		width: 50,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		margin: 20,
		borderWidth: 2,
		borderColor: Colors.LIGHT_BLUE,
	},
	text: {
		fontWeight: "bold",
	},
	center: {
		alignItems: "center",
	},
});
