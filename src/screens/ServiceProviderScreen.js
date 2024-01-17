import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

import GradientBackground from '../components/GradientBackground';
import ProviderData from '../components/ProviderData';
import Services from '../components/Services';
import DetailService from '../components/DetailService';

import { Ionicons } from '@expo/vector-icons';

const ServiceProviderScreen = ({ navigation }) => {
  return (
    <GradientBackground>
      <View style={styles.container}>
        <Image source={require('../../assets/zlota_raczka.png')} style={styles.image} />

        <View style={styles.ratio}>
          <Text style={styles.numberRatio}>5,0</Text>
          <Text style={styles.textRatio}>13 opinii</Text>
        </View>

        <View style={styles.overlay}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
            <Ionicons name="chevron-back" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <ProviderData name="Złota rączka" adress="Jana Pawła II 10, 25-255 Kielce" />

        <View style={styles.navigate}>
          <View style={styles.service}>
            <Text style={styles.serviceText}>Usługi</Text>
          </View>

          <TouchableOpacity
          
            onPress={() => navigation.navigate('RatingsScreen')}
            style={{ ...styles.service, backgroundColor: '#A77884' }}>
            <Text style={styles.serviceText}>Opinie</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <Services name='Wulkanizacja' />
              <DetailService name='Wyważenie kół na maszynie' price='100.00 zł' />
              <DetailService name='Prostowanie felg' price='150.00 zł' />
              <DetailService name='Popmowanie azotem' price='100.00 zł' />
            <Services name='Diagnostyka' />
            <Services name='Układ hamulcowy' />
            <Services name='Układ wydechowy' />
            <Services name='Serwis akumulatorów' />
            <Services name='Serwis akumulatorów' />
            <Services name='Serwis akumulatorów' />
            <Services name='Serwis akumulatorów' />
            <Services name='Serwis akumulatorów' />
            <Services name='Serwis akumulatorów' />
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
  image: {
    height: 230,
    width: '110%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  ratio: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: 56,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    right: 0,
  },
  textRatio: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'light',
  },
  numberRatio: {
    fontSize: 14,
    color: 'white',
    marginTop: 2,
    fontWeight: 'medium',
  },
  back: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: 56,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    left: 0,
  },
  navigate: {
    width: '100%',
    height: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  service: {
    borderRadius: 10,
    width: 150,
    height: 26,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#A77884',
  },
  serviceText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'medium',
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
});

export default ServiceProviderScreen;
