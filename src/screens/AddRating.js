import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';

import GradientBackground from '../components/GradientBackground';

const CameraComponent = ({ capturedPhoto, setCapturedPhoto, type, toggleCameraType }) => {
  const cameraRef = useRef(null);

  useEffect(() => {
    return () => {
      // Zatrzymaj podgląd kamery i zwolnij zasoby
      if (cameraRef.current) {
        cameraRef.current.pausePreview();
        cameraRef.current.release();
      }
    };
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const { uri } = await cameraRef.current.takePictureAsync();
      setCapturedPhoto(uri);
    }
  };

  return (
    <Camera style={styles.camera} type={type} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={takePicture}>
          <Text style={styles.text}>{capturedPhoto ? 'Retake Picture' : 'Take Picture'}</Text>
        </TouchableOpacity>
      </View>
    </Camera>
  );
};

const AddRating = ({ navigation }) => {
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [capturedPhoto, setCapturedPhoto] = useState(null);

  const toggleCameraType = () => {
    setType((current) =>
      current === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  return (
    <GradientBackground>
      <View style={styles.container}>
        <CameraComponent
          capturedPhoto={capturedPhoto}
          setCapturedPhoto={setCapturedPhoto}
          type={type}
          toggleCameraType={toggleCameraType}
        />
        {capturedPhoto && <Image source={{ uri: capturedPhoto }} style={styles.preview} />}
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    margin: 20,
  },
  button: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  preview: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default AddRating;
