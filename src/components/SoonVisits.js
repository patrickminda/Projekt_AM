import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SoonVisits = ({
  eventDate,
  timeLabel,
  serviceType,
  addressLabel,
  serviceName,
  propTop,
  propWidth,
}) => {
  const wizyta21Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("width", propWidth),
    };
  }, [propTop, propWidth]);

  return (
    <View style={[styles.wizyta2, wizyta21Style]}>
      <View style={styles.CancelButtonDiv}>
        <Text style={styles.CancelButtonTextStyle}>Anuluj</Text>
      </View>
      <View style={styles.RightBox}>
        <Text style={[styles.DateTextDiv, styles.VisitDateTextStyle]}>{eventDate}</Text>
        <Text style={[styles.HourTextDiv, styles.VisitDateTextStyle]}>
          {timeLabel}
        </Text>
      </View>
      <View style={[styles.VisitTypeTextDiv, styles.LeftBox]}>
        <Text style={[styles.VisitTypeTextStyle, styles.VisitPropetiesTextStyle]}>
          {serviceType}
        </Text>
      </View>
      <View style={[styles.AddressTextDiv, styles.LeftBox]}>
        <Text style={[styles.AddressTextStyle, styles.VisitPropetiesTextStyle]}>{addressLabel}</Text>
      </View>
      <View style={[styles.NameTextDiv, styles.LeftBox]}>
        <Text style={[styles.NameTextStyle, styles.VisitPropetiesTextStyle]}>
          {serviceName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  FutureVisitDiv: {
    top: 126,
    left: 1,
    width: 321,
    overflow: "hidden",
    borderRadius: 3,
    height: 75,
    position: "absolute",
  },
  VisitDateTextStyle: {
    display: "flex",
    fontWeight: "500",
    left: 0,
    textAlign: "center",
    color: 'white',
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  LeftBox: {
    height: 25,
    width: 136,
    left: 2,
    overflow: "hidden",
    position: "absolute",
  },
  VisitTypeTextStyle: {
    fontWeight: "300",
    fontSize: 11,
    width: 138,
    textAlign: "left",
  },
  VisitTypeTextDiv: {
    top: 50,
  },
  AddressTextStyle: {
    fontWeight: "300",
    fontSize: 11,
    width: 138,
    textAlign: "left",
  },
  AddressTextDiv: {
    top: 25,
  },
  NameTextStyle: {
    width: 138,
    textAlign: "left",
    fontSize: 15,
  },
  NameTextDiv: {
    top: 0,
  },
  VisitPropetiesTextStyle: {
    height: 22,
    width: 138,
    textAlign: "left",
    display: "flex",
    left: 0,
    top: 0,
    color: 'white',
    alignItems: "center",
    position: "absolute",
  },
  RightBox: {
    left: 143,
    backgroundColor: 'pink',
    width: 91,
    top: 0,
    height: 75,
    position: "absolute",
  },
  DateTextDiv: {
    marginTop: 10,
    width: 90,
    height: 35,
    top: 0,
  },
  HourTextDiv: {
    top: 35,
    height: 40,
    width: 90,
  },
  CancelButtonTextStyle: {
    fontWeight: "700",
    textAlign: "center",
    color: 'white',
    fontSize: 14,
  },
  CancelButtonDiv: {
    top: 25,
    left: 256,
    borderStyle: "solid",
    borderColor: "pink",
    borderWidth: 2,
    width: 65,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    position: "absolute",
  },
});
export default SoonVisits;
