import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constants/color";

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    marginTop: deviceWidth < 380 ? 18 : 36,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    // Android Only
    elevation: 4,
    // Shadow Props IOS Only
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
