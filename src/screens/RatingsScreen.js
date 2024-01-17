import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import GradientBackground from '../components/GradientBackground';
import UpperBarBack from '../components/UpperBarBack';
import VerticalGradientBar from '../components/VerticalGradientBar';
import StarRating from 'react-native-star-rating';
import CommentLabel from '../components/CommentLabel';


const RatingsScreen = ({navigation}) => {
 
  return (
    <GradientBackground>
          <View style={styles.container}>

              <UpperBarBack 
                name = "Złota rączka"
                onPress={() => navigation.goBack()}
              />

          <View style={styles.avgRation}>
              <Text style={styles.textAvgRatio}>Średnia ocen</Text>

              <View style={styles.detailRatioBox}>
                
                  <View style={styles.avgRationBox}>
                    <Text style={styles.textAvgRatioNr}>5,0</Text>
                  </View>
                <VerticalGradientBar/>
                  <View style={styles.avgStars}>

                      <StarRating
                          maxStars={5}
                          rating={5}
                          fullStarColor={'yellow'}
                          starSize={26}
                          containerStyle={styles.starRatingContainer}
                          buttonStyle={{ marginRight: 5 }}
                      />

                      <Text style={styles.textStars}>na podstawie 13 opinii</Text>

                  </View>

              </View>
            
          </View>

          <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                    
                    <CommentLabel
                      name='Oskar'
                      data='3 sty 2024'
                      service='Prostowanie felg'
                      comment='Dziś odebrałem swojego Dodge’a od chłopaków. Proces umówienia auta, przyjęcia samochodu oraz przekazania rewelacja. Widać ze standardy jakie maja towarzyszyć idei tej sieci są na wysokim poziomie tak jak w założeniu miało to wyglądać'
                    />
                    <CommentLabel  name='Mateusz'
                      data='7 sty 2024'
                      service='Prostowanie felg'
                      comment='Tanio nie jest. Ale coś za coś. Zlecone naprawy zostały wykonane bez żadnych zastrzeżeń - wszystko starannnie i fachowo. Przegląd ujawnił dodatkowe niuanse, które zostały naprawione tego samego dnia. Miłą niespodzianką po otworzeniu maski był fakt, że mechanik zostawił po sobie większy porządek niż zastał - pokrywa czysta, karteczki starannie umieszczone.'
                    />
                      <CommentLabel  name='Mateusz'
                      data='7 sty 2024'
                      service='Prostowanie felg'
                      comment='Tanio nie jest. Ale coś za coś. Zlecone naprawy zostały wykonane bez żadnych zastrzeżeń - wszystko starannnie i fachowo. Przegląd ujawnił dodatkowe niuanse, które zostały naprawione tego samego dnia. Miłą niespodzianką po otworzeniu maski był fakt, że mechanik zostawił po sobie większy porządek niż zastał - pokrywa czysta, karteczki starannie umieszczone.'
                    />
                      <CommentLabel  name='Mateusz'
                      data='7 sty 2024'
                      service='Prostowanie felg'
                      comment='Tanio nie jest. Ale coś za coś. Zlecone naprawy zostały wykonane bez żadnych zastrzeżeń - wszystko starannnie i fachowo. Przegląd ujawnił dodatkowe niuanse, które zostały naprawione tego samego dnia. Miłą niespodzianką po otworzeniu maski był fakt, że mechanik zostawił po sobie większy porządek niż zastał - pokrywa czysta, karteczki starannie umieszczone.'
                    />

            </ScrollView>
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
  avgRation: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      width: '100%',
      height: 110,
      marginTop: 20,
      borderRadius: 10,
  },
  textAvgRatio: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    marginLeft: 17,
    marginTop: 8,
  },
  detailRatioBox: {
    flexDirection: 'row',
    marginTop: 5,
    height: 65,
  },
  textAvgRatioNr: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '800',
    color: '#fff',
  },
  avgRationBox: {
    width: 100,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avgStars: {
    alignItems: 'flex-start',
    height: '100%',
    width: 200,
    paddingLeft: 10,
  },
  starRatingContainer: {
    marginTop: 10,
  },
  textStars: {
    fontSize: 11,
    fontWeight: '200',
    color: '#fff',
    marginTop: 5,
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
});

export default RatingsScreen;
