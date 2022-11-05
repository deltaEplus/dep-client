import React, { useState } from 'react';
import {
  Button, Image, Box
} from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import { TouchableHighlight } from 'react-native';
import { blue } from '../../config/theme';
import Loader from '../Loader';
import { getImageDetails } from '../../requests';

const upload = require('../../../assets/Upload.png');

const ImageCard = () => {
  const [image, setImage] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  const dataURItoBlob = (dataURI, name) => {
    let byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0) { byteString = atob(dataURI.split(',')[1]); } else { byteString = unescape(dataURI.split(',')[1]); }
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i += 1) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], { name, type: mimeString });
  };

  const fetchCSV = async () => {
    setShowLoader(true);
    const formdata = new FormData();
    const d = new Date();
    const dformat = `${d.getHours()}-${d.getMinutes()}-${d.getSeconds()}`;
    const name = `BMS_${dformat}.csv`;
    formdata.append('file', dataURItoBlob(image.uri, name));
    const res = await getImageDetails({ form: formdata });
    const contentType = 'text/csv';
    const csvFile = new Blob([res.data], { name, type: contentType });
    const a = document.createElement('a');
    a.download = name;
    a.href = window.URL.createObjectURL(csvFile);
    a.dataset.downloadurl = [contentType, a.download, a.href].join(':');
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    setShowLoader(false);
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1
    });

    if (!result.cancelled) {
      setImage(result);
    }
  };

  return (
    <form>
      <Box alignItems="center" justifyContent="center">

        <TouchableHighlight onPress={pickImage}>

          <Image
            source={{ uri: image === null ? upload : image.uri }}
            w={300}
            h={300}
            resizeMode="stretch"
          />

        </TouchableHighlight>

        {showLoader ? <Loader /> : (
          <Button
            isDisabled={image !== null && image.uri === upload}
            onPress={fetchCSV}
            w={200}
            marginTop={10}
            colorScheme={blue}
          >
            Upload
          </Button>
        )}

      </Box>
    </form>
  );
};

export default ImageCard;
