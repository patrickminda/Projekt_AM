import React, {useState} from 'react';
import { View, Text, StyleSheet,ToastAndroid, TouchableOpacity, Image, TextInput } from 'react-native';
import StarRating from 'react-native-star-rating';
import {GradientBackground, GradientBarShort, PinkButtonShort, UpperBarBack} from '../components';

const AddRating = ({ route, navigation}) => {
  
    const [rating, setRating] = useState(0);
    const imageUri = route.params?.image;

    const showToast = () => {
      ToastAndroid.show('Komentarz został pomylśnie dodany!', ToastAndroid.SHORT);
    };

  return (

    <GradientBackground>

        <View style={styles.container}>

              <UpperBarBack name = "Dodaj opinie" onPress={() => navigation.goBack()}/>
        
              <Text style={styles.textName}> Nazwa Firmy </Text>

              <View style={styles.ratingContainer}>

                  <Text style={styles.textRating}>Oceń wizytę</Text>
                  <GradientBarShort/>

                  <StarRating
                      disabled={false}
                      maxStars={5}
                      rating={rating}
                      selectedStar={(rating) => setRating(rating)}
                      fullStarColor={'yellow'}
                      starSize={28}
                      containerStyle={styles.starRatingContainer}
                      buttonStyle={{ marginRight: 7 }}
                  />

              </View>
          
              <View style={styles.ratingContainer}>

                  <Text style={styles.textRating}>Dodaj komentarz</Text>
                  <GradientBarShort/>

              </View>
              
              <View style={styles.input}>
                    <TextInput
                      placeholder='Dodaj komentarz'
                      placeholderTextColor="#fff"
                      style={styles.inputText}
                      multiline = {true}
                      numberOfLines={4}
                    />
              </View>

              <View style={styles.imgaeArea}>
                    <TouchableOpacity style={styles.service} onPress={() => navigation.navigate('AddPhoto')}>
                        <Text style={styles.serviceText}>Dodaj zdjecie</Text>
                    </TouchableOpacity>

                    {imageUri && (
                      <Image source={{ uri: `file://${imageUri}` }} style={styles.image} />
                    )}

                </View>
                
                    <PinkButtonShort text="Zapisz" onPress={() => { navigation.goBack(); showToast() ;} }/>
               
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
   imgaeArea:{
    alignItems: 'center',
    marginBottom: 40,
   },
  image: {
    width: 300,
    height: 200,
  },
  btnCam: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 50,
    borderRadius: 6,
    backgroundColor: 'green',
    margin: 20,
  },
  textBtn: {
    color: '#fff',
  },
  textName: {
    marginTop: 15,
    marginBottom: 50,
    fontSize: 24,
    fontWeight: '400',
    color: '#FFF',
    textAlign: 'center',
  },
  ratingContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start', 
    width: '100%',
    marginBottom: 20,
  },
  textRating: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: '200',
    textAlign: 'left',
  },
  starRatingContainer: {
    marginTop: 10,
    alignItems: 'flex-start',
  },
  input: {
    width: '100%',
    height: 100,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
},
  inputText: {
    color: "#fff",
    paddingHorizontal: 30,
    width: '100%',
    textAlign: 'left',  
    fontSize: 16,  
    fontWeight: '100',
},
service: {
  borderRadius: 10,
  width: 190,
  height: 31,
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#000',
  marginVertical: 30,
  borderWidth: 2,
  borderColor: '#A77884',
},
serviceText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: 'medium',
},
});

export default AddRating;