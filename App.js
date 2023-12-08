import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StripeApp from "./src/StripeApp";
import { StripeProvider } from "@stripe/stripe-react-native";

export default function App() {
  return (
    <StripeProvider publishableKey="pk_test_51OKOMZDIjkIdotnugn0n3oJUqBl1UzYz4vPJAgTtyaRo7zGF5yv8xlnRFVX7tZP9fEykGNCYnskoSNG0A2wQoUW000ixXXUR6K">
      <StripeApp />
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
