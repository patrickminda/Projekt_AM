import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, TouchableOpacity } from 'react-native';

import GradientBackground from '../components/GradientBackground';
import WhiteButton from '../components/WhiteButton';
import SearchingVisitContainer from "../components/SearchingVisitContainer";
import UpperLabel from "../components/UpperLabel";
import GradientBarShort from '../components/GradientBarShort';

const SearchScreen = ({navigation}) => {
  
  return (
    <GradientBackground>
      <View style={styles.container}>
          <View style={styles.SearchFilters}>
          <Image
                style={styles.LoopImage}
                contentFit="cover"
                source={require("../../assets/search.png")}
              />
          <Text style={styles.searchingtext}>
            Szukaj firmy lub uslugi
          </Text>
            <View style={styles.BottomSearchingFilters}>
              <View style={styles.datewhen}>
                <Text style={styles.DateText}>kiedy?</Text>
              </View>
              <View style={styles.datewhere}>
                <Text style={styles.DateText}>gdzie?</Text>
              </View>
            </View>
          </View>
          <View style={styles.ResultsLabel}>
            <Text style={styles.ResultsText}>Wyniki</Text>
                <Text style={styles.Sort}>Sortuj</Text>
          </View>
          <GradientBarShort/>
        <SearchingVisitContainer 
          Image={require('../../assets/zlota_raczka.png')}
          Rate="5,0"
          RatesAmount="48 opinii"
          Address="Jana Pawła 11/11, Kielce"
          Name="Złota rączka"
          />
          <GradientBarShort/>
          <SearchingVisitContainer
          Image={require('../../assets/pani_scyzor.png')}
          Rate="4.2"
          RatesAmount="3 opinie"
          Address="Krakowska 12, Kielce"
          Name="Pani Scyzor"
          />
          <GradientBarShort/>
        </View>
        {/* <WhiteButton text={"Zlota raczka"} onPress={() => navigation.navigate('ServiceProviderScreen')}/> */}
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

   SearchFilters: {
    height: 150,
    width: '100%',
    left: 0,
   },
   BottomSearchingFilters: {
    top: 20,
    width: '100%',
    height: 50,
   },
   datewhen: {
    left:20,
    height:40,
    width: "30%",
    top: 10,
    borderWidth: 1,
    borderRadius:30,
    borderColor: "white",
   },
   datewhere: {
    marginLeft: "50%",
    height:40,
    width: "40%",
    left:20,
    top: -30,
    borderWidth: 1,
    borderRadius:30,
    borderColor: "white",
   },
   DateText: {
    height: 40,
    fontWeight: "100",
    fontSize: 25,
    color: "white",
    width:'100%',
    textAlign: "center",
   },  
   searchingtext: {
    fontWeight: "100",
    fontSize: 20,
    textAlign: "center",
    color: "white",
    borderColor:"white",
    borderWidth: 1,
    borderRadius:30,
    
   },
   LoopImage: {
    width: 25,
    height: 25,
    left: 50,
    top: 28,
   },
   ResultsLabel: {
    top: 30,
    height: 150,
    width: '100%',
    left: 0,
   },
   ResultsText: {
    width: 142,
    height: 50,
    fontSize: 25,
    fontWeight: "500",
    color: "white",
    },
   Sort: {
    fontSize: 12,
    left: 300,
    top: -40,
    width: 46,
    height: 25,
    fontWeight: "500",
    color: "white",
   },
});

export default SearchScreen;


