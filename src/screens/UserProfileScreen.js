import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import GradientBackground from '../components/GradientBackground';
import GradientBarShort from '../components/GradientBarShort';
import PinkButtonShort from '../components/PinkButtonShort'

const UserProfileScreen = ({navigation}) => {
  

  return (
    <GradientBackground>
      <View style={styles.MainContainer}>
      <View style={[styles.UpperBar]}>
        <Text style={[styles.UpperBarText]}>Mój profil</Text>
    </View>
            <View style={[styles.UpperDiv, styles.frameLayout]}>
              <View style={[styles.RightDiv, styles.AvatarLayout]}>
                <View style={[styles.PhotoBorderDiv, styles.AvatarLayout]}>
                  <View style={[styles.PhotoBorder]} /></View>
                </View>
              <View style={[styles.frameLayout]}>
                {/* <Image
                  style={[styles.frame4, styles.frameLayout]}
                  contentFit="cover"
                  source={require("../assets/frame.png")}
                /> */}
                <View style={styles.LeftDiv}>
                  <Text style={styles.Label}>{`Witaj `}Jacek!</Text>
                </View>
              </View>
            </View>
            
          <View style={[styles.Data, styles.frameLayout]}>
          
            <View style={[styles.PersonalData, styles.TextStyle1]}>
              

              <Text style={[styles.PersonalDataText]}>Dane osobowe</Text>

              <View style={styles.NameAndCityBox}>
                
          

                <View style={[styles.NameBox]}>
                  <Text style={[styles.ExampleName]}>Jacek Nowak</Text>
                  <Text style={[styles.NameText, styles.NameAndCityText]}>Imie i Nazwisko</Text>
                </View>
                <View style={[styles.CityBox]}>
                  <Text style={[styles.ExampleCity, styles.TextStyle2]}>Kielce</Text>
                  <Text style={[styles.CityText, styles.NameAndCityText]}>Miejscowość</Text>
                </View>
              </View>
            </View>
            <View style={[styles.PhoneNumberDiv, styles.frameLayout]}>
              <View style={[styles.PhoneNumberBox, styles.TextStyle1]}>
                <Text style={[styles.PhoneNumberExample, styles.TextStyle2]}>783623123</Text>
                <Text style={styles.PhoneNumberText}>Nr telefonu</Text>
              </View>
              <View style={[styles.EmailBox,styles.TextStyle1,]}>
                <Text style={[styles.EmailExample, styles.TextStyle2]}>JacekNowak@gmail.com</Text>
                <Text style={[styles.EmailText]}>Email</Text>
              </View>
            </View>
          </View>
    </View>
        <PinkButtonShort text="WYLOGUJ" onPress={() => navigation.navigate('LoginScreen')}/>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  UpperBar: {
    backgroundColor: "white",
    top: 33,
    width: "100%",
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
  container: {
    flex: 1,
    marginTop: 20,
    paddingBottom: 10,
  },
  MainContainer: {
    flex: 1,
    height: '100%',
  },
  UpperDiv: {
    top: 99,
    height: 147,
    left: 15,
    width: '100%'
  },
  RightDiv: {
    top: -1,
    left: 179,
    height: 149,
    overflow: "hidden",
  },
  LeftDiv: {
    top: 28,
    left: 37,
    width: 113,
    height: 91,
    position: "absolute",
    overflow: "hidden",
  },
  PhotoBorder: {
    borderStyle: "solid",
    borderColor: "#a77884",
    borderWidth: 5,
    position: "absolute",
    borderRadius: 20,
    left: "15.33%",
    bottom: "4.76%",
    width: "84.67%",
    height: "95.24%",
    right: "0%",
    top: "0%",
  },
  PhotoBorderDiv: {
    height: 147,
    left: 0,
    top: 0,
  },
  frameLayout: {
    width: 329,
    position: "absolute",
  },
  AvatarLayout: {
    width: 150,
    position: "absolute",
  },
  TextStyle1: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: "0%",
    right: "0%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  TextStyle2: {
    alignItems: "center",
    display: "flex",
    fontWeight: "300",
    fontSize: 20,
    top: "50%",
    color: "white",
    textAlign: "left",
  },
  Data: {
    top: 280,
    height: 300,
    left: 15,
  },
  NameAndCityText: {
    fontSize: 12,
    alignItems: "center",
    fontWeight: "300",
    color: "white",
    textAlign: "left",
    position: "absolute",
    height:20,
  },
  NameBox: {
    width: 333,
    top: 0,
    height: 47,
    left: 0,
    position: "absolute",
  },
  ExampleName: {
    marginTop: -5,
    width: 333,
    alignItems: "center",
    fontWeight: "300",
    fontSize: 20,
    top: "50%",
    color: "white",
    textAlign: "left",
    marginLeft: -166.5,
    left: "50%",
    height: 37,
    position: "absolute",
  },
  NameText: {
    marginTop: -23.5,
    height: 13,
    width: 333,
    top: "50%",
    marginLeft: -166.5,
    left: "50%",
  },
  NameAndCityBox: {
    top: 50,
    height: 100,
    width: 333,
    left: 0,
    position: "absolute",
  },
  CityText: {
    height: "27.84%",
    left: "0%",
    top: "0%",
    width: "100%",
  },
  CityBox: {
    top: 47,
    width: 333,
    height: 47,
    left: 0,
    position: "absolute",
  },
  ExampleCity: {
    marginTop: -5,
    width: 333,
    alignItems: "center",
    fontWeight: "300",
    fontSize: 20,
    top: "50%",
    color: "white",
    textAlign: "left",
    marginLeft: -166.5,
    left: "50%",
    height: 37,
    position: "absolute",
  },
  Label: {
    height: "92.31%",
    fontSize: 36,
    fontStyle: "italic",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    color: "white",
    left: "0%",
    top: "0%",
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
    width: "100%",
  },
  PhoneNumberExample: {
    marginTop: 10,
    height: 25,
    width: 333,
    marginLeft: -166.5,
    left: "50%",
    position: "absolute",
  },
  PhoneNumberText: {
    marginTop: 18.7,
    marginLeft: -163.55,
    height: 35,
    fontSize: 20,
    width: 333,
    alignItems: "center",
    display: "flex",
    color: "white",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  EmailExample: {
    height: "32.05%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  EmailExamples: {
    height: 36,
    width: 333,
    top: 0,
    overflow: "hidden",
  },
  EmailBox: {
    top: "50%",
    height: "50%",
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    bottom: "0%",
  },
  PhoneNumberDiv: {
    top: 153,
    height: 156,
    left: 0,
    overflow: "hidden",
  },
  PhoneNumberBox: {
    bottom: "50%",
    height: "50%",
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: "0%",
  },
  PersonalData: {
    height: "48%",
    top: "1.67%",
    bottom: "50.33%",
  },
  PersonalDataText: {
    marginTop: -72,
    height: 34,
    fontSize: 20,
    width: 333,
    alignItems: "center",
    display: "flex",
    top: "50%",
    marginLeft: -166.5,
    color: "white",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  EmailText: {
    marginTop: -17.95,
    height: 34,
    fontSize: 20,
    width: 333,
    alignItems: "center",
    display: "flex",
    top: "50%",
    marginLeft: -166.5,
    color: "white",
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
});

export default UserProfileScreen;
