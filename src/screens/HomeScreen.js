import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import  {GradientBackground} from '../components';


const HomeScreen = () => {
  return (
    <GradientBackground>
      <View style={styles.lowerdiv}>
        <View style={styles.soonestvisitbox}>
          <View style={styles.datebox}>
            <Text style={styles.daytext}>17 Styczeń</Text>
            <Text style={styles.hourtext}>17:30</Text>
          </View>
          <View style={[styles.addressbox, styles.typeboxLayout]}>
            <Text style={[styles.addresstext, styles.typetextLayout]}>
              Krakowska 12, Kielce
            </Text>
          </View>
          <View style={[styles.typebox, styles.typeboxLayout]}>
            <Text style={[styles.typetext, styles.typetextLayout]}>
              Farbowanie włosów
            </Text>
          </View>
          <View style={[styles.namebox, styles.typeboxLayout]}>
            <Text style={[styles.nametext, styles.typetextLayout]}>
              Pani Scyzor
            </Text>
          </View>
        </View>
        <View style={[styles.soonestvisitlabel, styles.kreskaIconLayout1]}>
          <Text
            style={[
              styles.soonestvisitlabeltext,
              styles.searchinglabeltextTypo,
            ]}
          >
            Najbliższa wizyta
          </Text>
        </View>
        <View style={[styles.searchingbox, styles.borderIconLayout]}>
          <Image
            style={[styles.searchIcon, styles.typetextLayout]}
            contentFit="cover"
            source={require("../../assets/search.png")}
          />
          <Text style={styles.searchingboxtext}>Szukaj</Text>
        </View>
        <View style={[styles.searchinglabel, styles.kreskaIconLayout1]}>
          <Image
            style={[styles.kreskaIcon, styles.kreskaIconLayout]}
            contentFit="cover"
            source={require("../../assets/kreska.png")}
          />
          <Text
            style={[styles.searchinglabeltext, styles.searchinglabeltextTypo]}
          >
            Szybkie wyszukiwanie
          </Text>
        </View>
      </View>
      <View style={styles.UpFrame}>
        <Image
          style={styles.BackgroundImage}
          source={require("../../assets/theme.png")}
        />
        <View style={styles.ThemeTextBackground}>
          <Text style={styles.ThemeText}>W czym możemy Ci dzisiaj pomóc?</Text>
        </View>
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  typeboxLayout: {
    height: 25,
    width: 136,
    left: 2,
    position: "absolute",
    overflow: "hidden",
  },
  typetextLayout: {
    height: 22,
    position: "absolute",
  },
  kreskaIconLayout1: {
    width: 330,
    position: "absolute",
  },
  kreskaIconLayout: {
    height: 1,
    left: 0,
  },
  borderIconLayout: {
    width: 190,
    height: 40,
  },
  textPosition: {
    display: "none",
    position: "absolute",
  },
  datebox: {
    left: 143,
    backgroundColor: "rgba(248, 166, 166, 0.5)",
    width: 150,
    height: 75,
    top: 0,
    position: "absolute",
  },
  daytext: {
    top: 5,
    width: 90,
    height: 35,
    textAlign: "center",
    color: "white",
    fontWeight: "500",
    fontSize: 15,
  },
  hourtext: {
    top: 35,
    height: 40,
    textAlign: "center",
    color: "white",
    fontWeight: "500",
    fontSize: 15,
    width: 91,
    position: "absolute",
  },
  addressbox: {
    top: 25,
  },
  addresstext: {
    textAlign: "left",
    alignItems: "center",
    color: "white",
    fontWeight: "300",
    fontSize: 14,
  },
  typebox: {
    top: 50,
  },
  typetext: {
    textAlign: "left",
    alignItems: "center",
    color: "white",
    fontWeight: "300",
    fontSize: 14,
  },
  namebox: {
    top: -5,
  },
  nametext: {
    width: 138,
    height: 25,
    textAlign: "left",
    alignItems: "center",
    color: "white",
    fontSize: 20,
  },
  lowerdiv: {
    top: 400,
    left: 12,
    height: 250,
    width: 333,
    position: "absolute",
  },
  searchingbox: {
    top: 31,
    borderRadius: 30,
    borderColor: "white",
    borderWidth: 3,
  },
  searchinglabeltextTypo: {
    height: 40,
    width: '100%',
    color: "white",
    top: "50%",
    left: "50%",
    textAlign: "left",
    fontWeight: "100",
    alignItems: "center",
    display: "flex",
    fontSize: 20,
    position: "absolute",
  },
  searchIcon: {
    top: 6,
    left: 16,
    width: 17,
  },
  searchingboxtext: {
    marginLeft: -21,
    top: 7,
    fontSize: 13,
    fontWeight: "100",
    left: "50%",
    textAlign: "left",
    color: "white",
  },
  searchinglabel: {
    left: 2,
    width: 330,
    top: 0,
  },
  searchinglabeltext: {
    height:20,
    marginTop: -20,
    marginLeft: -164,
    width: 173,
  },
  kreskaIcon: {
    top: 18,
    width: 330,
    position: "absolute",
  },
  soonestvisitbox: {
    top: 150,
    width: 234,
    height: 100,
    left: 3,
    position: "absolute",
  },
  soonestvisitlabeltext: {
    marginTop: -5,
    marginLeft: -166,
    width: 333,
    height: 50,
  },
  soonestvisitlabel: {
    top: 89,
    height: 20,
    left: 3,
    width: 330,
  },
  BackgroundImage: {
    height: 360,
    width: "100%",
  },
  ThemeTextBackground: {
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 20,
    height: 80,
    position: "absolute",
    top: 100,
    width: "100%",
  },
  ThemeText: {
    color: "#f7a6a6",
    fontSize: 30,
    fontWeight: "400",
    height: 150,
    textAlign: "center",
    textShadowColor: "#00000040",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
});

export default HomeScreen;
