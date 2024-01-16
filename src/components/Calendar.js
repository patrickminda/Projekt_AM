import * as React from "react";
import { Text, StyleSheet, View } from "react-native";

const Calendar = () => {
  return (
    <View style={styles.MainDiv}>
      <View style={[styles.Rows, styles.MonthDiv]}>
        <View style={[styles.DayOfTheWeekDiv, styles.wrapperFlexBox]}>
          <Text style={[styles.DayOfTheWeekTextStyle, styles.MonthTextStyle]}>Pon</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.DayOfTheWeekTextStyle, styles.MonthTextStyle]}>Wto</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.DayOfTheWeekTextStyle, styles.MonthTextStyle]}>Śro</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.DayOfTheWeekTextStyle, styles.MonthTextStyle]}>Czw</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.DayOfTheWeekTextStyle, styles.MonthTextStyle]}>Pią</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.DayOfTheWeekTextStyle, styles.MonthTextStyle]}>Sob</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.DayOfTheWeekTextStyle, styles.MonthTextStyle]}>Nie</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>1</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>2</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>3</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>4</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>5</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>6</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>7</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>8</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>9</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>10</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>11</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>12</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>13</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>14</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>15</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>16</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>17</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>18</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>19</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>20</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>21</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>22</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>23</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>24</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>25</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>26</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>27</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>28</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>29</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>30</Text>
        </View>
        <View style={[styles.Columns, styles.wrapperFlexBox]}>
          <Text style={[styles.text, styles.MonthTextStyle]}>31</Text>
        </View>
      </View>
      <View style={[styles.Month, styles.wrapperFlexBox]}>
        <Text style={[styles.MonthStyle, styles.MonthTextStyle]}>Styczeń</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainDiv: {
    justifyContent: 'flex-start',
    height: 290,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    color: 'white',
  },
  MonthDiv: {
    padding: 3,
    flexDirection: "row",
    width: 278,
    borderRadius: 3,
    position: "absolute",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  MonthTextStyle: {
    textAlign: "center",
    color: 'white',
  },
  DayOfTheWeekTextStyle: {
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    color: 'white',
  },
  DayOfTheWeekDiv: {
    height: 36,
    width: 36,
    justifyContent: "center",
    padding: 3,
  },
  Columns: {
    marginLeft: 1,
    height: 36,
    width: 36,
    justifyContent: "center",
    padding: 3,
  },
  Rows: {
    top: 41,
    left: 1,
    backgroundColor: "rgba(120,120,120,0.4)",
    flexWrap: "wrap",
    alignItems: "center",
    padding: 3,
    flexDirection: "row",
    width: 278,
    borderRadius: 3,
  },
  MonthStyle: {
    fontSize: 26,
    fontWeight: "300",
    display: "flex",
    width: 275,
    justifyContent: "center",
    alignItems: "center",
  },
  Month: {
    padding: 3,
    width: 278,
  },
});

export default Calendar;
