import React, { useState } from 'react';
import {
  Button, Image, Box
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import { TouchableHighlight } from 'react-native';
import { blue } from '../../config/theme';
import { setIMG } from '../../redux/actions/imageActions';

const upload = require('../../../assets/Upload.png');

const ImageCard = () => {
  const [image, setImage] = useState(upload);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1
    });

    if (!result.cancelled) {
    //   console.log(result.uri.split('base64,')[1]);
      dispatch(setIMG(result.uri));
      setImage(result.uri);
    }
  };

  return (
    <Box alignItems="center" justifyContent="center">

      <TouchableHighlight onPress={pickImage}>

        <Image
          source={{ uri: image === null ? upload : image }}
          w={300}
          h={300}
          resizeMode="stretch"
        />

      </TouchableHighlight>

      <Button
        isDisabled={image === upload}
        onPress={() => {
          navigation.push('Report');
        }}
        w={200}
        marginTop={10}
        colorScheme={blue}
      >
        Upload
      </Button>

    </Box>
  );
};

export default ImageCard;
