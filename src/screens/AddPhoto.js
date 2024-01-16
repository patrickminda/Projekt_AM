// AddPhoto.js

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';

const AddPhoto = ({ navigation, route }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const openCamera = () => {
    if (hasCameraPermission) {
      setType(Camera.Constants.Type.back);
      setImage(null);
    }
  };

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);

      const photoUri = `${FileSystem.cacheDirectory}photo.jpg`;
      console.log(photoUri);
      try {
        await FileSystem.copyAsync({
          from: data.uri,
          to: photoUri,
        });
        console.log('Photo saved to:', photoUri);
        navigation.navigate("AddRating", { image: photoUri });
      } catch (error) {
        console.error('Error saving photo:', error);
      }
    }
  };

  if (hasCameraPermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <Camera
          ref={(ref) => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={'1:1'}
        />
      )}
      {!image && (
        <>
          <Button title="Open Camera" onPress={openCamera} />
          {camera && (
            <Button
              title="Flip Image"
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            />
          )}
          {camera && <Button title="Take Picture" onPress={takePicture} />}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
  image: {
    height: 100,
    width: 100,
  },
});

export default AddPhoto;
