import axios from 'axios';
import { BMS_URL, WEATHER_URL } from './constants/urls';

export const getWeatherDetails = ({
  zipCode, floorArea, buildingType, energyCost
}) => axios.post(WEATHER_URL, {
  zipcode: zipCode,
  area: floorArea.replaceAll(',', ''),
  building_type: buildingType,
  energy_cost: energyCost.replaceAll(',', '')
});

export const getImageDetails = ({
  imageUrl
}) => axios.post(BMS_URL, {
  image: imageUrl
});
