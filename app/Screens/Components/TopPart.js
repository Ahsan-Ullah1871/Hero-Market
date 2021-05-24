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
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faBars,
	faShoppingCart,
	faSearch,
} from "@fortawesome/free-solid-svg-icons";

const TopPart = () => {
	return (
		<View>
			<View
				style={{
					marginTop: 35,
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<FontAwesomeIcon
					icon={faBars}
					style={{ color: "white" }}
					size={25}
				/>
				<FontAwesomeIcon
					icon={faShoppingCart}
					size={25}
					style={{ color: "white" }}
				/>
			</View>

			<View>
				<FontAwesomeIcon
					icon={faSearch}
					size={20}
					style={{
						color: "black",
						position: "absolute",
						top: 20,
						left: 8,
						zIndex: 1,
					}}
				/>
				<TextInput
					style={styles.input}
					placeholder="Search for anything"
				/>
			</View>
			<View style={styles.buttonPart}>
				<Pressable style={styles.btn}>
					<Text
						style={{
							color: "white",
							fontWeight: "bold",
						}}
					>
						Selling
					</Text>
				</Pressable>
				<Pressable style={styles.btn}>
					<Text
						style={{
							color: "white",
							fontWeight: "bold",
						}}
					>
						Deals
					</Text>
				</Pressable>
				<Pressable style={styles.btn}>
					<Text
						style={{
							color: "white",
							fontWeight: "bold",
						}}
					>
						Categories
					</Text>
				</Pressable>
			</View>
			<Text
				style={{
					fontSize: 18,
					textAlign: "center",
					marginTop: 10,
					paddingLeft: 30,
					paddingRight: 30,
				}}
			>
				Sign is so we can personalize your cayman Spotlight
				experience
			</Text>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					marginTop: 10,
				}}
			>
				<Pressable style={styles.button}>
					<Text
						style={{
							fontSize: 15,
							fontWeight: "bold",
							color: "#676d96",
						}}
					>
						Register
					</Text>
				</Pressable>
				<Pressable style={styles.button}>
					<Text
						style={{
							fontSize: 15,
							fontWeight: "bold",
							color: "#676d96",
						}}
					>
						Sign In
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	topPart: {
		height: "40%",
		width: "100%",
		position: "absolute",
		top: 0,
		paddingLeft: "3%",
		paddingRight: "3%",
	},
	input: {
		height: 40,
		width: "100%",
		marginTop: 10,
		borderRadius: 100,
		backgroundColor: "white",
		color: "black",
		paddingLeft: 40,
	},
	btn: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		backgroundColor: "#202c59",
		borderRadius: 100,
		color: "white",
	},

	buttonPart: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: 9,
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderWidth: 2,
		borderColor: "#baeaef",
		borderRadius: 100,
		backgroundColor: "white",
		marginRight: 10,
	},
});

export default TopPart;
