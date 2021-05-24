import React from "react";
import {
	View,
	StyleSheet,
	Text,
	Image,
	TextInput,
	Button,
	Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BottomNavPart from "./Components/BottomNavPart";

import TopPart from "./Components/TopPart";

import MiddlePart from "./Components/MiddlePart";

function WelcomeScreen() {
	return (
		<View style={styles.background}>
			{/* Top Part*/}
			<LinearGradient
				// Background Linear Gradient
				colors={["#141d3a", "white"]}
				start={(100, 10)}
				style={styles.topPart}
			>
				<TopPart />
			</LinearGradient>
			{/* Middle Part */}
			<View style={styles.middlePart}>
				<MiddlePart />
			</View>
			<View
				style={{
					flex: 1,
					flexDirection: "row",
					alignItems: "center",
					marginLeft: 20,
				}}
			>
				<Text
					style={{
						fontSize: 25,
						fontWeight: "bold",
					}}
				>
					Daily Deals
				</Text>
				<FontAwesomeIcon
					icon={faArrowRight}
					size={25}
					style={{
						color: "dodgerblue",
						marginLeft: 5,
					}}
				/>
			</View>
			{/* bottom Part */}

			<LinearGradient
				// Background Linear Gradient
				colors={["#02d4df", "#00a4cf"]}
				style={styles.bottomNavPart}
			>
				<BottomNavPart />
			</LinearGradient>
		</View>
	);
}

const styles = StyleSheet.create({
	background: {
		paddingTop: "3%",
		flex: 1,
	},
	topPart: {
		height: "37%",
		width: "100%",
		position: "relative",
		top: 0,
		paddingLeft: "3%",
		paddingRight: "3%",
	},

	bottomNavPart: {
		backgroundColor: "#00d2e3",
		height: "9%",
		width: "100%",
		position: "absolute",
		bottom: 0,
	},
	middlePart: {
		paddingHorizontal: 10,
		position: "relative",
		height: "30%",
	},
	category: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginHorizontal: 8,
		marginVertical: 15,
	},
});

export default WelcomeScreen;
