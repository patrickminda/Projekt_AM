import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import GradientBackground from '../components/GradientBackground';
import GradientBarShort from '../components/GradientBarShort';
import PinkButtonSmall from '../components/PinkButtonSmall';
import DoneVisits from "../components/DoneVisits";
import FutureVisitsContainer from "../components/FutureVisitsContainer";
import Calendar from "../components/Calendar";
const CalendarScreen = ({navigation}) => {
  

  return (
    <GradientBackground>
      <View style={styles.UpperBar}>
        <Text style={[styles.UpperBarText, styles.textTypo]}>Wizyty</Text>
      </View>
        <View style={styles.kalendarz}>
          <View style={[styles.DoneVisitsDiv, styles.kreskaLayout]}>
            <DoneVisits
              dateOrTime="12 Grudnia"
              timeOrDate="16:50"
              address="Wesoła 112, Kielce"
              serviceName="Combo włosy + broda"
              serviceTitle="Burbon Barber"
              adresTop={131}
              adresWidth={321}
              onOcePress={() => {}}
            />
            <DoneVisits
              dateOrTime="13 Grudnia"
              timeOrDate="7:45"
              address="Mirów Nowy 13"
              serviceName="Hybryda"
              serviceTitle="Nail Shine"
              adresTop={39}
              adresWidth={329}
              onOcePress={() => {}}
            />
          <Text style={styles.DoneVisitsLabelTextStyle}>Zakończone wizyty</Text>
        </View>
      </View>
      <FutureVisitsContainer />
      <Calendar />
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  // text: {
  //   color: "#fff",
  //   width: '100%',
  //   textAlign: 'left',
  //   fontFamily: 'Roboto',
  //   fontSize: 18,  
  //   fontWeight: "bold",
  // },
  DoneVisitsLabelTextStyle: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "500",
    left: 2,
    top: 0,
    position: "absolute",
  },
  DoneVisitsDiv: {
    top: 609,
    height: 206,
  },
  UpperBar: {
    backgroundColor: "white",
    top: 33,
    width: "110%",
    height: 50,
    position: "absolute",
  },
  UpperBarText: {
    top: 5,
    left: 34,
    fontSize: 30,
    fontWeight: "500",
    position: "absolute",
  },
});

export default CalendarScreen;
