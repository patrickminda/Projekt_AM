import React from "react";
import { Text, StyleSheet, View,TouchableOpacity } from "react-native";

const DoneVisits = ({
            eventDate,
            timeLabel,
            serviceType,
            addressLabel,
            serviceName,
            navigation
          }) => {
  
 return (


    <View style={styles.container}>
        <View style={styles.content}>
     
  	  <View style={styles.providerBox}>
           <Text style={styles.textServiceName}> {serviceName} </Text>
           
           <Text style={styles.textType}>{addressLabel}</Text>

           <Text style={styles.textType}>{serviceType}</Text>
         </View>  

      <View style={styles.dataBox}>

        <Text style={styles.textDataBox}>{eventDate}</Text>
        <Text style={styles.textDataBox}>{timeLabel}</Text>
     
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('AddRating')} style={styles.CancelButton}>
        <Text style={{...styles.textDataBox, fontSize: 12}}>Oceń</Text>
      </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: 75,
    marginTop: 10,
    marginBottom: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  providerBox: {
    height: '100%',
    width: '50%',
    alignItems: 'left',
    justifyContent: 'center',
 
  },
  textType: {
    fontWeight: "300",
    fontSize: 12,
    textAlign: "left",
    color: '#fff',
    marginLeft: 10,
    marginTop: 5,
  },

  textServiceName: {
    fontSize: 16,
    marginLeft: 10,
    color: '#fff',
  },

  dataBox: {
    backgroundColor: '#A77884',
    width: '25%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDataBox: {
    color: '#fff',
    marginVertical: 5,
    fontSize: 14,
  },
  
  CancelButton: {
    borderColor: '#A77884',
    backgroundColor: '#A77884',
    borderWidth: 2,
    width: 65,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginLeft: 15,
  },
});
export default  DoneVisits;
