/* eslint-disable no-unused-vars */
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
  form
}) => axios.post(BMS_URL, form, {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data'
  }

});
