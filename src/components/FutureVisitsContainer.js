import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import SoonVisits from "./SoonVisits";

const FutureVisitsContainer = () => {
  return (
    <View style={ styles.FutureVisitsMainBox}>
      <SoonVisits
        eventDate="17 Styczeń"
        timeLabel="17:30"
        serviceType="Farbowanie włosów"
        addressLabel="Krakowska 12, Kielce"
        serviceName="Pani Scyzor"
        propTop={126}
        propWidth={321}
      />
      <Text style={styles.MainBoxTextStyle}>Przyszłe wizyty</Text>
      <SoonVisits
        eventDate="13 Luty"
        timeLabel="7:45"
        serviceType="Prostowanie felg"
        addressLabel="Jana Pawła 11/11, Kielce"
        serviceName="Złota rączka"
        propTop={34}
        propWidth={329}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  FutureVisitsMainBox: {
    width: 330,
    position: "absolute",
    top: 390,
    left: 15,
    height: 201,
  },
  MainBoxTextStyle: {
    top: 0,
    left: 1,
    fontSize: 20,
    fontWeight: "500",
    color: 'white',
    textAlign: "center",
    position: "absolute",
  },
});

export default FutureVisitsContainer;
