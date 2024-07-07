import { View, Text, StatusBar } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import CustomButton from "@/components/CustomButton";

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={Colors.giftitLightbrown} />
      <View style={{ backgroundColor: Colors.giftitLightbrown, flex: 1 }}>
        <Text>App</Text>
        <View>
          <CustomButton
            onPress={() => console.log(Colors.giftitPrimary)}
            title="Get Started"
          />
        </View>
      </View>
    </>
  );
};

export default App;
