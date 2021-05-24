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
const MiddlePart = () => {
	return (
		<>
			<Text
				style={{
					color: "black",
					fontSize: 20,
					fontWeight: "700",
				}}
			>
				Explore Popular Categories
			</Text>
			<View
				style={{
					position: "relative",
					paddingHorizontal: 5,
					flex: 1,
					flexDirection: "row",
					flexWrap: "wrap",
					marginTop: 10,
				}}
			>
				<View style={styles.category}>
					<Image
						source={require("./../../Images/Images/real-estate-business-1.jpg")}
						style={{
							height: 110,
							width: 110,
							borderRadius: 100,
						}}
					/>
					<Text
						style={{
							color: "black",
							fontSize: 18,
						}}
					>
						Real Estate
					</Text>
				</View>
				<View style={styles.category}>
					<Image
						source={require("./../../Images/Images/Events-1_6srS50V.jpg")}
						style={{
							height: 110,
							width: 110,
							borderRadius: 100,
						}}
					/>
					<Text
						style={{
							color: "black",
							fontSize: 18,
						}}
					>
						Events
					</Text>
				</View>
				<View style={styles.category}>
					<Image
						source={require("./../../Images/Images/autos.jpg")}
						style={{
							height: 110,
							width: 110,
							borderRadius: 100,
						}}
					/>
					<Text
						style={{
							color: "black",
							fontSize: 18,
						}}
					>
						Autos
					</Text>
				</View>
				<View style={styles.category}>
					<Image
						source={require("./../../Images/Images/recruitment.png")}
						style={{
							height: 110,
							width: 110,
							borderRadius: 100,
						}}
					/>
					<Text
						style={{
							color: "black",
							fontSize: 18,
						}}
					>
						Recruitment
					</Text>
				</View>
				<View style={styles.category}>
					<Image
						source={require("./../../Images/Images/Customer-Service.png")}
						style={{
							height: 110,
							width: 110,
							borderRadius: 100,
						}}
					/>
					<Text
						style={{
							color: "black",
							fontSize: 18,
						}}
					>
						Services
					</Text>
				</View>
				<View style={styles.category}>
					<Image
						source={require("./../../Images/Images/buy.png")}
						style={{
							height: 110,
							width: 110,
							borderRadius: 100,
						}}
					/>
					<Text
						style={{
							color: "black",
							fontSize: 18,
						}}
					>
						Buy & Sell
					</Text>
				</View>
			</View>
		</>
	);
};
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

export default MiddlePart;
