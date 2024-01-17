import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import GradientBackground from '../components/GradientBackground';
import PinkButtonShort from '../components/PinkButtonShort'
import UpperLabel from "../components/UpperLabel";
import UserData from "../components/UserData"

const UserProfileScreen = ({navigation, value}) => {
  
  return (
    <GradientBackground>
      <View style={styles.container}>

      <UpperLabel title='Mój profil'/>


              <View style={styles.UpperDiv}>

                    <View style={styles.LeftDiv}>
                          <Text style={styles.Label}>{`Witaj `}Jacek!</Text>
                    </View>

                  <View style={styles.RightDiv}>
                          
                            <Image  style={styles.Image}
                             resizeMode="cover"
                              source={require("../../assets/jacek.png")}
                            />
                       
                </View>
              </View>
        
<View style={styles.userData}>


             <UserData value = "Dane osobowe"/>
                <Text style={styles.text2}>Imie i Nazwisko</Text>
                <Text style={styles.text1}>Jacek Nowak</Text>
                                    
                <Text style={styles.text2}>Miejscowość</Text>
                <Text style={styles.text1}>Kielce</Text>
                    
             <UserData value = "Numer telefonu"/>
                <Text style={styles.text1} >783623123</Text>

             <UserData value = "Email"/>
                 <Text style={styles.text1}>JacekNowak@gmail.com</Text>
          </View>    
        

       <PinkButtonShort text="WYLOGUJ" onPress={() => navigation.navigate('LoginScreen')}/>
       
      </View>
          
        

    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  UpperDiv: {
    height: 150,
    width: '100%',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  LeftDiv: {
      width: '50%',
      justifyContent: 'center',
      alignItems: 'center'
  },
  RightDiv: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  Image: {
    borderWidth: 5,
    height: '100%',
    width: '70%',
    borderRadius: 50,
    borderColor: '#F8A6A6',
  },
  Label: {
    fontSize: 36,
    fontStyle: "italic",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    width: "100%",
  },
  text1: {
    fontSize: 18,
    fontWeight: '200',
    color: "#fff",
    marginTop: 7,
    textAlign: 'left',
    width: '100%'
  },
  text2: {
    fontSize: 12,
    fontWeight: '200',
    color: "#fff",
    marginTop: 5,
    textAlign: 'left',
    width: '100%'
  },
  userData:{
    width: '100%',
    marginBottom: 40,
  }
});

export default UserProfileScreen;