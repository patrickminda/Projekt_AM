import { Text, StyleSheet, View,  Pressable } from "react-native";
import React, { useMemo } from 'react';
const getStyleValue = (key, value) => {
    if (value === undefined) return;
    return { [key]: value === "unset" ? undefined : value };
  };
  const DoneVisits = ({
    dateOrTime,
    timeOrDate,
    address,
    serviceName,
    serviceTitle,
    adresTop,
    adresWidth,
    onOcePress,
  }) => {
    const wizyta2Style = useMemo(() => {
      return {
        ...getStyleValue("top", adresTop),
        ...getStyleValue("width", adresWidth),
      };
    }, [adresTop, adresWidth]);
  
    return (
      <View style={[styles.DoneVisitsDiv, wizyta2Style]}>
        <View style={styles.RightBox}>
          <Text style={[styles.DateTextStyle, styles.HourTextDiv]}>{dateOrTime}</Text>
          <Text style={[styles.HourTextStyle, styles.HourTextDiv]}>
            {timeOrDate}
          </Text>
        </View>
        <View style={[styles.AddressDiv, styles.LeftBox]}>
          <Text style={[styles.AddressTextStyle, styles.DoneVisitTextStyle]}>{address}</Text>
        </View>
        <View style={[styles.VisitTypeDiv, styles.LeftBox]}>
          <Text style={[styles.VisitTypeTextSyle, styles.DoneVisitTextStyle]}>
            {serviceName}
          </Text>
        </View>
        <View style={[styles.NameTextDiv, styles.LeftBox]}>
          <Text style={[styles.NameTextStyle, styles.DoneVisitTextStyle]}>
            {serviceTitle}
          </Text>
        </View>
        <Pressable style={[styles.RateDiv, styles.HourTextDiv]} onPress={onOcePress}>
          <Text style={styles.RateTextStyle}>Oceń</Text>
        </Pressable>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    DoneVisitsDiv: {
      top: 131,
      left: 1,
      width: 321,
      height: 75,
      position: "absolute",
    },
    DoneVisitTextStyle: {
      height: 22,
      width: 138,
      textAlign: "left",
      alignItems: "center",
      display: "flex",
      color: "white",
      left: 0,
      top: 0,
      position: "absolute",
    },
    LeftBox: {
      height: 25,
      width: 136,
      left: 2,
      overflow: "hidden",
      position: "absolute",
    },
    AddressTextStyle: {
      fontWeight: "300",
      fontSize: 13,
      height: 22,
      width: 138,
      textAlign: "left",
    },
    AddressDiv: {
      top: 25,
    },
    VisitTypeTextSyle: {
      fontWeight: "300",
      fontSize: 13,
      height: 22,
      width: 138,
      textAlign: "left",
    },
    VisitTypeDiv: {
      top: 50,
    },
    NameTextStyle: {
      height: 22,
      width: 138,
      textAlign: "left",
      fontSize: 15,
    },
    NameTextDiv: {
      top: 0,
    },
    RightBox: {
      left: 143,
      backgroundColor: "pink",
      width: 91,
      top: 0,
      height: 75,
      position: "absolute",
    },
    DateTextStyle: {
      width: 90,
      height: 35,
      display: "flex",
      fontWeight: "500",
      left: 0,
      alignItems: "center",
      textAlign: "center",
      color: "white",
      fontSize: 15,
      top: 0,
    },
    HourTextStyle: {
      top: 35,
      height: 40,
      display: "flex",
      fontWeight: "500",
      left: 0,
      alignItems: "center",
      textAlign: "center",
      color: "white",
      fontSize: 15,
      width: 91,
    },
    HourTextDiv: {
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
    },
    RateTextStyle: {
      fontWeight: "700",
      textAlign: "center",
      color: "white",
      fontSize: 14,
    },
    RateDiv: {
      top: 25,
      left: 256,
      backgroundColor: "pink",
      width: 65,
      height: 30,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 30,
    },
  });
  
  export default DoneVisits;