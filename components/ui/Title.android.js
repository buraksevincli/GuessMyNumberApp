import { StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 32,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "white",
    padding: 16,
    maxWidth: "80%",
    width: 300,
  },
});
