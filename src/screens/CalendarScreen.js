import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';

import GradientBackground from '../components/GradientBackground';
import DoneVisits from "../components/DoneVisits";
import Calendar from "../components/Calendar";
import SoonVisits from "../components/SoonVisits";
import GradientBarShort from '../components/GradientBarShort';


const CalendarScreen = ({navigation}) => {
  

  return (
    <GradientBackground>

  <View style={styles.container}>
      <View style={styles.UpperBar}>
        <Text style={[styles.UpperBarText, styles.textTypo]}>Kalendarz</Text>
      </View>
          
        <Calendar />



       
        


        { <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>

        <Text style={styles.DoneVisitsLabelTextStyle}>Przyszłe wizyty</Text>
        <GradientBarShort/> 

<SoonVisits
            eventDate="17 Styczeń"
            timeLabel="17:30"
            serviceType="Farbowanie włosów"
            addressLabel="Krakowska 12, Kielce"
            serviceName="Pani Scyzor"
        />

<SoonVisits
        eventDate="13 Luty"
        timeLabel="7:45"
        serviceType="Prostowanie felg"
        addressLabel="Jana Pawła 11/11, Kielce"
        serviceName="Złota rączka"
    
      />

        <Text style={styles.DoneVisitsLabelTextStyle}>Zakończone wizyty</Text>
        <GradientBarShort/> 
             <DoneVisits
              eventDate="12 Grudnia"
              timeLabel="16:50"
              addressLabel="Wesoła 112, Kielce"
              serviceType="Combo włosy + broda"
              serviceName="Burbon Barber"
              navigation={navigation}
              onOcePress={() => {}}
            />

            <DoneVisits
              eventDate="13 Grudnia"
              timeLabel="7:45"
              addressLabel="Mirów Nowy 13"
              serviceType="Hybryda"
              serviceName="Nail Shine"
              navigation={navigation}
              onOcePress={() => {}}
            /> 
     
       
        </ScrollView> }

      
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 35,
  },

  DoneVisitsLabelTextStyle: {
    fontSize: 20,
    color: "white",
    textAlign: "left",
    fontWeight: "500",
  },
  UpperBar: {
    backgroundColor: "white", 
    width: "110%",
    height: 50,
  },
  UpperBarText: {
    marginLeft: 30,
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: "500",
    
  },
  scrollContainer: { flex: 1,
    width: '100%',
    flex: 1,
   
  }
});

export default CalendarScreen;
