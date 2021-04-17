import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';

export default function App({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const back = Camera.Constants.Type.back;
  const front = Camera.Constants.Type.front;
  const [type, setType] = useState(back);
  const [photo, setPhoto] = useState(null);
  const [base64, setBase64] = useState(null);
  let camera;
  const { width: winWidth, height: winHeight } = Dimensions.get('window');
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const fetchApi = async (data) => {
    console.log('fetching...');
    const result = await fetch('https://1723ab792224.ngrok.io/ml/detect', {
      method: 'POST',
      headers: {
        // Accept: 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      body: data
    }).then((response) => {
      console.log('ahihi')
      // if (response==null) console.log('null');
      // console.log(response);
      return response.json();
    }).catch((error) => {
      console.error(error);
      return error;
    });
    console.log('end fetch');
    return result;
    // alert('height:' + photo.height + ' width:' + photo.width);
  }
  const snap = async () => {
    if (camera) {
      let photo = await camera.takePictureAsync();

      setPhoto(photo);
      console.log(photo)
      
      // console.log(base64);
      // const uri = photo.uri;
      // console.log(uri);
      var data = new FormData()
      data.append('name', 'file');
      data.append('image', 'photo');

      const result = await fetchApi(data);
      console.log('Fetched!')
      console.log(result[0]);
    }

  }
  const flipBtn = () => (<TouchableOpacity
    style={styles.button}
    onPress={() => {
      setType(
        type === back
          ? front
          : back
      );
    }}>
    <Image style={{
      // margin: 'auto',
      //  position: 'absolute',
      right: 10,
      marginTop: 21,
      //   marginBottom:'auto',
      //   borderRadius: 50,
      height: 40,
      width: 40,
    }} source={require('../assets/flip.png')}></Image>

  </TouchableOpacity>)
  const takePhotoBtn = () =>
  (<TouchableOpacity
    // style={styles.takeBtn}
    onPress={snap}>
    <Image style={{

      borderRadius: 50,
      height: 75,
      width: 75,
    }} source={require('../assets/camera.png')}></Image>
  </TouchableOpacity>)
  return (
    <View style={styles.container}>
      {photo == null ?
        (<Camera base64={true} style={styles.camera} type={type} ref={ref => {
          camera = ref;
        }}>
          <View style={styles.buttonContainer}>
            {flipBtn()}
            {takePhotoBtn()}
          </View>
        </Camera>) :
        <View style={{}}>

          <Image source={{ uri: photo.uri }}
            style={{ width: winWidth, height: winHeight }} />
          <Button style={{}} title="Detect again" onPress={() => setPhoto(null)}></Button>
        </View>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse'
  },
  camera: {
    flex: 1,
    flexDirection: 'column-reverse',
    position: 'relative'
  },
  buttonContainer: {
    //  flex:0.1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    // flexDirection: 'row',
    height: 100,
    width: '100%'
    // bottom:0,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',

  },
  takeBtn: {
    margin: 'auto',
    bottom: 10,
    width: 70,
    height: 70

  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});