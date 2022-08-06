import axios from 'axios';
import { WEATHER_URL } from './urls';

export const getWeatherDetails = ({ zipCode, floorArea, buildingType }) => axios.post(WEATHER_URL, {
  zipcode: zipCode,
  area: floorArea,
  building_type: buildingType
});