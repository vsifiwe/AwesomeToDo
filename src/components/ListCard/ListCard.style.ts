import { StyleSheet } from "react-native";
import { Colors, Dimensions } from "../../styles";

export default StyleSheet.create({
	container: {
		height: Dimensions.FULL_HEIGHT * 0.3,
		width: Dimensions.FULL_WIDTH * 0.4,
		padding: Dimensions.PADDING,
		marginHorizontal: Dimensions.PADDING_SM,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: Colors.WHITE,
		// fontWeight: "bold",
		fontSize: 20,
	},
	bold: {
		fontWeight: "bold",
	},
});
