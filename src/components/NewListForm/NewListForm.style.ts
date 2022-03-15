import { StyleSheet } from "react-native";
import { Dimensions } from "../../styles";

export default StyleSheet.create({
	container: {
		margin: 20,
		padding: Dimensions.PADDING,
	},
	input: {
		borderWidth: 2,
		padding: Dimensions.PADDING_SM,
	},
	buttons: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		paddingVertical: Dimensions.PADDING,
	},
});
