import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, View, StatusBar} from 'react-native';
import {utils} from '@react-native-firebase/app';
import vision, {VisionFaceContourType} from '@react-native-firebase/ml-vision';

const App = () => {
  useEffect(function () {
    handleMount();
  }, []);

  async function handleMount() {
    const image = require('./izaan.jpg');

    try {
      await processFaces(image);
    } catch (e) {
      console.log('e =>', e);
    }
  }

  async function processFaces(localPath) {
    console.log(
      'utils.FilePath.PICTURES_DIRECTORY =>',
      utils.FilePath.PICTURES_DIRECTORY,
    );

    const faces = await vision().faceDetectorProcessImage(localPath);

    faces.forEach((face) => {
      console.log('Head rotation on Y axis: ', face.headEulerAngleY);
      console.log('Head rotation on Z axis: ', face.headEulerAngleZ);

      console.log('Left eye open probability: ', face.leftEyeOpenProbability);
      console.log('Right eye open probability: ', face.rightEyeOpenProbability);
      console.log('Smiling probability: ', face.smilingProbability);

      face.faceContours.forEach((contour) => {
        if (contour.type === VisionFaceContourType.FACE) {
          console.log('Face outline points: ', contour.points);
        }
      });
    });
  }

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View></View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
