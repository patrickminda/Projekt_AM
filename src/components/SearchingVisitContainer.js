import * as React from "react";
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from "react-native";

const SearchingVisitContainer = ({
  Rate,
  RatesAmount,
  Address,
  Name,
  ThemeIconSource,
  Image,
  navigation,
  onPress
}) => {
  return (
    <ImageBackground
      style={styles.Container}
      source={Image}
      resizeMode="cover"
    >
      <View style={styles.RatingBox}>
        <Text style={styles.RateStyle}>{Rate}</Text>
        <Text style={styles.RateAmountStyle}>{RatesAmount}</Text>
      </View>
      <View style={styles.lewydiv} >
        <View style={styles.PropetiesContainer}>
          <TouchableOpacity onPress={onPress} style={styles.button}>//TUTAJ COS KOMBINOWALEM Z NAWIGACJA ALE PIZDA
            <Text style={styles.TextStyle} onPress={() => navigation.navigate('ServiceProviderScreen')}>{Name}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.adres, styles.PropetiesContainer]}>
          <Text style={styles.AddressTextStyle}>
            {Address}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: 150,
  },
  RatingBox: {
    left:305,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 15,
    height: 60,
    width: 80,
  },
  RateStyle: {
    top:5,
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    color: "white",
  },
  RateAmountStyle: {
    fontSize: 15,
    fontWeight: "100",
    textAlign: "center",
    color: "white",
  },
  lewydiv: {
    backgroundColor: "pink",
    width: '40%',
    height: 150,
    top: -60,
  },
  PropetiesContainer: {
    height: 50,
    width: "95%",
    marginTop: 15,
    marginBottom: -10,
    left: 5,
  },
  button: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 60,
    width: "100%",
    fontWeight: "700",
    color: "white",
    fontSize: 24,
},
  TextStyle: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 60,
    width: "100%",
    fontWeight: "700",
    color: "white",
    fontSize: 24,
  },
  AddressTextStyle: {
    overflow: "hidden",
    height: 60,
    width: '100%',
    fontSize: 15,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontWeight: "700",
    color: "white",
  },
});

export default SearchingVisitContainer;