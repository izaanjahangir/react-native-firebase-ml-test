import React, {useState} from 'react';
import {View, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import vision, {VisionFaceContourType} from '@react-native-firebase/ml-vision';
import Message from '../../components/Message';
import Button from '../../components/Button';
import Loading from '../../components/Loading';

import style from './style';
function TextRecognition() {
  const [path, setPath] = useState('');
  const [uri, setUri] = useState('');
  // const [smiling, setSmiling] = useState(false);
  // const [leftEye, setLeftEye] = useState(false);
  // const [rightEye, setRightEye] = useState(false);
  const [loading, setLoading] = useState('');
  // const [face, setFace] = useState(false);

  async function openGallery() {
    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
      },
    };

    try {
      ImagePicker.showImagePicker(options, (response) => {
        if (response.didCancel) {
          throw {message: 'User cancelled image picker'};
        }

        if (response.error) {
          throw response.error;
        }

        // setFace(false);
        // setLeftEye(false);
        // setRightEye(false);
        // setSmiling(false);

        setPath(response.path);
        setUri(response.uri);
        processImage(response.path);
      });
    } catch (e) {
      console.log('E =>', e);
    }
  }

  async function processImage(localPath) {
    try {
      console.log('text');
      setLoading('Analyzing image');

      const processed = await vision().textRecognizerProcessImage(localPath);

      console.log('Found text in document: ', processed.text);
      console.log('processed: ', processed);

      // processed.blocks.forEach((block) => {
      //   console.log('Found block with text: ', block.text);
      //   console.log('Confidence in block: ', block.confidence);
      //   console.log('Languages found in block: ', block.recognizedLanguages);
      // });
    } catch (e) {
      console.log('E =>', e);
    }

    setLoading('');
  }

  return (
    <View style={{flex: 1}}>
      {uri ? (
        <View style={style.contentContainer}>
          <Image resizeMode="contain" style={style.image} source={{uri: uri}} />
          <View style={style.overlapContainer}>
            {/* {smiling && <Message>You are not smiling</Message>}
            {leftEye && <Message>Your left eye is closed</Message>}
            {rightEye && <Message>Your right eye is closed</Message>}
            {face && <Message>No face detected, please take a selfie</Message>} */}
            <Button style={{marginTop: 10}} onPress={openGallery}>
              Choose Photo
            </Button>
          </View>
        </View>
      ) : (
        <View style={{justifyContent: 'center', flex: 1}}>
          <Button onPress={openGallery}>Choose Photo</Button>
        </View>
      )}
      {!!loading && <Loading>{loading}</Loading>}
    </View>
  );
}

export default TextRecognition;
